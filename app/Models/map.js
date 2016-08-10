var Map = function() {
    'use strict';

    let mapPrototype = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '1', ' ', '1', '2', ' ', '1', '5', '4', '5', '2', '1', ' ', ' ', '1', '2', '5', '4', '5', '1', ' ', '2', '1', ' ', '1', ' '],
        [' ', '1', ' ', '1', '2', ' ', '1', ' ', ' ', ' ', ' ', '1', ' ', ' ', '1', ' ', ' ', ' ', ' ', '1', ' ', '2', '1', ' ', '1', ' '],
        [' ', '1', ' ', '1', '2', ' ', '1', ' ', ' ', ' ', ' ', '1', ' ', ' ', '1', ' ', ' ', ' ', ' ', '1', ' ', '2', '1', ' ', '1', ' '],
        [' ', '1', ' ', '1', '2', ' ', '1', ' ', ' ', '1', ' ', '1', ' ', ' ', '1', ' ', '1', ' ', ' ', '1', ' ', '2', '1', ' ', '1', ' '],
        [' ', '1', ' ', '1', '2', ' ', '1', '5', '4', '1', ' ', '1', ' ', ' ', '1', ' ', '1', '4', '5', '1', ' ', '2', '1', ' ', '1', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['5', ' ', '1', '1', '1', '5', '4', '5', '4', '5', '4', '5', '4', '5', '4', '5', '4', '5', '4', '5', '5', '1', '1', '1', ' ', '5'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '1', '1', ' ', '1', ' ', '1', ' ', '1', '1', '1', ' ', '1', ' ', ' ', ' ', '1', ' ', '1', '1', '1', ' ', '1', '1', '1', ' '],
        [' ', '1', ' ', ' ', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', '1', ' ', '1', '1', ' ', '1', ' ', '1', ' ', '1', ' ', ' ', ' '],
        [' ', '1', ' ', ' ', '1', '1', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', '1', '1', ' ', '1', '1', '1', ' '],
        [' ', '1', ' ', ' ', '1', '1', '1', ' ', '1', '1', '1', ' ', '1', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', ' ', '1', '1', '1', ' '],
        [' ', '1', ' ', ' ', '1', ' ', '1', ' ', '1', '1', '1', ' ', '1', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', ' ', ' ', ' ', '1', ' '],
        [' ', '1', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', ' ', '1', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', ' ', '1', '1', '1', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4', '4', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

    let Map = {
        mapLayer: null,
        objectsLayer: null,
        backgroundLayer: null,
        mapObjects: [],
        layers: [],
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
            var imageObj = new Image();
            for (let row = 0; row < 17; row += 1) {
                for (let col = 0; col < 26; col += 1) {
                    let tileType = mapPrototype[row][col];
                    if (tileType !== ' ') {
                        let tileX = col * 40;
                        let tileY = row * 40;
                        let tile = Object.create(MapObject);
                        tile.init({
                            type: tileType,
                            x: tileX,
                            y: tileY,
                            imageObject: imageObj.cloneNode()
                        }, Map.objectsLayer);

                        Map.mapObjects.push(tile);
                    }
                }
            }
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

    return Map;
}();