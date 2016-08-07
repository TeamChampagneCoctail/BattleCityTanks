$(document).ready(function(){
    startGameEventListener();
});

function startGameEventListener(){
    $("#start-game").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;


        $('html, body').animate({
            scrollTop: $("#game-window-wrapper").offset().top
        }, 500, function(){

            //start
            gameEngine.initGame('game-window-wrapper');
			gameEngine.startGame();
        });

    });
}