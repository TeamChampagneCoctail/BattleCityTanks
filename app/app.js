$(document).ready(function(){
    startGameEventListener();
});

function startGameEventListener(){
    let windowWidth = $(window).width(),
        canvasWidth = 1040,
        canvasHeight = 700;

    if(windowWidth < 1400){
        canvasWidth = 800;
        canvasHeight = 500;
    }

    $("#start-game").on('click', function(e) {
        e.preventDefault();

        $("#home-container").html("<div id='game-window-wrapper'></div>");

        alert("width = " + canvasWidth + " height = " + canvasHeight);

        $('html, body').animate({
            scrollTop: $("#game-window-wrapper").offset().top
        }, 500, function(){

            //start
            gameEngine.initGame('game-window-wrapper', canvasWidth, canvasHeight);
			gameEngine.startGame();
        });

    });
}