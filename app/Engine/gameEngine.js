var gameEngine = function() {
    'use strict';

    const playerStartX = 11 * 40,
        playerStartY = 16 * 40,
        enemyStartX = 0,
        enemyStartY = 0,
        enemiesOnMapCount = 3,
        totalEnemiesCount = 6;

    let uiObject,
        enemiesLayer,
        playerLayer,
        playerUnit,
        enemies = [],
        projectiles = [],
        unitsFactory;

    function initGame(uiObject, inputProvider, unitsFactory) {
        uiObject.createGameStage();
        playerLayer = uiObject.getNewLayer();
        enemiesLayer = uiObject.getNewLayer();
        unitsFactory = unitsFactory;

        Map.init(uiObject.gameStage);
        playerUnit = unitsFactory.createPlayer(playerStartX, playerStartY).render(enemiesLayer);
        createEnemies(unitsFactory);

        uiObject.addLayer(playerLayer)
            .addLayer(enemiesLayer);
    }

    function startGame() {
        inputProvider.listenForCommand(executePlayerMoving, executeFiring);
        // gameAnimationLoop();
    }

    function gameAnimationLoop() {
        // debugger;
    }

    function executePlayerMoving(direction) {
        playerUnit.move(direction, Map.isNextPositionAvailable);
    }

    function executeFiring() {
        let movingDirection = playerUnit.movingDirection;
    }

    function reset() {

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