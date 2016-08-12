var gameEngine = function() {
    'use strict';

    const playerStartX = 11 * 40,
        playerStartY = 16 * 40,
        enemyStartX = 0,
        enemyStartY = 0,
        enemiesOnMapCount = 3,
        totalEnemiesCount = 6,
        directions = {
            'up': {
                x: 0,
                y: -1
            },
            'down': {
                x: 0,
                y: 1
            },
            'left': {
                x: -1,
                y: 0
            },
            'right': {
                x: 1,
                y: 0
            },
        };

    let uiObject,
        enemiesLayer,
        playerLayer,
        projectilesLayer,
        eagleTarget,
        eagleTargetLayer,
        playerUnit,
        enemies = [],
        projectiles = [],
        unitsFactory;

    function initGame(uiObject, inputProvider, unitsFactory) {
        // Canvas stuff
        uiObject.createGameStage();
        playerLayer = uiObject.getNewLayer();
        enemiesLayer = uiObject.getNewLayer();
        unitsFactory = unitsFactory;
        projectilesLayer = uiObject.getNewLayer();
        eagleTargetLayer = uiObject.getNewLayer();

        // Units creating
        Map.init(uiObject.gameStage);
        playerUnit = unitsFactory.createPlayer(playerStartX, playerStartY).render(playerLayer);
        eagleTarget = unitsFactory.createEagleTarget().render(eagleTargetLayer);
        createEnemies(unitsFactory);
        executeEnemyMoving();
        uiObject.addLayer(playerLayer)
            .addLayer(enemiesLayer)
            .addLayer(projectilesLayer)
            .addLayer(eagleTargetLayer);
    }

    function startGame() {
        inputProvider.listenForCommand(executePlayerMoving, executePlayerFiring);
        gameAnimationLoop();
    }

    function executePlayerMoving(direction) {
        playerUnit.move(direction, Map.isNextPositionAvailable);
    }

    function executePlayerFiring() {
        let bullet = playerUnit.fire(gameUnitsFactory).render(projectilesLayer);
        projectiles.push(bullet);
    }

    function gameAnimationLoop() {
        for (let i = 0; i < projectiles.length; i += 1) {
            let bullet = projectiles[i];
            let bulletDirection = directions[bullet.movingDirection];
            let canFlyAnyMore = Map.isNextPositionAvailable({
                x: bullet.x + bulletDirection.x,
                y: bullet.y + bulletDirection.y,
                width: bullet.width,
                height: bullet.height
            });
            if (!canFlyAnyMore) {
                bullet.sprite.spriteSheet.remove();
                projectiles.slice(i, 1);
                continue;
            }

            for (let j = 0; j < enemies.length; j += 1) {
                let enemyOnMap = enemies[j];

                if (collisionDetector.areUnitsColliding(enemyOnMap, bullet)) {
                    bullet.sprite.remove();
                    projectiles.slice(i, 1);
                    enemyOnMap.sprite.remove();
                    enemies.slice(i, 1);
                }
            }

            bullet.move(bulletDirection);
        }
        
        enemies.forEach(function(enemyOnMap, i) {
            enemyOnMap.move(Map.isNextPositionAvailable);

            if(collisionDetector.areUnitsColliding(enemyOnMap, playerUnit)){
                playerUnit.sprite.remove();

                enemyOnMap.sprite.remove();
                enemies.slice(i, 1);
                

                //todo game over
                createExplosion(playerUnit.x, playerUnit.y);
                playerUnit = null;

                return;
            }
        });

        requestAnimationFrame(gameAnimationLoop);
    }

    function createEnemies(unitsFactory) {
        let newEnemy = unitsFactory.createEnemy(enemyStartX, enemyStartY).render(enemiesLayer);
        enemies.push(newEnemy);
    }

    function createExplosion(explosionX, explosionY){
        let newExplosion = Object.create(explosion);

        newExplosion.render(playerLayer, explosionX, explosionY);

        setTimeout(function(){
            newExplosion.remove();
            newExplosion = null;
        }, 1000)
    }

    function resetGame(){

    }

    function gameOver(){
        
    }

    function executeEnemyMoving() {
        for (let enemy of enemies) {
            enemy.move(Map.isNextPositionAvailable);
        }
    }

    return {
        initGame,
        startGame
    };
}();