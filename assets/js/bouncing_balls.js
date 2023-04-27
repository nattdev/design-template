var genericBall = function(positionX, positionY, size, color, speedX, speedY){
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = size;
    this.height = size;
    this.color = color;
	this.speedX = speedX;
    this.speedY = speedY;                              
}

/*Metodo de genericBall*/

    var container = document.querySelector(".bubbles");   
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;   
    var balls = [];
    var total_balls = 8;


for(let i=0; i < total_balls; i++){
    balls[i] = new genericBall(Math.floor((Math.random()*containerWidth / 1.9)+1), Math.floor((Math.random()*containerHeight /1.9)+1) , Math.round(Math.random() * (290 - 100) + 50), "(248,242,241," + Math.random()*0.3 + ")", Math.floor((Math.random()*3)+1), Math.floor((Math.random()*3)+1));
}

       
for(let i=0; i < total_balls; i++){
    container.insertAdjacentHTML("afterbegin", '<div>');
}

var balls_container = document.querySelectorAll(".bubbles div");

for(let i=0; i < total_balls; i++){
    balls_container[i].className = "circle";
    balls_container[i].style.width = balls[i].width + "px";
    balls_container[i].style.height = balls[i].height + "px";
    balls_container[i].style.position = "absolute";
    balls_container[i].style.left = balls[i].positionX + "px"
    balls_container[i].style.top = balls[i].positionY + "px";
    balls_container[i].style.backgroundColor = "rgba" + balls[i].color;
}

move = function(){

       
    for(let i=0; i < total_balls; i++){
       
       if(window.innerWidth < 770){
       	balls[i].speedX = 0;
        balls[i].speedY = 0;
       }
       
        //positionX
        balls[i].positionX = balls[i].positionX + balls[i].speedX;
        balls_container[i].style.left = balls[i].positionX + "px";

        balls[i].positionY = balls[i].positionY + balls[i].speedY;
        balls_container[i].style.top = balls[i].positionY + "px";

        if((container.getBoundingClientRect()).right - balls[i].width < balls[i].positionX){
            balls[i].speedX = balls[i].speedX * -1;
        } 

        if(balls[i].positionX < container.getBoundingClientRect().left){
            balls[i].speedX = balls[i].speedX * -1;
        } 

        if(balls_container[i].offsetTop + balls[i].width > container.offsetHeight){
            balls[i].speedY = balls[i].speedY * -1;
        } 

        if(balls_container[i].offsetTop < container.offsetTop){
            balls[i].speedY = balls[i].speedY * -1;
        } 

    }
}

window.setInterval(move, 45);
