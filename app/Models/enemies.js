window.requestAnimFrame = (function(callback) {
      return window.requestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })();

    function drawImg(image, context) {
      context.beginPath();
      context.rect(image.x, image.y, image.width, image.height);
      context.fillStyle = 'FFF';
      //context.fill();
      //context.strokeStyle = 'black';
      context.stroke();
    }
    function animate(image, canvas, context, startTime) {
      // update
      var time = (new Date()).getTime() - startTime;

      var linearSpeed = 100;
      // pixels / second
      var newX = linearSpeed * time / 1000;

      if(newX < canvas.width - image.width) {
        image.x = newX;
      }

      // clear
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawImg(image, context);

      // request new frame
      requestAnimFrame(function() {
        animate(image, canvas, context, startTime);
      });
    }

    // Can't get created canvas tag
    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');

    var image = {
      x: 0,
      y: 75,
      width: 100,
      height: 50,
      image: '../../assets/images/NT/normal_down1.bmp',
    };
    drawImg(image, context);

    // wait one second before starting animation
    setTimeout(function() {
      var startTime = (new Date()).getTime();
      animate(image, canvas, context, startTime);
    }, 1000);
