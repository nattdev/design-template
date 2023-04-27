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

    var container = document.querySelector(&quot;.bubbles&quot;);   
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;   
    var balls = [];
    var total_balls = 8;


for(let i=0; i &lt; total_balls; i++){
    balls[i] = new genericBall(Math.floor((Math.random()*containerWidth / 1.9)+1), Math.floor((Math.random()*containerHeight /1.9)+1) , Math.round(Math.random() * (290 - 100) + 50), &quot;(248,242,241,&quot; + Math.random()*0.3 + &quot;)&quot;, Math.floor((Math.random()*3)+1), Math.floor((Math.random()*3)+1));
}

       
for(let i=0; i &lt; total_balls; i++){
    container.insertAdjacentHTML(&quot;afterbegin&quot;, &#39;<div/>&#39;);
}

var balls_container = document.querySelectorAll(&quot;.bubbles div&quot;);

for(let i=0; i &lt; total_balls; i++){
    balls_container[i].className = &quot;circle&quot;;
    balls_container[i].style.width = balls[i].width + &quot;px&quot;;
    balls_container[i].style.height = balls[i].height + &quot;px&quot;;
    balls_container[i].style.position = &quot;absolute&quot;;
    balls_container[i].style.left = balls[i].positionX + &quot;px&quot;
    balls_container[i].style.top = balls[i].positionY + &quot;px&quot;;
    balls_container[i].style.backgroundColor = &quot;rgba&quot; + balls[i].color;
}

move = function(){

       
    for(let i=0; i &lt; total_balls; i++){
       
       if(window.innerWidth &lt; 770){
       	balls[i].speedX = 0;
        balls[i].speedY = 0;
       }
       
        //positionX
        balls[i].positionX = balls[i].positionX + balls[i].speedX;
        balls_container[i].style.left = balls[i].positionX + &quot;px&quot;;

        balls[i].positionY = balls[i].positionY + balls[i].speedY;
        balls_container[i].style.top = balls[i].positionY + &quot;px&quot;;

        if((container.getBoundingClientRect()).right - balls[i].width &lt; balls[i].positionX){
            balls[i].speedX = balls[i].speedX * -1;
        } 

        if(balls[i].positionX &lt; container.getBoundingClientRect().left){
            balls[i].speedX = balls[i].speedX * -1;
        } 

        if(balls_container[i].offsetTop + balls[i].width &gt; container.offsetHeight){
            balls[i].speedY = balls[i].speedY * -1;
        } 

        if(balls_container[i].offsetTop &lt; container.offsetTop){
            balls[i].speedY = balls[i].speedY * -1;
        } 

    }
}

window.setInterval(move, 45);
