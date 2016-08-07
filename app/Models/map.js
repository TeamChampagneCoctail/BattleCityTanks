var Map= {
    /* Variables */
    mapLayer: null,
    backgroundLayer: null,
    mapObjects: {},

    /* Functions */
    drawBackgroundImage: function(){
        Map.backgroundLayer = new Kinetic.Layer();

        var imageObj = new Image();
        imageObj.src = "../assets/images/";

        var backgroundImage = new Kinetic.Image({
            image: imageObj
        });

        Map.backgroundLayer.add(backgroundImage);
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
        Map.drawBackgroundImage();
        Map.drawMapObjects();

        // 3. Add layers to main stage
        stage.add(Map.backgroundLayer);
        stage.add(Map.mapLayer);

        // 4. Draw the map
        Map.mapLayer.draw();
    }
};