var tank = function() {
    'use strict';

    let tank = {
        'init': function(options, layer) {
            this.x = options.x;
            this.x = options.x;
            this.y = options.y;
            this.width = options.width;
            this.height = options.height;
            this.sprite = Object.create(spriteObject);

            this.sprite.init({
                    x: this.x,
                    y: this.y,
                    imageSrc: options.imageSrc,
                    frameRate: options.frameRate,
                    animation: options.startAnimation,
                    animations: options.animations
                })
                .createSprite(layer);

            return this;
        }
    };

    return tank;
}();