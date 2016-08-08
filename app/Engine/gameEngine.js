var gameEngine = function() {
    'use strict';

    const playerStartX = 10,
        playerStartY = 10;

    let gameStage,
        enemiesLayer,
        playerLayer,
        playerUnit;

    function initGame(container, canvasWidth, canvasHeight) {
        gameStage = new Kinetic.Stage({
            container: container,
            width: canvasWidth,
            height: canvasHeight
        });
        playerLayer = new Kinetic.Layer();
        enemiesLayer = new Kinetic.Layer();

        // Creating units.
        Map.init(gameStage);
        playerUnit = gameUnitsFactory.createPlayer(playerStartX, playerStartY, playerLayer);
        let enemyUnit1 = gameUnitsFactory.createEnemy(150, 50, enemiesLayer);
        let enemyUnit2 = gameUnitsFactory.createEnemy(150, 150, enemiesLayer);

        document.addEventListener('click', function() {
            playerUnit.sprite.changeAnimation('down');
            enemyUnit1.sprite.changeAnimation('up');
            enemyUnit2.sprite.changeAnimation('right');
        });

        addLayers();
    }

    function startGame() {

    }

    function addLayers() {
        gameStage.add(playerLayer);
        gameStage.add(enemiesLayer);
    }

    return {
        initGame,
        startGame
    };
}();