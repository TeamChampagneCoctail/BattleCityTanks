var smartEnemy = function(parent) {
    'use strict';

    let directions = {
        'left': {
            x: -1,
            y: 0
        },
        'down': {
            x: 0,
            y: 1
        },
        'up': {
            x: 0,
            y: -1
        },
        'right': {
            x: 1,
            y: 0
        }
    };
    let enemy = Object.create(parent);

    Object.defineProperty(enemy, 'move', {
        value: function(validateMoveCallback) {
            let nextX = this.x + (directions[this.movingDirection].x * this.speed);
            let nextY = this.y + (directions[this.movingDirection].y * this.speed);
            let isValidMove = validateMoveCallback({
                x: nextX,
                y: nextY,
                width: this.width,
                height: this.height
            });

            if (isValidMove) {
                this.x = nextX;
                this.y = nextY;
                this.sprite.changeAnimation(this.movingDirection);
                this.sprite.changePosition(this.x, this.y);
            } else {
                let current = this.movingDirection;
                while (true) {
                    let nextDirection = getNextDirection(current);
                    nextX = this.x + (directions[nextDirection].x * this.speed);
                    nextY = this.y + (directions[nextDirection].y * this.speed);
                    isValidMove = validateMoveCallback({
                        x: nextX,
                        y: nextY,
                        width: this.width,
                        height: this.height
                    });
                    if (isValidMove) {
                        this.x = nextX;
                        this.y = nextY;
                        this.movingDirection = nextDirection;
                        this.sprite.changeAnimation(this.movingDirection);
                        this.sprite.changePosition(this.x, this.y);
                        break;
                    }

                    current = nextDirection;
                }
            }
        }
    });

    return enemy;
}(tank);