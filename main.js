function sum(a, b) {
    return a + b;
}
const num1 = Number.parseFloat(prompt("Введите первое число: "));
const num2 = Number.parseFloat(prompt("Введите второе число: "));
alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`)

// Вывод имени в консоль (инструмент разработчика F12)
function sayHello(name) {
    console.log(`Привет, ${name}`);
}
const userName = prompt("Введите имя: ");
sayHello(userName);

// 1ый вариант
const u = confirm("Вам хорошо живётся?");
if (u) {
    alert("Тогда мы идём к вам!");
} else {
    alert("Ну вы держитесь там!");
}
// 2ой вариант
confirm("Вам хорошо живётся?")
    ? alert("Тогда мы идём к вам!")
    : alert("Ну вы держитесь там!");
// 3ий вариант
alert(confirm("Вам хорошо живётся?")
    ? ("Тогда мы идём к вам!")
    : ("Ну вы держитесь там!"))

// Задача через switch
const product = prompt("Введите фрукт: ").toLowerCase();
switch (product) {
    case 'мандарины':
        alert('Мандарины стоят 100 руб.');
        break;
    case 'бананы':
    case 'груши':
        alert('Бананы и груши стоят 70 руб.');
        break;
    default:
        alert('Нет такого продукта');         
}