var MapObject = {
    /* Variables */
    objectLayer: null,
    objectTypes: { "bush", "wall", "crate", "water"},
    
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
                imageObj.src = ""; break;
            default:
                imageObj.src = "";
        }

        imageObj.onload = function(){
            var objectImage = new Kinetic.Image({
                x: coordX,
                y: coordY,
                width: 54,
                height: 54,
                image: imageObj
            });

            MapObject.objectLayer.add(objectImage);
            MapObject.objectLayer.draw();
        };
    }
};
