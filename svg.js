var pic = document.getElementById("vimage");
var click = 0;
var lastX;
var lastY;
    
var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var drawDot = function(x,y){
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
   
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    drawLine(x,y);
}

var drawLine = function(x,y){
     var l = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"line"
     );
    if(click == 0){
	lastX = e.offsetX;
	lastY = e.offsetY;
	click+=1;
    }

    l.setAttribute("x1", lastX);
    l.setAttribute("y1", lastY);
    l.setAttribute("x2", x);
    l.setAttribute("x2", y);
    l.setAttribute("stroke", black);
    pic.appendChild(l);
};

var clicked = function(e) {
        
    drawDot(e.offsetX, e.offsetY, lastX, lastY);
    lastX = e.offsetX;
    lastY = e.offsetY;  
};

pic.addEventListener("click", drawDot);
