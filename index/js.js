var a, b;

//Выбор первой переменной A в прмежутке от 6 до 9

a = 6 + Math.floor(Math.random() * (9 + 1 - 6));

//Выбор второй переменной B 
//с условием A+B принадлежат интервалу чисел [11, 14]

b = (11-a) + Math.floor(Math.random() * ((14-a) + 1 - (11-a)));

//Для удобства манипуляции элементами шаблона уравнения, передаем
//следующим переменным значение каждого элемента

var p1, p2, p3;

p1 = document.getElementById('n1');
p2 = document.getElementById('n2');
p3 = document.getElementById('n3');

//Создание исходного шаблона уравнения

p1.innerHTML = a;
p2.innerHTML = b;

//Выведение линии от 0 до a, учитывая первоначальное смещение 35px

var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "red";
ctx.moveTo(35, 100);
ctx.quadraticCurveTo((a*39)/2 + 35, -70, a*39+36, 100);

//Создание стрелки на конце линии

ctx.moveTo(a*39+36, 100);
ctx.lineTo(a*39+34, 90);
ctx.moveTo(a*39+36, 100);
ctx.lineTo(a*39+25, 98);
ctx.stroke();

//Позиционруем инпуты

var ml1 = (a*39)/2 + 30;
var num1=document.getElementById('inp1').style.marginLeft = ml1+"px";

var ml2 = ((a+b)*39)/2 - 10;
var num1=document.getElementById('inp2').style.marginLeft = ml2+"px";

//Реагирование первого инпута, при вводе
// верного или неверного значений

function f1() {

var num1=document.getElementById('inp1').value;

if (num1!=a) {
	p1.style.backgroundColor = "yellow";
	document.getElementById('inp1').style.color = "red";
}
else {	
	document.getElementById('inp1').outerHTML = '<p id="inp11"></p>';
	document.getElementById('inp11').innerHTML = a;
	document.getElementById('inp11').style.marginLeft = ml1+"px";
	document.getElementById('inp2').style.display = "inline-block"
	p1.style.backgroundColor = "white";

	//Выведение линии от a до a+b, учитывая первоначальное смещение

	ctx.moveTo(a*39+36, 100);
	ctx.quadraticCurveTo((a*39) + (b*39)/2 + 35, -70, (a+b)*39+36, 100);

	//Создание стрелки на конце линии

	ctx.moveTo((a+b)*39+36, 100);
	ctx.lineTo((a+b)*39+39-b, 90);
	ctx.moveTo((a+b)*39+36, 100);
	ctx.lineTo((a+b)*39+26, 102-b);
	ctx.stroke();
}
}

//Реагирование второго инпута, при вводе
// верного или неверного значений

function f2() {

var num2=document.getElementById('inp2').value;

if (num2!=b) {
	p2.style.backgroundColor = "yellow";
	document.getElementById('inp2').style.color = "red";
}
else {	
	document.getElementById('inp2').outerHTML = '<p id="inp22"></p>';
	document.getElementById('inp22').innerHTML = b;
	document.getElementById('inp22').style.marginLeft = ml2+"px";
	p2.style.backgroundColor = "white";
	p3.outerHTML = '<input oninput="f3()" type="text" id="inp3">'
}
}

//Реагирование третьего инпута, при вводе
// верного или неверного значений

function f3() {

var num3=document.getElementById('inp3').value;

if (num3!= a + b) {
	document.getElementById('inp3').style.color = "red";
}
else {	
	document.getElementById('inp3').outerHTML = '<p id="inp33"></p>';
	document.getElementById('inp33').innerHTML = a + b;
	p3.style.backgroundColor = "white";
}
}
