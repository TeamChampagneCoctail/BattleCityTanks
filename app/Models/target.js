var target = function(parent){
    const eagleTargetX = 13 * 40,
          eagleTargetY = 16 * 40;

    let target = Object.create(parent);

    Object.defineProperty(target, 'render', {
        value: function(layer) {
            var imageObj = new Image();
            imageObj.addEventListener('load', function(){
                var eagleImage = new Kinetic.Image({
                    x: eagleTargetX,
                    y: eagleTargetY,
                    width: 40,
                    height: 40,
                    image: imageObj
                });

                layer.add(eagleImage);
                layer.draw();
            });

            imageObj.src = "assets/images/map/eagle.png";

            return this;
        }
    });

    return target;

}(gameObject);