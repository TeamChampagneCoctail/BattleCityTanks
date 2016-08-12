var tank = function(parent) {
    'use strict';

    let tank = Object.create(parent);

    Object.defineProperty(tank, 'init', {
        value: function(options) {
            parent.init.call(this, options.x, options.y, options.width, options.height);
            this.speed = options.speed;
            this.movingDirection = options.movingDirection;
            this.sprite = Object.create(spriteObject);
            this.isAlive = true;
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
        value: function(unitsFactory) {
            let direction = this.movingDirection;
            let bulletX = (direction === 'up' || direction === 'down') ? (this.x + this.width / 2 - 7) :
                direction === 'left' ? this.x - 10 : this.x + this.width + 10;
            let bulletY = (direction === 'left' || direction === 'right') ? (this.y + this.height / 2 - 10) :
                direction === 'up' ? this.y - 10 : this.y + this.height + 10;
            let bullet = unitsFactory.createBullet(bulletX, bulletY, direction);

            return bullet;
        }
    });


    return tank;
}(gameObject);