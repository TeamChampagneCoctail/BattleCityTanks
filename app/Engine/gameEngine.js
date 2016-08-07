var gameEngine = function() {
    'use strict';

    const playerImageSrc = '../../assets/images/tank-spritesheet.png';

    var gameStage,
        enemiesLayer,
        playerLayer;

    function initGame(container, canvasWidth, canvasHeight) {
        // TODO: Check params

        gameStage = new Kinetic.Stage({
            container: container,
            width: canvasWidth,
            height: canvasHeight
        });

        Map.init(gameStage);

        playerLayer = new Kinetic.Layer();

        player.init({
            x: 10,
            y: 10,
            width: 63,
            height: 75,
            imageSrc: playerImageSrc
        }, playerLayer);

        gameStage.add(playerLayer);
    }

    function startGame() {

    }

    return {
        initGame,
        startGame
    };
}();