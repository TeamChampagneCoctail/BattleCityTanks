var spriteObject = function() {
    'use strict';

    let spriteObject,
        spriteSheet;

    spriteObject = {
        'createSprite': function createSprite(options, layer) {
            let image = new Image();
            image.onload = function() {
                spriteSheet = new Kinetic.Sprite({
                    x: options.x,
                    y: options.y,
                    image: image,
                    animation: options.animation,
                    animations: options.animations,
                    frameRate: options.frameRate,
                    frameIndex: 0
                });
                layer.add(spriteSheet);
                spriteSheet.start();
            };

            image.src = options.imageSrc;
        },
        'changeAnimation': function(animation) {
            if (spriteSheet.getAnimation() !== animation) {
                spriteSheet.setAnimation(animation);
            }
        }
    };

    return spriteObject;
}();