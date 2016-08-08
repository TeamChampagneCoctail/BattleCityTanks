var enemy = function(parent) {
    'use strict';

    let enemy = Object.create(parent);

    Object.defineProperty(enemy, 'move', {
        value: function() {
            // TODO: AI logic for moving!!!
        }
    });

    return enemy;
}(tank);