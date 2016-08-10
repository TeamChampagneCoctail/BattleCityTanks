var bullet = function(parent) {
    'use strict';

    let bullet = Object.create(parent);

    Object.defineProperty(bullet, 'init', {
        value: function(options, layer) {
            parent.init.call(this, options.x, options.y, options, options.width, options.height);
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
    });
    
    return tank;
}(gameObject);