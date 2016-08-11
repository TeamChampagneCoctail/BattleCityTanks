var bullet = function(parent) {
    'use strict';

    let bullet = Object.create(parent);

    Object.defineProperty(bullet, 'init', {
        value: function(options, layer) {
            parent.init.call(this, options.x, options.y, options, options.width, options.height);
            this.sprite = Object.create(spriteObject);
            this.speed = options.speed;
            this.movingDirection = options.movingDirection;
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

    Object.defineProperty(bullet, 'render', {
        value: function(uiLayer) {
            this.sprite.createSprite(uiLayer);
            return this;
        }
    });

    Object.defineProperty(bullet, 'move', {
        value: function(direction) {
            let nextX = this.x + (direction.x * this.speed);
            let nextY = this.y + (direction.y * this.speed);
            this.x = nextX;
            this.y = nextY;
            this.sprite.changeAnimation(this.movingDirection);
            this.sprite.changePosition(this.x, this.y);
        }
    });

    return bullet;
}(gameObject);