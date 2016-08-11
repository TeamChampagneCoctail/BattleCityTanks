var ui = function() {
    'use strict';

    let ui = {
        init: function(canvasWidth, canvasHeight, container) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.container = container;

            return this;
        },
        createGameStage: function() {
            this.gameStage = new Kinetic.Stage({
                container: this.container,
                width: this.canvasWidth,
                height: this.canvasHeight
            });

            return this;
        },
        getNewLayer: function() {
            return new Kinetic.Layer();
        },
        addLayer(layer) {
            this.gameStage.add(layer);

            return this;
        }
    };

    return ui;
}();