// let name = "Ilya";
// alert(`hello ${1}`); // hello 1
// alert(`hello ${"name"}`); //hello name
// alert(`hello ${name}`); // hello Ilya

// let x = 5;
// let y = 2;
// let z = x + y;
// alert(z)   //7

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = parseFloat(a);
// b = parseFloat(b);
// alert(a + b);

// x = 5;
// x++;
// x -= 2;
// alert(x);   //4

// function sum(x, y=0) {
//     return x+y;
//   }
//   alert(sum(5));   //sum(5, 0)

// const testing = document.getElementById("buttonss");

// function setName () {
//     console.log()
// setName()

// }

// const button = document.getElementById("buttonss");

//     function setName() {
//         alert("whate your name");
//         alert("MAX")
//     }

//     button.addEventListener("click", setName);       // DONE!

// let a = 5;
// let b = 10;

// alert(Number(a) + Number(b));        // Preobrazovanie strok  v chisla
// alert (+a + +b)                     // Preobrazovanie strok v chisla neintuitivno
// alert (Boolean(1))  //true
// alert (Boolean(0))  //false
//alert

// function clickMe() {
//   let catNameInput = document.getElementById("catName"); //1 variant
//   console.log(catNameInput.value); // 1 variant
//   console.log(document.getElementById("catName").value); // 2 variant
// }

// function changeMe() {
//   let catImage = document.getElementById("catImage");
//   catImage.src =
//     "https://cdn.britannica.com/25/172925-050-DC7E2298/black-cat-back.jpg";
// }

// function clickMee() {
//   let checks = document.getElementsByName("feed");
//   console.log(checks[0].checked);
//   console.log(checks[1].checked);
//   console.log(checks[2].checked);
// }

// function select (sender) {
// sender.classList.add("selected")
// }

// let sum = (a, b) => a + b;

// /* Более короткая форма для:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

// // тоже что и
// // let double = function(n) { return n * 2 }
// let double = n => n * 2; 

// alert(double(3)); // 6

// Если нет аргументов, указываются пустые круглые скобки:
// let sayHi = () => alert("Привет!");

// sayHi();

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // при фигурных скобках для возврата значения нужно явно вызвать return};
  
//   alert( sum(1, 2) ); // 3
// }

// // заменим цвет фона на красный,
// document.body.style.background = "red";

// // а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Wikipedia?")) {
// 	// перенаправляет браузер на другой адрес
//   location.href = "https://wikipedia.org"; 
// }
//document.getElementById
{/* <div id="elem">
	<div id="elem-content">Element</div>
</div>
<script>
  // получить элемент
  let elem = document.getElementById('elem'); 
	// сделать его фон красным
  elem.style.background = 'red';
</script> */}

// // получить все элементы div в документе
// let divs = document.getElementsByTagName('div');
// Давайте найдём все input в таблице:
// <table id="table">
// <tr>
// <td>Возраст:</td>
// <td>
// <label><input type="radio" name="age" value="young" checked>до 18</label>
// <label><input type="radio" name="age" value="mature"> от 18 до 50</label>
// <label><input type="radio" name="age" value="senior"> старше 50</label>
// </td>
// </tr>
// </table>
// <script>
//   let inputs = table.getElementsByTagName('input');
// 	console.log(inputs);
// </script>

// ```jsx
// // не работает
// document.getElementsByTagName('input').value = 5;
// ```

// Попытка присвоить значение *коллекции*, а не элементам внутри неё, не сработает.

// Нужно получить элемент по номеру и уже ему присваивать значение, например, так:

// ```jsx
// // работает (если есть input)
// document.getElementsByTagName('input')[0].value = 5
// ```



