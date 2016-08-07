var sprite = function() {
    'use strict';

    function createSprite(options, layer) {
        let image,
            sprite;

        image = new Image();
        image.onload = function() {
            sprite = new Kinetic.Sprite({
                x: options.x,
                y: options.y,
                image: image,
                animation: options.animation,
                animations: options.animations,
                frameRate: options.frameRate,
                frameIndex: 0
            });
            layer.add(sprite);
            sprite.start();
        };

        image.src = options.imageSrc;
    }

    return {
        createSprite
    };
}();