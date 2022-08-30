"use strict";

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let i = 0;

while (i <= 100) {
    if (getPrimeNumber(i)) {
        console.log(i)
    }
    i++
}

function getPrimeNumber(num) {
    if (i < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

getPrimeNumber(0);

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const basket = [            // массив для хранения информации о товарах в корзине
    ['Шоколад', 100, 2],    // товар, стоимость, количество
    ['Кофе', 300, 1],
    ['Чай', 200, 1],
];

function countBasketPrice(products) {
    let price = 0;
    for (let i = 0; i < products.length; i++) {
        price += products[i][1] * products[i][2];
    }
    return price;
}

let price = (countBasketPrice(basket));
console.log(price);

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}

for (let i = 0; i <= 9; console.log(i++)){}
