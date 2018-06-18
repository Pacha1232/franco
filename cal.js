alert("Welcome to the final problem")
var button = document.getElementById("mas");
var button= document.getElementById("resta");
var button = document.getElementById("multiplicacion");
var button = document.getElementById("division");

mas.addEventListener("click", function() {
	var num1= document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var resultado=sumando(parseInt(num1),parseInt(num2));
	alert(resultado);
	function sumando(num1,num2){
		resultado=(parseInt(num1)+ parseInt(num2))
		return resultado;
	}
});
resta.addEventListener("click", function() {
	var num1= document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var resultado=restando(parseInt(num1),parseInt(num2));
	alert(resultado);
	function restando(num1,num2){
		resultado=(parseInt(num1)- parseInt(num2))
		return resultado;
	}
});
	multiplicacion.addEventListener("click", function() {
	var num1= document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var resultado=multiplicando(parseInt(num1),parseInt(num2));
	alert(resultado);
	function multiplicando(num1,num2){
		resultado=(parseInt(num1)* parseInt(num2))
		return resultado;
	}
});
division.addEventListener("click", function() {
	var num1= document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	var resultado=dividiendo(parseInt(num1),parseInt(num2));
	alert(resultado);
	function dividiendo(num1,num2){
		resultado=(parseInt(num1)/ parseInt(num2))
		return resultado;
	}
});