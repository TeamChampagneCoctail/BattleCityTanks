var player = function() {
    'use strict';

    let x,
        y,
        width,
        height,
        imageSrc,
        movingDirection,
        spriteObject;

    function init(options, animations) {
        x = options.x;
        y = options.y;
        width = options.width;
        height = options.height;
        imageSrc = options.imageSrc;
        spriteObject = sprite.createSprite({
            x: 0,
            y: 0,
            imageSrc: options.imageSrc,
            animation: movingDirection,
            animations: animations
        });
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