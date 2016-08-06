$(document).ready(function(){
    startGameEventListener();
});

function startGameEventListener(){
    $("#start-game").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;


        $('html, body').animate({
            scrollTop: $("#canvas-section").offset().top
        }, 500, function(){

            //start
            // GameEngine.Start();
        });

    });
}