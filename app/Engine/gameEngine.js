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
        playerUnit = gameUnitsFactory.createPlayer(playerStartX, playerStartY);
        let enemyUnit1 = gameUnitsFactory.createEnemy(canvasWidth - 40, 0);
        let enemyUnit2 = gameUnitsFactory.createEnemy(canvasWidth - 40, 240);
        enemyUnit2.sprite.changeAnimation('left');

        // Moving enemy without animation.
        for (var i = 0; i < 9999; i++) {
            if (enemyUnit1.width.startAnimation === 'down') {

                let y = enemyUnit1.sprite.spriteSheet.getY();
                enemyUnit1.sprite.spriteSheet.setY(y + 5);
            } else if (enemyUnit1.width.startAnimation === 'right') {

                let x = enemyUnit1.sprite.spriteSheet.getX();
                enemyUnit1.sprite.spriteSheet.setX(x + 5);
            } else if (enemyUnit1.width.startAnimation === 'up') {

                let y = enemyUnit1.sprite.spriteSheet.getY();
                enemyUnit1.sprite.spriteSheet.setY(y - 5);
            } else if (enemyUnit1.width.startAnimation === 'left') {

                let x = enemyUnit1.sprite.spriteSheet.getX();
                enemyUnit1.sprite.spriteSheet.setX(x - 5);
            }

            if (enemyUnit1.sprite.spriteSheet.getY() === canvasHeight - 40 &&
                enemyUnit1.width.startAnimation === 'down') {

                enemyUnit1.sprite.changeAnimation('left');
                enemyUnit1.width.startAnimation = 'left';

            } else if (enemyUnit1.sprite.spriteSheet.getX() === 0 &&
                enemyUnit1.width.startAnimation === 'left') {

                enemyUnit1.sprite.changeAnimation('up');
                enemyUnit1.width.startAnimation = 'up';

            } else if (enemyUnit1.sprite.spriteSheet.getY() === 0 &&
                enemyUnit1.width.startAnimation === 'up') {

                enemyUnit1.sprite.changeAnimation('right');
                enemyUnit1.width.startAnimation = 'right';

            } else if (enemyUnit1.sprite.spriteSheet.getX() === canvasWidth - 40 &&
                enemyUnit1.width.startAnimation === 'right') {

                enemyUnit1.sprite.changeAnimation('down');
                enemyUnit1.width.startAnimation = 'down';

            }
        }

        document.addEventListener('click', function() {
            // debugger;
            playerUnit.render(playerLayer);
            enemyUnit1.render(enemiesLayer);
            enemyUnit2.render(enemiesLayer);
        });


        document.addEventListener('keydown', function(ev) {
            let keyCode = ev.keyCode;
            let currentCoord = {
                x: playerUnit.sprite.spriteSheet.getX(),
                y: playerUnit.sprite.spriteSheet.getY()
            };
            let newCoord = {};
            if (keyCode === 37) {
                playerUnit.sprite.changeAnimation('left');
                newCoord.x = currentCoord.x - 5;
                newCoord.y = currentCoord.y;
            } else if (keyCode === 38) {
                playerUnit.sprite.changeAnimation('up');
                newCoord.x = currentCoord.x;
                newCoord.y = currentCoord.y - 5;
            } else if (keyCode === 39) {
                playerUnit.sprite.changeAnimation('right');
                newCoord.x = currentCoord.x + 5;
                newCoord.y = currentCoord.y;
            } else if (keyCode === 40) {
                playerUnit.sprite.changeAnimation('down');
                newCoord.x = currentCoord.x;
                newCoord.y = currentCoord.y + 5;
            } else if (keyCode == 32) {
                playerUnit.fire(); //todo add direction
            }

            let canGo = Map.isNextPositionAvailable({
                x: newCoord.x,
                y: newCoord.y,
                width: 39,
                height: 39
            }, canvasWidth, canvasHeight);

            console.log(canGo);

            if (canGo) {
                playerUnit.sprite.spriteSheet.setX(newCoord.x);
                playerUnit.sprite.spriteSheet.setY(newCoord.y);
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