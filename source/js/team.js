

var demo = document.getElementById('demo');
var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');

demo2.innerHTML = demo1.innerHTML;

demo.addEventListener('mouseover',function(){
	clearInterval(table);
});
demo.addEventListener('mouseout',function(){
	table = setInterval(Marquee,speed);
});

var speed = 35;
function Marquee(){
	if(demo2.offsetHeight >= demo.scrollTop ){
		demo.scrollTop++;
	} else {
		demo.scrollTop = 0; 
	}
}
var table = setInterval(Marquee,speed);


