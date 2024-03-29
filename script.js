window.onload = function () {
    canv = document.getElementById("gc"); 
    ctx = canv.getContext("2d"); //Creant context 2d
    document.addEventListener("keydown", keyPush) //Set key push
    document.getElementById("score").innerHTML = 0; //Set score
    setInterval(game, 100); //Set speed
}

positionX = positionY = 10;
gs = tc = 20;
cherryX = cherryY = 15; //Set Cherry
xv = yv = 0;
trail = [];
tail = 1;
score = 0;

function game() {
    positionX += xv;
    positionY += yv;
    if (positionX < 0) {
        positionX = tc - 1;

    }
    if (positionX > tc - 1) {
        positionX = 0;  

    }
    if (positionY < 0) {
        positionY = tc -1;     

    }
    if (positionY > tc - 1) {
        positionY = 0;  

    }
    ctx.fillStyle = "black"; //Set field color
    ctx.fillRect(0, 0, canv.width, canv.height); //Set position

    ctx.fillStyle = "lime"; //Set sanke color
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == positionX && trail[i].y == positionY) {
            tail = 5; //Set default sanke tail
            
        }             
    }
    trail.push({
        x: positionX,
        y: positionY

    });
    while (trail.length > tail) {
        trail.shift();
        
    }
    if (cherryX == positionX && cherryY == positionY) { // Sanke eatten
        tail++; // add tail
        document.getElementById("score").innerHTML = ++score; // add taiscorel
        cherryX = Math.floor(Math.random() * tc); // Set new cherry in x
        cherryY = Math.floor(Math.random() * tc); // Set new sherry in y
        
    }
    ctx.fillStyle = "red"; // Set sherry color
    ctx.fillRect(cherryX * gs, cherryY * gs, gs - 2, gs - 2);
}


function keyPush(evt) { 
    console.log(evt);
    switch (evt.keyCode) {
        case 37:
            xv = -1
            yv = 0; 
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0
            yv = 1;
            break;

    }
    
}