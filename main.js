canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "car1.png";
car_1_x = 10;
car_1_y = 10;

car_2_width = 120;
car_2_height = 70;
car_2_image = "car2.png";
car_2_x = 10;
car_2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car_1_image;   // load image

    car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car_2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow pressed");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down arrow pressed");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left arrow pressed");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right arrow pressed");
		}

        //border-------------------------------------------------border

        if(keyPressed == '87')
		{
			car2_up();
			console.log("up arrow pressed");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("down arrow pressed");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("left arrow pressed");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("right arrow pressed");
		}
}

function car1_up()
{
	if(car_1_y >=0)
	{
		car_1_y = car_1_y - 10;
		console.log("When up arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		 uploadBackground();
		 uploadrover();
	}
}
function car1_down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function car1_left()
{
	if(car_1_x >= 0)
	{
		car_1_x =car_1_x - 10;
		console.log("When left arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadrover();
	}
}
function car1_right()
{
	if(car_1_x <= 700)
	{
		car_1_x =car_1_x + 10;
		console.log("When right arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		uploadrover();
   }
}

//border-------------------------------------------------------border

function car2_up()
{
	if(car_2_y >=0)
	{
		car_2_y = car_2_y - 10;
		console.log("When up arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		 uploadBackground();
		 uploadrover();
	}
}
function car2_down()
{
	if(car_2_y <=500)
	{
		car_2_y =car_2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadcar2();
	}
}
function car2_left()
{
	if(car_2_x >= 0)
	{
		car_2_x =car_2_x - 10;
		console.log("When left arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadcar2();
	}
}
function car2_right()
{
	if(car_2_x <= 700)
	{
		car_2_x =car_2_x + 10;
		console.log("When right arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadcar2();
   }
}