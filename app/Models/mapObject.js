var MapObject = function() {
    'use strict';

    let mapObject = {
        init: function(options) {
            this.objectLayer = options.uiLayer;
            this.type = options.type;
            this.x = options.x;
            this.y = options.y;
            this.imageObject = options.imageObject;
            this.draw();
        },
        draw: function() {
            let imageObj = this.imageObject;

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
            let x = this.x;
            let y = this.y;

            this.imageObject.onload = function() {
                var objectImage = new Kinetic.Image({
                    x: x,
                    y: y,
                    width: 40,
                    height: 40,
                    image: imageObj
                });
                
                layer.add(objectImage);
                layer.draw();
            };
        }
    };

    return mapObject;
}();