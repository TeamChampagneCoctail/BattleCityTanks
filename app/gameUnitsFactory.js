var gameUnitsFactory = function() {
    'use strict';

    const playerImageSrc = 'assets/images/tanks/player-spritesheet.png',
        enemyImageSrc = 'assets/images/tanks/enemy-spritesheet.png';

    function createPlayer(startX, startY, uiLayer) {
        const width = 40,
            height = 40,
            startAnimation = 'right';

        let newPlayer = Object.create(player);
        newPlayer.init({
            x: startX,
            y: startY,
            width: width,
            height: height,
            imageSrc: playerImageSrc,
            startAnimation: startAnimation,
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
        }, uiLayer);

        return newPlayer;
    }

    function createEnemy(startX, startY, uiLayer) {
        const width = 40,
            height = 40,
            startAnimation = 'down';

        let newEnemy = Object.create(enemy);
        newEnemy.init({
            x: startX,
            y: startY,
            width: width,
            height: height,
            imageSrc: enemyImageSrc,
            startAnimation: startAnimation,
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
        }, uiLayer);

        return newEnemy;
    }

    return {
        createPlayer,
        createEnemy
    };
}();