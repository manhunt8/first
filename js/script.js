// let answers = [],
// questions = [
// 	"Как ваше имя?",
// 	"Как ваша фамилия?",
// 	"Сколько вам лет?"
// ];

// for(let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i]);//таким нехитрым образом мы передаем пустой массив ответы пользователей
// }
// document.write(answers);
//условия
// let age = prompt("сколько вам лет");
// if (age > 18) {
// 	alert("Вы можете войти!");
// }else {
// 	alert("Вы не можете просматривать мариалы!")
// }
// function humanSayHello(obj) {
// 	document.write("Hello " + obj + "!")
// }
// humanSayHello("Ivan");
// function calc (a,b) {
// 	console.log(a+b)
// };

// calc(4,5);
// calc(5,5);
// calc(5,15);
//большая функция
function myFirstApp(name, age) {

alert("Привет. меня зовут " + name + " и это моя первая программа!");

function ShowSkills() {
	let skills = ['html','css', 'photoshop'];
	for (let i=0; i<skills.length; i++) {
		//Я владею html <br>
		document.write("Я владею " + skills[i] + '<br>');
	}

}
ShowSkills();

function checkAge() {
	let age = prompt("Сколько вам лет?");
	if (age >= 18) {
		//у вас есть все шансы стать фронтент разработчиком
		document.write(" У вас есть все шансы стать фронтенд разработчиком")
	}else {
		document.write("У вас все получиться")
	}
}
checkAge();

function calcPow(num) {
	//4*4 - квадрат в консоль
	console.log(num*num);
}
calcPow(4);//должно получиться 16

}

myFirstApp("123", "18");//аргументы name age