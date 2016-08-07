var gameEngine = function() {
    'use strict';

    const playerImage = '../../assets/images/enemy.png';

    var gameStage,
        enemiesLayer,
        playerLayer;

    function initGame(container, canvasWidth, canvasHeight) {
        // TODO: Check params

        console.log(1);

        gameStage = new Kinetic.Stage({
            container: container,
            width: canvasWidth,
            height: canvasHeight
        });

        Map.init(gameStage);

        playerLayer = new Kinetic.Layer();

        sprite.createSprite({
                x: 0,
                y: 0,
                imageSrc: playerImage,
                animation: 'up',
                animations: {
                    'up': [{
                        x: 0,
                        y: 0,
                        width: 56,
                        height: 56
                    }, {
                        x: 56,
                        y: 0,
                        width: 56,
                        height: 56
                    }],
                    'right': [{
                        x: 0,
                        y: 56,
                        width: 56,
                        height: 56
                    }, {
                        x: 56,
                        y: 56,
                        width: 56,
                        height: 56
                    }],
                    'down': [{
                        x: 0,
                        y: 112,
                        width: 56,
                        height: 56
                    }, {
                        x: 56,
                        y: 112,
                        width: 56,
                        height: 56
                    }],
                    'left': [{
                        x: 0,
                        y: 168,
                        width: 56,
                        height: 56
                    }, {
                        x: 56,
                        y: 168,
                        width: 56,
                        height: 56
                    }],
                },
                frameRate: 5
            }, playerLayer,
            gameStage);
    }

    function startGame() {

    }

    return {
        initGame,
        startGame
    };
}();