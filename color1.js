var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(25, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)"
]
colors=generateColor(6);
var messageDisplay=document.querySelector("#message");
var easyBtn=document.querySelector("#mode1");
var hardBtn=document.querySelector("#mode2");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateColor(3);
	pickedColor=pickColor();
	console.log(colors.length);
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	for(var i=colors.length;i<squares.length;i++)
		squares[i].style.display="none";
	colorDisplay.textContent=pickedColor;
	h1.style.background="steelblue";
	resetButton.textContent="New Colors";
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateColor(6);
	pickedColor=pickColor();
	console.log(colors.length);
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	colorDisplay.textContent=pickedColor;
	h1.style.background="steelblue";
	resetButton.textContent="New Colors";
})


var pickedColor=pickColor();
var squares=document.getElementsByClassName("square");
var colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	console.log("inside");
	colors=generateColor(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++)
		{
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
	h1.style.background="steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

})
colorDisplay.textContent=pickedColor;
function changeColor(color)
{
	for(var j=0;j<colors.length;j++)
		squares[j].style.background=color;
}
for(var i=0;i<squares.length;i++)
{
	//ADD EVENT LISTENER
	squares[i].style.background=colors[i];
	// ADD EVENT LISTENER
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor==pickedColor)
		{
			messageDisplay.textContent="CORRECT";
			changeColor(pickedColor);
			h1.style.background=pickedColor;
			resetButton.textContent="Play Again?";
		}
		else
		{
			this.style.background="rgb(23,23,23)";
			messageDisplay.textContent="Try Again";
		}
		console.log(clickedColor+" "+pickedColor);	
		

	})

}
function pickColor(){
	var val=colors[Math.floor(Math.random()*colors.length)];
	return val;
}
function generateColor(num){
	var arr=[];
	var r,g,b;

	for(var i=0;i<num;i++)
	{
		r=Math.floor(Math.random()*256);
		g=Math.floor(Math.random()*256);
		b=Math.floor(Math.random()*256);
		arr[i]="rgb("+r+", "+b+", "+g+")";
	} 

	return arr;

}