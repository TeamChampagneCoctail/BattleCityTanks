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
            let bulletX = (direction === 'up' || direction === 'down') ? (playerUnit.x + playerUnit.width / 2 - 7) :
                direction === 'left' ? playerUnit.x - 7 : playerUnit.x + playerUnit.width + 7;
            let bulletY = (direction === 'left' || direction === 'right') ? (playerUnit.y + playerUnit.height / 2 - 7) :
                direction === 'up' ? playerUnit.y - 7 : playerUnit.y + playerUnit.height + 7;
            let bullet = unitsFactory.createBullet(bulletX, bulletY, dir)
                .render(projectilesLayer);

            return bullet;
        }
    });


    return tank;
}(gameObject);