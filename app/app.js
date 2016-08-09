$(document).ready(function() {
    startGameEventListener();
});

function startGameEventListener() {
    let homeContainer = $("#home-container"),
        landingPage = $("#home-wrap"),
        gameWrapper = "<div id='game-window-wrapper'></div>",
        windowWidth = $(window).width(),
        canvasWidth = 900,
        canvasHeight = 600;

    if (windowWidth < 1400) {
        canvasWidth = 800;
        canvasHeight = 500;
    }

    $("#start-game").on('click', function(e) {
        e.preventDefault();

        // Apply animation styles to game field
        animateGameField();

        // Show game field
        landingPage.fadeToggle("slow", function() {
            // Append game wrapper
            $(gameWrapper).hide().appendTo(homeContainer).fadeToggle('slow');

            // Start the game
            gameEngine.initGame('game-window-wrapper', canvasWidth, canvasHeight);
            gameEngine.startGame();
        });
    });
}

function animateGameField() {
    let home = $("#home"),
        homeContainer = $("#home-container");

    home.addClass('game-bound');
    homeContainer.css('display', 'table-cell');
    homeContainer.css('vertical-align', 'middle');
    homeContainer.css('width', '100%');
}