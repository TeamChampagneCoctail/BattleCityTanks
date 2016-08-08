var gameEngine = function() {
    'use strict';

    const playerImageSrc = '../../assets/images/tanks/player-spritesheet.png',
        enemyImageSrc = '../../assets/images/tanks/enemy-spritesheet.png';

    var gameStage,
        enemiesLayer,
        playerLayer;

    function initGame(container, canvasWidth, canvasHeight) {
        gameStage = new Kinetic.Stage({
            container: container,
            width: canvasWidth,
            height: canvasHeight
        });
        playerLayer = new Kinetic.Layer();

        Map.init(gameStage);

        player.init({
            x: 10,
            y: 10,
            width: 63,
            height: 75,
            imageSrc: playerImageSrc,
            startAnimation: 'up',
            animations: {
                'up': [
                    0, 120, 40, 40,
                    40, 120, 40, 40,
                    80, 120, 40, 40
                ],
                'down': [
                    0, 0, 40, 40,
                    40, 0, 40, 40,
                    80, 0, 40, 40
                ],
                'left': [
                    0, 40, 40, 40,
                    40, 40, 40, 40,
                    80, 40, 40, 40
                ],
                'right': [
                    0, 80, 40, 40,
                    40, 80, 40, 40,
                    80, 80, 40, 40
                ],
            }
        }, playerLayer);

        addLayers();
        // document.addEventListener('keydown', function(ev) {
        //     let keyCode = ev.keyCode;
        //     if (keyCode === 37) {
        //         player.spriteObject.changeAnimation('left');
        //     } else if (keyCode === 38) {
        //         player.spriteObject.changeAnimation('up');
        //     } else if (keyCode === 39) {
        //         player.spriteObject.changeAnimation('right');
        //     } else if (keyCode === 40) {
        //         player.spriteObject.changeAnimation('down');
        //     }
        // });
    }

    function startGame() {

    }

    function addLayers() {
        gameStage.add(playerLayer);
    }

    return {
        initGame,
        startGame
    };
}();