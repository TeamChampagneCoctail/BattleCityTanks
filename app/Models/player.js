var player = function() {
    'use strict';

    let x,
        y,
        width,
        height,
        imageSrc,
        movingDirection,
        spriteObject;

    function init(options, layer) {
        x = options.x;
        y = options.y;
        width = options.width;
        height = options.height;
        imageSrc = options.imageSrc;
        spriteObject = sprite.createSprite({
            x: 0,
            y: 0,
            imageSrc: options.imageSrc,
            frameRate: 15,
            animation: 'down',
            animations: {
                'up': [

                ],
                'down': [
                    0, 0, 63, 75,
                    63, 0, 63, 75,
                    126, 0, 63, 75,
                    189, 0, 63, 75,
                ],
                'left': [

                ],
                'right': [

                ],
            }
        }, layer);
    }

    function changeDirection(newDirection) {
        movingDirection = newDirection;
        spriteObject.animation = movingDirection;
    }

    return {
        init,
        changeDirection
    };
}();