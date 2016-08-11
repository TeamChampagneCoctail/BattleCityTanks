var enemy = function(parent) {
    'use strict';

    let enemy = Object.create(parent);

    Object.defineProperty(enemy, 'move', {
        value: function(validateMoveCallback) {
          let directions = {
            'left':{
              x: -1,
              y: 0

            },

            'down':{
              x: 0,
              y: 1
            },

            'up':{
              x: 0,
              y: -1
            },

          'right':{
              x: 1,
              y: 0
            }
          };
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
            //this.movingDirection = directi;
            this.sprite.changeAnimation(this.movingDirection);
            this.sprite.changePosition(this.x, this.y);
          }else {
              for(let dir in directions){
                nextX = this.x + (directions[dir].x * this.speed);
                nextY = this.y + (directions[dir].y * this.speed);
                isValidMove = validateMoveCallback({
                  x: nextX,
                  y: nextY,
                  width: this.width,
                  height: this.height
                });
                if (isValidMove) {
                  this.x = nextX;
                  this.y = nextY;
                  this.movingDirection = dir;
                  this.sprite.changeAnimation(this.movingDirection);
                  this.sprite.changePosition(this.x, this.y);
                }
              }
        }
      }
    });

    return enemy;
}(tank);
