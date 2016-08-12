var gameUnitsFactory = function() {
    'use strict';

    const playerImageSrc = 'assets/images/tanks/player-spritesheet.png',
        enemyImageSrc = 'assets/images/tanks/enemy-spritesheet.png',
        bulletImageSrc = 'assets/images/Missile/bullets.png';

    function createPlayer(startX, startY) {
        const width = 39,
            height = 39,
            startDirection = 'up',
            speed = 5;

        let newPlayer = Object.create(player);
        newPlayer.init({
            x: startX,
            y: startY,
            width: width,
            height: height,
            speed: speed,
            imageSrc: playerImageSrc,
            movingDirection: startDirection,
            animations: {
                'up': [
                    0, 120, 40, 40,
                    40, 120, 40, 40,
                    80, 120, 40, 40
                ],
                'down': [
                    0, 0, 40, 40,
                    40, 0, 40, 40,
                    80, 0, 40, 40
                ],
                'left': [
                    0, 40, 40, 40,
                    40, 40, 40, 40,
                    80, 40, 40, 40
                ],
                'right': [
                    0, 80, 40, 40,
                    40, 80, 40, 40,
                    80, 80, 40, 40
                ],
            }
        });

        return newPlayer;
    }

    function createEnemy(startX, startY) {
        const width = 39,
            height = 39,
            startDirection = 'right',
            speed = 5;

        let newEnemy = Object.create(enemy);
        newEnemy.init({
            x: startX,
            y: startY,
            width: width,
            height: height,
            speed: speed,
            imageSrc: enemyImageSrc,
            movingDirection: startDirection,
            animations: {
                'up': [
                    0, 120, 40, 40,
                    40, 120, 40, 40,
                    80, 120, 40, 40
                ],
                'down': [
                    0, 0, 40, 40,
                    40, 0, 40, 40,
                    80, 0, 40, 40
                ],
                'left': [
                    0, 40, 40, 40,
                    40, 40, 40, 40,
                    80, 40, 40, 40
                ],
                'right': [
                    0, 80, 40, 40,
                    40, 80, 40, 40,
                    80, 80, 40, 40
                ],
            }
        });

        return newEnemy;
    }

    function createBullet(startX, startY, direction) {
        const width = 13,
            height = 13,
            speed = 5;

        let newBullet = Object.create(bullet);
        newBullet.init({
            x: startX,
            y: startY,
            width: width,
            height: height,
            speed: speed,
            imageSrc: bulletImageSrc,
            movingDirection: direction,
            animations: {
                'up': [
                    0, 13, 13, 13,
                ],
                'down': [
                    13, 13, 13, 13,
                ],
                'left': [
                    0, 0, 13, 13,
                ],
                'right': [
                    13, 0, 13, 13,
                ],
            }
        });

        return newBullet;
    }

    function createEagleTarget(){
        let newEagleTarget = Object.create(target);


        return newEagleTarget;
    }

    return {
        createPlayer,
        createEnemy,
        createBullet,
        createEagleTarget
    };
}();