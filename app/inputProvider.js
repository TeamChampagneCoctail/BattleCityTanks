var inputProvider = function() {
    'use strict';

    let keys = {};

    function executeCommands(moveUnitCallback, fireCallback) {
        for (let key in keys) {
            if (key === '37') {
                moveUnitCallback({
                    x: -1,
                    y: 0,
                    name: 'left'
                });
            } else if (key === '38') {
                moveUnitCallback({
                    x: 0,
                    y: -1,
                    name: 'up'
                });
            } else if (key === '39') {
                moveUnitCallback({
                    x: 1,
                    y: 0,
                    name: 'right'
                });
            } else if (key === '40') {
                moveUnitCallback({
                    x: 0,
                    y: 1,
                    name: 'down'
                });
            } else if (key == '32') {
                fireCallback();
            }
        }
    }

    let inputProvider = {
        listenForCommand: function(moveUnitCallback, fireCallback) {
            $(document).on('keydown', function(ev) {
                keys[ev.which] = true;
                executeCommands(moveUnitCallback, fireCallback);
            });

            $(document).on('keyup', function(ev) {
                delete keys[ev.which];
                executeCommands(moveUnitCallback, fireCallback);
            });
        }
    };

    return inputProvider;
}();