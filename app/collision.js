var collisionDetector = function() {
    'use strict';

    function areUnitsColliding(firstUnit, secondUnit) {
        let firstUnitX1 = firstUnit.x;
        let firstUnitX2 = firstUnit.x + firstUnit.width;
        let firstUnitY1 = firstUnit.y;
        let firstUnitY2 = firstUnit.y + firstUnit.height;

        let secondUnitX1 = secondUnit.x;
        let secondUnitX2 = secondUnit.x + secondUnit.width;
        let secondUnitY1 = secondUnit.y;
        let secondUnitY2 = secondUnit.y + secondUnit.height;

        let areCollidingOnX = secondUnitX1 > firstUnitX1 && secondUnitX1 < firstUnitX2 ||
            firstUnitX1 >= secondUnitX1 && firstUnitX1 < secondUnitX2;
        let areCollidingOnY = secondUnitY1 > firstUnitY1 && secondUnitY1 < firstUnitY2 ||
            firstUnitY1 >= secondUnitY1 && firstUnitY1 < secondUnitY2;

        return areCollidingOnX && areCollidingOnY;
    }

    return {
        areUnitsColliding
    };
}();