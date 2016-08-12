var explosion = function(parent){
    let explosion = Object.create(parent);

    Object.defineProperty(explosion, 'render', {
        value: function(layer, explosionX, explosionY) {
            var imageObj = new Image();
            imageObj.addEventListener('load', function(){
                var explosionImage = new Kinetic.Image({
                    x: explosionX,
                    y: explosionY,
                    width: 40,
                    height: 40,
                    image: imageObj

                });

                layer.add(explosionImage);
                layer.draw();
            });

            imageObj.src = "assets/images/Missile/explosion.png";

            return this;
        }
    });

    return explosion;

}(gameObject);