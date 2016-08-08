var tank = function() {
    'use strict';

    let tank = {
        init: function(options, layer) {
            this.x = options.x;
            this.x = options.x;
            this.y = options.y;
            this.width = options.width;
            this.height = options.height;
            this._imageSrc = options.imageSrc;
            this.sprite = Object.create(spriteObject);

            this.sprite.createSprite({
                x: this.x,
                y: this.y,
                imageSrc: this._imageSrc,
                frameRate: options.frameRate,
                animation: options.startAnimation,
                animations: options.animations
            }, layer);

            return this;
        }
    };

    return tank;
}();