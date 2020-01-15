
	var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var snake =[];
    var snakeCount = 6;
	var foodx =0;
	var foody =0;
	var foodxx =0;
	var foodyy = 0;
	var foodxxx = 0;
	var foodyyy = 0;
	var fox = 0;
	var foy = 0;
	var size = 30;
	var cube_size = 30;

    var dir =0;
    var green = false;
    var num = 1;
    var color = [];
  	var velocity = 200;
  	var va = null;

  	var n = 0;
  	


    function drawtable()
    {
    	
    	if(num == 1){
    		for(var k=0;k<snakeCount;k++)
			{
			ctx.fillStyle="white";

			if (k==snakeCount-1)
			{
				ctx.fillStyle="red";
			}
			

			ctx.fillRect(snake[k].x,snake[k].y,size,size);
			
			}
		}
			else if(num!=1){
				var p = 0;
				for(var k=0;k<snakeCount-num;k++)
					{
					ctx.fillStyle="white";
					
					ctx.fillRect(snake[k].x,snake[k].y,size,size);
					
					}
				for(var i = snakeCount-num; i <snakeCount-1;i++){
					if(color[p]==1){
						ctx.fillStyle="greenyellow";
				
						ctx.fillRect(snake[i].x,snake[i].y,size,size);
						p++;
					}else if(color[p]==2){
						ctx.fillStyle="yellow";
						ctx.fillRect(snake[i].x,snake[i].y,size,size);
						p++;
					}else if(color[p]==3){
						ctx.fillStyle="blue";
						ctx.fillRect(snake[i].x,snake[i].y,size,size);
						p++;
					}
				}
				
				ctx.fillStyle="red";
				ctx.fillRect(snake[snakeCount-1].x,snake[snakeCount-1].y,size,size)

				
			}		
    	 ctx.fillStyle ="greenyellow";
	     ctx.fillRect(foodx,foody,cube_size,cube_size);
	     ctx.fill();

	     ctx.fillStyle ="yellow";
	     ctx.fillRect(foodxx,foodyy,cube_size,cube_size);
	     ctx.fill();

	     ctx.fillStyle ="blue";
	     ctx.fillRect(fox,foy,cube_size,cube_size);
	     ctx.fill();



	     if(n<5){
	      ctx.fillStyle ="grey";
	     ctx.fillRect(foodxxx,foodyyy,cube_size,cube_size);
	     ctx.fill();
    	}
    }
 
    
    function start()
    {
		for(var k=0;k<snakeCount;k++)
    		{
    		snake[k]={x:k*30,y:0};
    			
            }
			
		  drawtable();
          addfood();
 		  addotherfood();
 		  unHappyFood();
 		  addnewFood();   
    }

	 function addnewFood()
		{

		fox = Math.floor(Math.random()*30)*30; 
		foy = Math.floor(Math.random()*20)*30;
			
			for (var k=0;k<snake;k++)
			{
				if (fox==snake[k].x&&foy==sanke[k].y)
				{	
				addnewFood();
				}
			}
		
		
		}	
    function addfood()
	{

	foodx = Math.floor(Math.random()*30)*30; 
	foody = Math.floor(Math.random()*20)*30;
		
		for (var k=0;k<snake;k++)
		{
			if (foodx==snake[k].x&&foody==sanke[k].y)
			{	
			addfood();
			}
		}
	
	
	}	

	function addotherfood(){
		foodxx = Math.floor(Math.random()*30)*30; 
		foodyy = Math.floor(Math.random()*20)*30;
		
		for (var k=0;k<snake;k++)
		{
			if (foodxx==snake[k].x&&foodyy==sanke[k].y)
			{	
			addotherfood();
			}
		}
	
	}


	function unHappyFood(){
		
		foodxxx = Math.floor(Math.random()*30)*30; 
		foodyyy = Math.floor(Math.random()*20)*30;
		
		for (var k=0;k<snake;k++)
		{
			if (foodxxx==snake[k].x&&foodyyy==sanke[k].y)
			{	
			unHappyFood();
			}
		}
	}
	
	
    		  
   function isEat()
   {

   	if(snakeCount > 8 && snakeCount < 10 && green == false){
		window.clearInterval(va);
   		
   		va = setInterval(move,180);
   		green = true;
   	}else if(snakeCount > 10 && snakeCount < 12 && green == true){
   		window.clearInterval(va);
   		va = setInterval(move,160);
   		green = false;
   	}else if(snakeCount > 12 && snakeCount < 15 && green == false){
   		window.clearInterval(va);
   		va = setInterval(move,140);
   		green = true;
   	}else if(snakeCount > 15){
   		window.clearInterval(va);
   		va = setInterval(move,80);

   	}


    if(snake[snakeCount-1].x==foodx&&snake[snakeCount-1].y==foody)
   {
		addfood();
		snakeCount++;
		
		snake.unshift({x:-30,y:-30});
		num ++;
		color.push(1);

		
   }
   if(snake[snakeCount-1].x==foodxx&&snake[snakeCount-1].y==foodyy)
   {
		
		addotherfood();
		snakeCount++;
		snake.unshift({x:-30,y:-30});
		num ++;
		color.push(2);
		
   }

   if(snake[snakeCount-1].x==foodxxx&&snake[snakeCount-1].y==foodyyy)
   {
		
		unHappyFood();
		snakeCount--;
		snake.shift();	
		n++;
   }
   if(snake[snakeCount-1].x==fox&&snake[snakeCount-1].y==foy)
   {
		
		addnewFood();
		snakeCount++;
		snake.unshift({x:-30,y:-30});
		num ++;
		color.push(3);
		
		
   }
   
   }
   
   function isDead()
   {
    if (snake[snakeCount-1].x>900-size||snake[snakeCount-1].y>600-size||snake[snakeCount-1].x<0||snake[snakeCount-1].y<0)
		{
		alert("You are dead,GAME OVER!!!");
		dir = 0;		
		}

   }
   

window.onload = function(){
	
}


function getSize(){
	 size = document.getElementById("size").value;
	 
}


function getCubeSize(){
	 cube_size = document.getElementById("cube_size").value;
	 
}

	
	
	
	function move()
   {
   	
	switch (dir)
	{

	case 1: snake.push({x:snake[snakeCount - 1].x-30,y:snake[snakeCount-1].y}); break;
	case 2: snake.push({x:snake[snakeCount - 1].x,y:snake[snakeCount-1].y-30}); break;
	case 3: snake.push({x:snake[snakeCount - 1].x+30,y:snake[snakeCount-1].y}); break;
	case 4: snake.push({x:snake[snakeCount - 1].x,y:snake[snakeCount-1].y+30}); break;
	 

	
	default: snake.push({x:snake[snakeCount-1].x+30,y:snake[snakeCount-1].y});
	}
    snake.shift();
   
   	ctx.clearRect(0,0,900,600);
   	isEat();
	isDead();
	drawtable();
   } 			
	
	
	document.onkeydown = function (e) {
		if (e.which == 65) { 

        dir = 1;
    } else if (e.which == 87) {
        dir = 2;
    } else if (e.which == 68) {
        dir = 3;
	}else if(e.which ==83) {
		dir = 4;
	}else if(e.which == 80){
		window.clearInterval(va);
		
	}else if(e.which == 79){
		
		va = setInterval(move,200);
	}else if(e.which == 49){
		start();
		window.clearInterval(va);
		va = setInterval(move,300);
		drawtable();
 	

		}
	};
	
	
	
	
	

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}



