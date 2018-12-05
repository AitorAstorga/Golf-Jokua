<!DOCTYPE html>
<html>
<canvas id="myCanvas" width="" height=""></canvas>
<style>
    canvas {
        background:black;
    }
</style>
<script>
    myCanvas.width = window.innerWidth*99/100;
    myCanvas.height = window.innerHeight*97/100;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var pilotarenErradioa = 15;
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx =25;
    var dy = 14;
    var friction = 0.998;
    var rebotea = -1;
     var marruskaduraUra=0.97;
    var marruskaduraAirea = 0.99;
    var marruskaduraLurra = 0.985;

    if (Math.random() < 0.5) {
        var side = 1
    } else {
        var side = -1
    }

    dx = side * Math.random() * dx;
    dy = side * Math.random() * dy;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, pilotarenErradioa, 0, Math.PI * 2);
        
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.closePath();
    }
    function draw() {
        
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawBall();
        
        if(x + dx > canvas.width-pilotarenErradioa || x + dx < pilotarenErradioa) {
            dx *= rebotea;
        }

        if(y + dy > canvas.height-pilotarenErradioa || y + dy < pilotarenErradioa) {
            dy *= rebotea; 
        }
     
        dx *= friction;
        dy *= friction;
        x += dx;
        y += dy;

        if (dy < 0.01 && dy > -0.1 || dx < 0.01 && dx > -0.1) {
            dy = 0;
            dx = 0;
        }
    }
    setInterval(draw, 10);
</script>
