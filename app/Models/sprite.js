var sprite = function() {
    'use strict';

    function createSprite(options) {
        let sprite = new Kinetic.Sprite({
            x: options.x,
            y: options.y,
            image: options.imageSrc,
            animation: options.animation,
            animations: options.animations,
            frameRate: options.frameRate,
            frameIndex: 0
        });

        return sprite;
    }

    return {
        createSprite
    };
}();