var MapObject = function() {
    'use strict';

    let mapObject = {
        init: function(options) {
            this.objectLayer = options.uiLayer;
            this.type = options.type;
            this.x = options.x;
            this.y = options.y;
            this.draw();
        },
        draw: function() {
            var imageObj = new Image();
            switch (this.type) {
                case "bush":
                    imageObj.src = "";
                    break;
                case "wall":
                    imageObj.src = "";
                    break;
                case "water":
                    imageObj.src = "";
                    break;
                case "crate":
                    imageObj.src = "assets/images/map/crate.jpg";
                    break;
                default:
                    imageObj.src = "";
            }

            let layer = this.objectLayer;
            imageObj.onload = function() {
                // var objectImage = new Kinetic.Image({
                //     x: this.x,
                //     y: this.y,
                //     width: 40,
                //     height: 40,
                //     image: imageObj
                // });

                let objectImage = new Kinetic.Rect({
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40,
                    fillPatternImage: imageObj,
                });

                layer.add(objectImage);
                layer.draw();
            };
        }
    };

    return mapObject;
}();