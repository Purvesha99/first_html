function message() {
	var opened = window.open("");
	opened.document.write("JavaScript is used to program the behavior of web pages. It is a programming language of the web. It enables dynamic interactivity on websites when applied to an HTML document. It is a weakly typed language"); 
	let date =new Date();
	console.log('date');
}
function fibonacci(num){
	var num1=0;
	var num2=1;
	var sum=0;
	var i=0;
	for (i=0;i<num;i++){
		sum=num1+num2;
		num1=num2;
		num2=sum;
	}
	return num2;
}
