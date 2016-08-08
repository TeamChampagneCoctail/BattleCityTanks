var player = function(parent) {
    'use strict';

    let player = Object.create(parent);

    Object.defineProperty(player, 'move', {
        value: function() {
            console.log('moving');
        }
    });

    return player;
}(tank);