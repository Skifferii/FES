// Задание.
// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
// Copy
("------------------------------------------------")
function arrayToObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) { 
        let key = arr[i];
        obj[key] = key; 
    }
    return obj;
}
console.log(arrayToObj(['a', 36.6, 'John Doe']));
console.log("------------------------------------------------")



// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]


// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
// Copy
// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
// Copy
// 4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.

// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }
// Copy
// *2024

// AIT-TR
// v.1.2.

function objectInString (objectB) {
    const arrOfObject = Object.values(objectB);
    let string1 = "";
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        if (i === arrOfObject.length - 1) {
            string1 = string1 + arrOfObject[i];
         }else {
            string1 = string1 + arrOfObject[i] + ", ";
        }       
    }
    return string1;
}

`${string}`


// const doubleF = (name) => {
//     return 


const objectF = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInString(objectF));0


