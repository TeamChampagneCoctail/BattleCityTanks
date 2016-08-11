var player = function(parent) {
    'use strict';

    let player = Object.create(parent);

    Object.defineProperty(player, 'move', {
        value: function(direction, validateMoveCallback) {
            let nextX = this.x + (direction.x * this.speed);
            let nextY = this.y + (direction.y * this.speed);
            let canMove = validateMoveCallback({
                x: nextX,
                y: nextY,
                width: this.width,
                height: this.height
            });

            if (canMove) {
                this.x = nextX;
                this.y = nextY;
                this.movingDirection = direction.name;
                this.sprite.changeAnimation(this.movingDirection);
                this.sprite.changePosition(this.x, this.y);
            }
        }
    });

    return player;
}(tank);