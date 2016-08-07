var Map= {
    /* Variables */
    mapLayer: null,
    backgroundLayer: null,
    mapObjects: {},

    /* Functions */
    drawBackgroundImage: function(stage){
        Map.backgroundLayer = new Kinetic.Layer();

        var imageObj = new Image();
        imageObj.src = "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4";

        var backgroundImage = new Kinetic.Rect({
            x: 0,
            y: 0,
            width: stage.getWidth(),
            height: stage.getHeight(),
            fillPatternImage: imageObj,
            fillPatternRepeat: 'repeat-x'
            //fill: 'yellow'
        });



        imageObj.onload = function(){
            backgroundImage.setFillPatternImage(backgroundImage);
            backgroundImage.fillPatternScaleX(1);
            backgroundImage.fillPatternScaleY(1);

        };


       /* var backgroundImage = new Kinetic.Image({
            image: imageObj
        });*/
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
        // Map.drawBackgroundImage(stage);
        Map.drawBackgroundImage(stage);
        Map.drawMapObjects();

        // 3. Add layers to main stage
        stage.add(Map.backgroundLayer);
        stage.add(Map.mapLayer);

        // 4. Draw the map
        Map.mapLayer.draw();
    }
};