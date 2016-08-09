var MapObject = {
    /* Variables */
    objectLayer: null,
    objectTypes: ["bush", "wall", "crate", "water"],

    /* Functions */

    drawObject: function(type, coordX, coordY){
        MapObject.objectLayer = new Kinetic.Layer();

        var imageObj = new Image();

        switch(type){
            case "bush":
                imageObj.src = ""; break;
            case "wall":
                imageObj.src = ""; break;
            case "water":
                imageObj.src = ""; break;
            case "crate":
                imageObj.src = "assets/images/map/crate.jpg"; break;
            default:
                imageObj.src = "";
        }

        imageObj.onload = function(){
            var objectImage = new Kinetic.Image({
                x: coordX,
                y: coordY,
                width: 40,
                height: 40,
                image: imageObj
            });

            MapObject.objectLayer.add(objectImage);
            MapObject.objectLayer.draw();
        };
    }
};
