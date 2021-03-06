var spriteObject = function() {
    'use strict';

    let spriteObject;

    spriteObject = {
        init: function(options) {
            this._imageSrc = options.imageSrc;
            this.spriteSheet = new Kinetic.Sprite({
                x: options.x,
                y: options.y,
                animation: options.animation,
                animations: options.animations,
                frameRate: options.frameRate,
                frameIndex: 0
            });

            return this;
        },
        createSprite: function createSprite(layer) {
            let image = new Image();
            let sheet = this.spriteSheet;
            image.onload = function() {
                sheet.setImage(image);
                layer.add(sheet);
                sheet.start();
            };
            image.src = this._imageSrc;
        },
        changeAnimation: function(animation) {
            if (this.spriteSheet.getAnimation() !== animation) {
                this.spriteSheet.setAnimation(animation);
            }
        },
        changePosition: function(x, y) {
            this.spriteSheet.setX(x);
            this.spriteSheet.setY(y);
        },
        remove: function() {
            this.spriteSheet.remove();
        }
    };

    return spriteObject;
}();