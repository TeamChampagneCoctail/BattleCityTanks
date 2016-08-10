var gameEngine = function() {
    'use strict';

    const playerStartX = 0,
        playerStartY = 0;

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

        document.addEventListener('keydown', function(ev) {
            let keyCode = ev.keyCode;
            if (keyCode === 37) {
                playerUnit.sprite.changeAnimation('left');
                let x = playerUnit.sprite.spriteSheet.getX();
                playerUnit.sprite.spriteSheet.setX(x - 5);
            } else if (keyCode === 38) {
                playerUnit.sprite.changeAnimation('up');
                let y = playerUnit.sprite.spriteSheet.getY();
                playerUnit.sprite.spriteSheet.setY(y - 5);
            } else if (keyCode === 39) {
                playerUnit.sprite.changeAnimation('right');
                let x = playerUnit.sprite.spriteSheet.getX();
                playerUnit.sprite.spriteSheet.setX(x + 5);
            } else if (keyCode === 40) {
                playerUnit.sprite.changeAnimation('down');
                let y = playerUnit.sprite.spriteSheet.getY();
                playerUnit.sprite.spriteSheet.setY(y + 5);
            }
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