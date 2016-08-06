var player = function() {
    'use strict';

    let x,
        y,
        width,
        height,
        imageSrc,
        movingDirection;

    function init(options) {
        x = options.x;
        y = options.y;
        width = options.width;
        height = options.height;
        imageSrc = options.imageSrc;
    }

    return {
        init
    };
}();