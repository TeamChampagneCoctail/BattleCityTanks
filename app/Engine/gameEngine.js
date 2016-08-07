var gameEngine = function() {
    'use strict';
    
    const playerImage = '../../assets/images/NT/normal_down1.bmp',
          enemyImage = '../../assets/images/NT/normal_down2.bmp';

    var gameStage,
        backgroundLayer,
        enemiesLayer,
        playerLayer;

    function initGame(container, canvasWidth, canvasHeight) {
        // TODO: Check params

        gameStage = new Kinetic.Stage({
            container: container,
            width: canvasWidth,
            height: canvasHeight
        });

        let background = new Kinetic.Rect({
            x: 0,
            y: 0,
            width: canvasWidth,
            height: canvasHeight,
            fill: 'yellowgreen'
        });

        let player = {
            x: 10,
            y: 10,
            width: 40,
            height: 40,
            imageSrc: playerImage
        };

        let enemy = {
          x: canvasWidth - 10,
          y: 10,
          width: 40,
          height: 40,
          imageSrc: enemyImage
        };

        backgroundLayer = new Kinetic.Layer();
        playerLayer = new Kinetic.Layer();
        enemiesLayer = new Kinetic.Layer();

        backgroundLayer.add(background);
        addLayers();

        // eventListener();
    }

    function startGame() {

    }

    // Check why not working!!!
    // function eventListener() {
    //     $('#canvas-container').on('keypress', function(ev) {
    //         console.log(ev);
    //     });
    // }

    function addLayers() {
        gameStage.add(backgroundLayer);
        gameStage.add(playerLayer);
    }

    return {
        initGame,
        startGame
    };
}();
