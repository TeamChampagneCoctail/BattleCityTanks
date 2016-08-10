$(document).ready(function() {
    animateLandingPageElements();
    startGameEventListener();
});

function startGameEventListener() {
    let homeContainer = $("#home-container"),
        landingPage = $("#home-wrap"),
        gameWrapper = "<div id='game-window-wrapper'></div>",
        windowWidth = $(window).width(),
        canvasWidth = 1040,
        canvasHeight = 680;

    if (windowWidth < 1400) {
        canvasWidth = 800;
        canvasHeight = 480;
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

function animateLandingPageElements(){
    $('#start-game').addClass('animated bounceInUp');
    $('#home .game-controls .left').addClass('animated bounceInLeft');
    $('#home .game-controls .right').addClass('animated bounceInRight');
    $('#home .page-intro .intro-section h2').addClass('animated slideInDown');
    $('#home .page-intro .intro-section .game-intro > h3').addClass('animated fadeInUp');
    $('#home .logo').addClass('animated pulse');
}