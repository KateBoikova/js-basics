// Таски на переменные:
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

const a = 2;
const b = 3;
console.log(a * b);

// 2) Создайте две переменные c и d. Выведите в консоль результат деления.

const c = 444;
const d = 2;
console.log(c / d);

// 3) Создайте две переменные e и f. Выведите в консоль результат сложения.

const e = 40;
const f = 30;
console.log(e + f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

const number = 11;
const bool = true;
const string = "java script";
const stringNum = "100";
console.log("number = ", number);
console.log("bool = ", bool);
console.log("string = ", string);
console.log("stringNum = ", stringNum);

// 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num - 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num - 1;

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

/******************************************************************/
// Таски на prompt:
// 1) Запросить число у пользователя, возвести его в квадрат и вывести

const suggestedNumber = Number(prompt("Enter any number: "));
alert("Square: " + suggestedNumber * suggestedNumber);

// 2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.

const num1 = Number(prompt("Enter any number: "));
const num2 = Number(prompt("Enter another number: "));
const sum = num1 + num2;
const arithmeticMean = sum / 2;
alert("Arithmetic mean is: " + arithmeticMean);

// 3) Перевести число минут в секунды. Число спрашивать у пользователя.

const min = Number(prompt("Enter minutes: "));
const sec = min * 60;
alert(min + " minutes is " + sec + " seconds.");

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

const greeting = "Hello";
const userName = prompt("Enter your name, please: ");
alert(greeting + ", " + userName + "!");

/******************************************************************/
// Таски на условия:
// 1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

const num3 = Number(prompt("Введите число, пожалуйста: "));

if (num3 === "10") {
  alert("Верно!");
} else {
  alert("Неверно");
}

// 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

const test = Boolean(prompt("Введите что-нибудь:"));

if (test) {
  alert("Верно");
} else {
  alert("Неверно");
}

if (!test) {
  alert("Верно");
} else {
  alert("Неверно");
}

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

const purchaseSum = Number(prompt("Введите сумму покупки: "));

if (purchaseSum > 500 && purchaseSum < 800) {
  const threePercentDiscount = purchaseSum - purchaseSum * 0.03;
  alert("Сумма вашей покупки с учетом скидки: " + threePercentDiscount);
} else if (purchaseSum > 800) {
  const fivePercentDiscount = purchaseSum - purchaseSum * 0.05;
  alert("Сумма вашей покупки с учетом скидки: " + fivePercentDiscount);
} else {
  alert("Сумма вашей покупки: " + purchaseSum);
}

/******************************************************************/
// Таски на циклы. Каждую задачу решить всеми тремя циклами!
// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

let i = 25;
while (i >= 0) {
  console.log(i);
  i--;
}

for (let i = 25; i >= 0; i--) {
  console.log(i);
}

i = 25;
do {
  console.log(i);
  i--;
} while (i >= 0);


// 2) Вывод чисел от 10 до 50, которые кратны 5

let z = 10;
while (z <= 50) {
  if (z % 5 === 0) {
  	console.log(z);
  }
  z++;
}

for (let z = 10; z <= 50; z++) {
	if (z % 5 === 0) {
  	console.log(z);
  }
}

let z2 = 10;
do {
  if (z2 % 5 === 0) {
    console.log(z2);
  }
  z2++;
} while (z2 <= 50); 


// 3) Найти сумму чисел в пределах от 1 до 100.

let count = 0;
let sum2 = 0;
while (count <= 100) {
  sum2 = sum2 + count;
  console.log(sum2);
  count++;
}

let count2 = 0;
let sum3 = 0;
do {
  sum3 = count2 + sum3;
  count2++;
  console.log(sum3);
} while (count2 <= 100);

for (let count = 0, sum = 0; count <= 100;) { 
  sum = count + sum;
  count++;
  console.log(sum);
}



// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит


let task;
while (task != 6) {
   task = Number(prompt("Напишите ответ примера (2 + 2 * 2): ")); 
} 

do {
  task = Number(prompt("Напишите ответ примера (2 + 2 * 2): "));
} while (task != 6);

for (let task; task !=6; task = Number(prompt("Напишите ответ примера (2 + 2 * 2): ")));

/******************************************************************/
