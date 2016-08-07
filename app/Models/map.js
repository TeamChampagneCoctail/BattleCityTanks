var Map= {
    /* Variables */
    mapLayer: null,
    backgroundLayer: null,
    mapObjects: {},

    /* Functions */

    drawBackgroundImage: function(stage){
        Map.backgroundLayer = new Kinetic.Layer();

        var imageObj = new Image();
        imageObj.src = "assets/images/map/map_background.png";

        imageObj.onload = function(){
            var backgroundImage = new Kinetic.Rect({
                x: 0,
                y: 0,
                width: stage.getWidth(),
                height: stage.getHeight(),
                fillPatternImage: imageObj,
                fillPatternRepeat: 'repeat-x'
            });

            Map.backgroundLayer.add(backgroundImage);
            Map.backgroundLayer.draw();
        };
    },

    setupMapObjects: function(){

    },

    drawMapObjects: function(){

    },

    /* Initialize */
    init: function(stage){
        // 1. Initiate map layer & objects
        Map.mapLayer = new Kinetic.Layer();
        Map.setupMapObjects();


        // 2. Draw objects
        Map.drawBackgroundImage(stage);
        Map.drawMapObjects();

        // 3. Add layers to main stage
        stage.add(Map.backgroundLayer);
        stage.add(Map.mapLayer);

        //console.dir(Map.backgroundLayer);

        // 4. Draw the map
        Map.mapLayer.draw();
    }
};