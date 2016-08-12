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

        // Units creating
        Map.init(uiObject.gameStage);
        playerUnit = unitsFactory.createPlayer(playerStartX, playerStartY).render(playerLayer);
        createEnemies(unitsFactory);

        uiObject.addLayer(playerLayer)
            .addLayer(enemiesLayer)
            .addLayer(projectilesLayer);
    }

    function startGame() {
        inputProvider.listenForCommand(executePlayerMoving, executePlayerFiring);
        gameAnimationLoop();
    }

    function executePlayerMoving(direction) {
        playerUnit.move(direction, Map.isNextPositionAvailable);
    }

    function executePlayerFiring() {
        let dir = playerUnit.movingDirection;
        let bulletX;
        let bulletY;
        let bullet = gameUnitsFactory.createBullet(playerUnit.x + playerUnit.width / 2, playerUnit.y - 13, dir)
            .render(projectilesLayer);
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


        enemies.forEach(function(enemyOnMap) {
            enemyOnMap.move(Map.isNextPositionAvailable);
        });

        requestAnimationFrame(gameAnimationLoop);
    }

    function createEnemies(unitsFactory) {
        let newEnemy = unitsFactory.createEnemy(enemyStartX, enemyStartY).render(enemiesLayer);
        enemies.push(newEnemy);
    }

    return {
        initGame,
        startGame
    };
}();