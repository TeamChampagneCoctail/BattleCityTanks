var gameEngine = function() {
    'use strict';

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

        addLayers();
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