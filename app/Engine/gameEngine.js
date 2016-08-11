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
        unitsFactory,
        bullet;

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
        inputProvider.listenForCommand(executePlayerMoving, executeFiring);
    }

    function executePlayerMoving(direction) {
        playerUnit.move(direction, Map.isNextPositionAvailable);
    }

    function executeFiring() {
        let dir = playerUnit.movingDirection;
        bullet = gameUnitsFactory.createBullet(playerUnit.x + playerUnit.width / 2, playerUnit.y - 13, dir);
        bullet.render(projectilesLayer);
        // gameAnimationLoop();
    }

    function gameAnimationLoop() {
        console.log(bullet.movingDirection);
        bullet.move(directions[bullet.movingDirection]);
        requestAnimationFrame(gameAnimationLoop);
    }

    function createEnemies(unitsFactory) {
        while (enemies.length < enemiesOnMapCount) {
            let newEnemy = unitsFactory.createEnemy(enemyStartX, enemyStartY).render(enemiesLayer);
            enemies.push(newEnemy);
        }
    }

    return {
        initGame,
        startGame
    };
}();