var b1=document.querySelector("#btn1");
var b2=document.querySelector("#btn2");
var b3=document.querySelector("#btn3");
var ip=document.querySelector("#ip");
 var maxlimit=0;
var p1score=0;
var p2score=0;
var h1=document.querySelector("h1");

var limit=document.querySelector("#limit");
// console.log(maxlimit);

// console.log(p1score);

// console.log(typeof(maxlimit));


b1.addEventListener("click",function(){
	if(p1score!=maxlimit && p2score!=maxlimit){
		if(p1score==maxlimit-1){
			p1score++;
			document.querySelector("#display1").style.color="blue";

			document.querySelector("#display1").innerHTML=p1score;
		}

		 else{
		 	p1score++;
		 	document.querySelector("#display1").innerHTML=p1score;
		 }
	}
}
	
	);

b2.addEventListener("click",function(){
	if(p1score!=maxlimit && p2score!=maxlimit){
		if(p2score==maxlimit-1){
			p2score++;
			document.querySelector("#display2").style.color="blue";

			document.querySelector("#display2").innerHTML=p2score;
		}

		 else{
		 	p2score++;
		 	document.querySelector("#display2").innerHTML=p2score;
		 }
	}
}
	
	);

ip.addEventListener("change",function(){
	limit.textContent=ip.value;
	maxlimit=parseInt(ip.value,10);;
	console.log(maxlimit+2);

}
	);
b3.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	maxlimit=0;
	document.querySelector("#display1").innerHTML=0;
	document.querySelector("#display2").innerHTML=0;
	document.querySelector("#display1").style.color="black";
	document.querySelector("#display2").style.color="black";






}



	);




