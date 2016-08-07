var sprite = function() {
    'use strict';

    function createSprite(options, layer, stage) {
        let image;

        image = new Image();
        image.onload = function() {
            let sprite = new Kinetic.Sprite({
                x: options.x,
                y: options.y,
                image: image,
                animation: options.animation,
                animations: options.animations,
                frameRate: options.frameRate,
                frameIndex: 0
            });

            let rect = new Kinetic.Rect({
                x: 0,
                y: 10,
                width: 100,
                height: 100,
                fill: 'red'
            });


            console.log(sprite.x);
            layer.add(sprite);
            stage.add(layer);

            sprite.start();
        };

        image.src = options.imageSrc;
    }

    return {
        createSprite
    };
}();