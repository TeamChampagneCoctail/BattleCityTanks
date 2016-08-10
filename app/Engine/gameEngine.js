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
        let enemyUnit1 = gameUnitsFactory.createEnemy(canvasWidth - 40, 0, enemiesLayer);
        let enemyUnit2 = gameUnitsFactory.createEnemy(canvasWidth - 40, 240, enemiesLayer);
        enemyUnit2.sprite.changeAnimation('left');

        // Moving enemy without animation.
        for (var i = 0; i < 9999; i++) {
                 if (enemyUnit1.width.startAnimation === 'down') {

                   let y = enemyUnit1.sprite.spriteSheet.getY();
                   enemyUnit1.sprite.spriteSheet.setY(y + 5);
                 }else if (enemyUnit1.width.startAnimation === 'right'){

                   let x = enemyUnit1.sprite.spriteSheet.getX();
                   enemyUnit1.sprite.spriteSheet.setX(x + 5);
                 }else if (enemyUnit1.width.startAnimation === 'up') {

                   let y = enemyUnit1.sprite.spriteSheet.getY();
                   enemyUnit1.sprite.spriteSheet.setY(y - 5);
                 }else if (enemyUnit1.width.startAnimation === 'left') {

                   let x = enemyUnit1.sprite.spriteSheet.getX();
                   enemyUnit1.sprite.spriteSheet.setX(x - 5);
                 }

                 if (enemyUnit1.sprite.spriteSheet.getY() === canvasHeight - 40 &&
                     enemyUnit1.width.startAnimation === 'down') {

                     enemyUnit1.sprite.changeAnimation('left');
                     enemyUnit1.width.startAnimation = 'left';

                 }else if (enemyUnit1.sprite.spriteSheet.getX() === 0 &&
                     enemyUnit1.width.startAnimation === 'left'){

                     enemyUnit1.sprite.changeAnimation('up');
                     enemyUnit1.width.startAnimation = 'up';

                }else if (enemyUnit1.sprite.spriteSheet.getY() === 0 &&
                     enemyUnit1.width.startAnimation === 'up'){

                     enemyUnit1.sprite.changeAnimation('right');
                     enemyUnit1.width.startAnimation = 'right';

                }else if (enemyUnit1.sprite.spriteSheet.getX() === canvasWidth - 40 &&
                     enemyUnit1.width.startAnimation === 'right'){

                     enemyUnit1.sprite.changeAnimation('down');
                     enemyUnit1.width.startAnimation = 'down';

                }
        }
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
