/*
 *** ****@@*** *
 *** ****@@*** *
 *** ****@@*** *
 *** ****@@*** *
 */

// 1-tuhla,2-grass, 3- water, 4-box, 5-stone
var Map = {
    /* Variables */
    mapLayer: null,
    objectsLayer: null,
    backgroundLayer: null,
    mapObjects: [],
    layers: [],
    mapPrototype: [
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', '1', ' ', '2', ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', ' ',
        ' ', '1', ' ', '1', '2', ' ', '1', '5', '1', ' ', '2', '1', ' ', '2', ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', ' ',
        ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', '1', ' ', '2', ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', ' ',
        ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', '1', ' ', '2', ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', ' ',
        ' ', '1', ' ', '1', '2', ' ', '1', '5', '1', ' ', '2', '1', ' ', '2', ' ', '1', ' ', '1', '2', ' ', '1', ' ', '1', ' ', '2', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        '5', ' ', '1', '1', '1', '5', '5', '1', '1', '1', '1', '1', '1', '5', '5', '1', '1', '1', '1', ' ', '5', '1', '1', '1', '1', '5',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '5', '1', ' ', ' ', '1', '1', '5', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', '1', ' ', '3', ' ', '1', ' ', '1', '3', ' ', '1', ' ', '1', ' ', '3', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4', '4', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ],

    /* Functions */
    drawBackgroundImage: function(stage) {
        Map.backgroundLayer = new Kinetic.Layer();

        var imageObj = new Image();
        imageObj.src = "assets/images/map/map_background.png";

        imageObj.onload = function() {
            var backgroundImage = new Kinetic.Rect({
                x: 0,
                y: 0,
                width: stage.getWidth(),
                height: stage.getHeight(),
                fillPatternImage: imageObj,
                fillPatternRepeat: 'repeat'
            });

            Map.backgroundLayer.add(backgroundImage);
            Map.backgroundLayer.draw();
        };
    },

    setupMapObjects: function() {
        Map.objectsLayer = new Kinetic.Layer();
        for (var row = 0; row < 26; row += 1) {
            for (var col = 0; col < 17; col += 1) {
                let tileX = row * 40;
                let tileY = col * 40;
                let tile = Object.create(MapObject);
                tile.init({
                    uiLayer: Map.objectsLayer,
                    type: 'crate',
                    x: tileX,
                    y: tileY
                });
               // console.log(tile);
                Map.mapObjects.push(tile);
            }
        }

        console.dir(Map.objectsLayer);
    },

    drawMapObjects: function() {

    },

    /* Initialize */
    init: function(stage) {
        // 1. Initiate map layer & objects
        Map.mapLayer = new Kinetic.Layer();
        
        // 2. Draw objects
        Map.drawBackgroundImage(stage);
        Map.drawMapObjects();

        Map.setupMapObjects();

        // 3. Add layers to main stage
        stage.add(Map.backgroundLayer);
        stage.add(Map.mapLayer);
        stage.add(Map.objectsLayer);

        // 4. Draw the map
        Map.mapLayer.draw();
    }
};