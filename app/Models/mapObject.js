var MapObject = function(parent) {
    'use strict';

    const brickTile = '1',
        forestTile = '2',
        waterTile = '3',
        crateTile = '4',
        stoneTile = '5';

    let mapObject = Object.create(parent);

    Object.defineProperty(mapObject, 'init', {
        value: function(options, uiLayer) {
            parent.init.call(this, options.x, options.y, options.width, options.height);
            this.type = options.type;
            this.uiLayer = uiLayer;
            this.imageObject = options.imageObject;
            this.render();
        }
    });

    Object.defineProperty(mapObject, 'render', {
        value: function() {
            let image = this.imageObject;
            switch (this.type) {
                case brickTile:
                    image.src = "assets/images/map/bricks.png";
                    break;
                case forestTile:
                    image.src = "assets/images/map/forest.png";
                    break;
                case waterTile:
                    image.src = "assets/images/map/water.png";
                    break;
                case crateTile:
                    image.src = "assets/images/map/crate.png";
                    break;
                case stoneTile:
                    image.src = "assets/images/map/stone.png";
                    break;
                default:
                    throw new Error('Invalid mapObject type!!!');
            }

            let layer = this.uiLayer,
                coordX = this.x,
                coordY = this.y,
                width = this.width,
                height = this.height;
            this.imageObject.onload = function() {
                var objectImage = new Kinetic.Image({
                    x: coordX,
                    y: coordY,
                    width: width,
                    height: height,
                    image: image
                });
                layer.add(objectImage);
                layer.draw();
            };
        }
    });

    return mapObject;
}(gameObject);