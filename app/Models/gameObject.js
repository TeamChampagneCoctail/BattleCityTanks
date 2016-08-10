var gameObject = function() {
    'use strict';

    var gameObject = {
        init: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
    };

    return gameObject;
}();