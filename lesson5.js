"use strict";
// Урок 5. Введение в DOM

// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом,
// т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8,
// столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)

// let table = document.createElement('table');
// let letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
// let numbers = ['', '1', '2', '3', '4', '5', '6', '7', '8', ''];
// let reverseNumber = numbers.reverse();
//
// function chessDesk() {
//     for (let i = 0; i < 10; ++i) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//         for (let j = 0; j < 10; ++j) {
//             let td = document.createElement('td');
//             tr.append(td);
//             td.innerHTML = (i + 1) + j;
//
//             if (td.innerHTML % 2 === 0) {
//                 td.style.backgroundColor = "#808080";
//             }
//
//             if (i === 9 && 0 <= j <= 9) {
//                 td.innerHTML = letters[j];
//             } else if (i === 0 && 0 <= j <= 9){
//                 td.innerHTML = letters[j];
//             } else if (i <= 8 && j === 0) {
//                 td.innerHTML = reverseNumber[i];
//             } else if (i <= 8 && j === 9) {
//                 td.innerHTML = reverseNumber[i];
//             } else {
//                 td.innerHTML = '';
//             }
//         }
//     }
//     document.querySelector('div').append(table);
// }
// chessDesk();

// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const item = {
    render(prod) {
        return `<div class="product">
                    <div>Наименование товара: ${prod.nameProduct}</div>
                    <div>Цена за один товар: ${prod.priceProduct}</div>
                    <div>Количество товаров: ${prod.quantity}</div>
                    <div>Общая стоимость товаров: ${prod.quantity * prod.priceProduct}</div>
                </div>`;
    }
}

const basket = {
    button: null,
    cartList: null,
    cartItem: item,
    products: [
        {
            nameProduct: 'Шоколад',
            priceProduct: 100,
            quantity: 1,
            id: 111,
        },
        {
            nameProduct: 'Кофе',
            priceProduct: 300,
            quantity: 1,
            id: 222,
        },
        {
            nameProduct: 'Чай',
            priceProduct: 200,
            quantity: 1,
            id: 333,
        }
    ],

    getBasket() {
        this.cartList = document.querySelector('.product-list');
        this.button = document.querySelector('.btn');
        this.button.addEventListener('click', this.clear.bind(this));
        this.render();
    },

    render() {
        if (this.products.length) {
            this.products.forEach(product => {
                this.cartList.insertAdjacentHTML('beforeend', this.cartItem.render(product));
            });
            this.cartList.insertAdjacentHTML('beforeend', `Количество товаров в корзине: ${this.products.length}, общей стоимостью ${this.getPrice()} рублей`);
        } else {
            this.cartList.textContent = 'Корзина пуста';
        }
    },

    getPrice() {
        return this.products.reduce(function (price, good) {
            return price + good.priceProduct * good.quantity;
        }, 0);
    },

    clear() {
        this.products = [];
        this.render();
    },
};

basket.getBasket();
