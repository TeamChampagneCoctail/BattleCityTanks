var tank = function(parent) {
    'use strict';

    let tank = Object.create(parent);

    Object.defineProperty(tank, 'init', {
        value: function(options) {
            parent.init.call(this, options.x, options.y, options.width, options.height);
            this.speed = options.speed;
            this.movingDirection = options.movingDirection;
            this.sprite = Object.create(spriteObject);
            this.sprite.init({
                x: this.x,
                y: this.y,
                imageSrc: options.imageSrc,
                frameRate: options.frameRate,
                animation: options.movingDirection,
                animations: options.animations
            });

            return this;
        }
    });

    Object.defineProperty(tank, 'render', {
        value: function(uiLayer) {
            this.sprite.createSprite(uiLayer);
            return this;
        }
    });

    Object.defineProperty(tank, 'fire', {
        value: function() {

        }
    });


    return tank;
}(gameObject);