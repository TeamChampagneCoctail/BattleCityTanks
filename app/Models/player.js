var player = function() {
    'use strict';

    const frameRate = 10,
        startAnimation = 'up';

    let x,
        y,
        width,
        height,
        imageSrc,
        movingDirection,
        sprite = Object.create(spriteObject);

    function init(options, layer) {
        x = options.x;
        y = options.y;
        width = options.width;
        height = options.height;
        imageSrc = options.imageSrc;
        sprite.createSprite({
            x: 0,
            y: 0,
            imageSrc: options.imageSrc,
            frameRate: frameRate,
            animation: startAnimation,
            animations: {
                'up': [
                    0, 120, 40, 40,
                    40, 120, 40, 40,
                    80, 120, 40, 40
                ],
                'down': [
                    0, 0, 40, 40,
                    40, 0, 40, 40,
                    80, 0, 40, 40
                ],
                'left': [
                    0, 40, 40, 40,
                    40, 40, 40, 40,
                    80, 40, 40, 40
                ],
                'right': [
                    0, 80, 40, 40,
                    40, 80, 40, 40,
                    80, 80, 40, 40
                ],
            }
        }, layer);
    }

    return {
        init,
        spriteObject
    };
}();