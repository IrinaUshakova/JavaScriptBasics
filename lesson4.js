// Урок 4. Объекты в JavaScript

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function getDigits(number) {
    if (number < 0 || number > 999) {
        console.log('Число должно быть в диапазоне от 0 до 999.')
        return {};
    }

    return {
        firstDigit: Math.floor(number / 100),
        secondDigit: Math.floor(number / 10) % 10,
        thirdDigit: number % 10,
    };
}

console.log(getDigits(245));
console.log(getDigits(78));
console.log(getDigits(8));
console.log(getDigits(1000));
console.log(getDigits(-1));

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//     2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const basket = {
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
    countBasketPrice() {
        return this.products.reduce(
            (totalAmount, productBasket) => totalAmount + productBasket.priceProduct, 0);
    }
}

let price = (basket.countBasketPrice());
console.log(price);