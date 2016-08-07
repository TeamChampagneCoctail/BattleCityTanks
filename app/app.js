$(document).ready(function(){
    startGameEventListener();
});

function startGameEventListener(){
    $("#start-game").on('click', function(e) {
        e.preventDefault();

        $("#home-container").html("<div id='game-window-wrapper'></div>");

        $('html, body').animate({
            scrollTop: $("#game-window-wrapper").offset().top
        }, 500, function(){

            //start
            gameEngine.initGame('game-window-wrapper');
			gameEngine.startGame();
        });

    });
}