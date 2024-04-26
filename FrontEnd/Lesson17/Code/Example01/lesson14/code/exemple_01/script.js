console.log('------ №1 -------');
//№1 Написать функцию, которая принимает на вход массив имен и возвращает
// массив имен, начинающихся на букву "а" (большую или маленькую).
const arrayName = ["Владимер", "Артур", "Сергей", "Лев", "Анна", "Олександр",
"Катерина", "Ольга", "Андрей"];
const arrayNameFiltr = string => string[0].toUpperCase() === 'А';
// const arrayNameFiltr = (string) => {
//     // console.log(string[0]);
//     return (string[0] === 'А' || string[0] === 'а');
// }
const arrayNameFiltrA = arrayName.filter(arrayNameFiltr);
console.log(arrayNameFiltrA);
console.log('------ №2 -------');
//№2 Написать функцию, которая принимает на вход массив чисел и возвращает
// их сумму. Если получится использовать метод reduce - будет здорово.
// Завтра его рассмотрим.
const arrayNumbers = [6, 8, 5, 1, 9, 3];
const sumNumbers = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumNumbers);
console.log('------ №3 -------');
//№3 Написать функцию, которая принимает на вход массив чисел и возвращает
// массив из тех же элементов, но в обратном порядке.
let arrayUnshift =[];
const arrayUnshiftForEach = (number) => {
    arrayUnshift.unshift(number); // пушим в начало пустого массива
}
arrayNumbers.forEach(arrayUnshiftForEach);
console.log(arrayUnshift);
console.log('------ №4 -------');
//№4 Написать функцию, которая примет объект вида:
// {
//    'customer-id-1': {
//       name: 'William',
//       age: 54
//    },
//    'customer-id-2': {
//       name: 'Tоm',
//       age: 17
//    }
// }
// и вернет массив обьектов вида:
// [{name: 'William', age: 54, id: 'customer-id-1’}, {name: 'Tom', age: 17,
// id: 'customer-id-2'}]
const objectA = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tоm',
        age: 17
    }
}
const objectInArray = Object.entries(objectA);
// console.log(objectInArray);
const arrayB = (arr) => {
    return {...arr[1], id: arr[0]};
    // arr[1].id = arr[0];
    // return arr[1];
}
const objectInArrayEnd = objectInArray.map(arrayB);
console.log(objectInArrayEnd);
console.log('------ №5 -------');
//№5 Написать функцию, которая принимает на вход 2 объекта, и склеивает их в один,
// на выходе долежн быть объект, который содержит все свойства обоих объектов.
// Если свойства(ключи) во входящих обьектах повторяются, то взять значение из
// второго объекта.
// Входящие:
// {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
//   key5: 'value5'
// };
// {
//   key3: 'new_value3',
//   key4: 'new_value4',
//   key5: 'new_value5',
//   key6: 'value6',
//   key7: 'value7'
// };
const object1 = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      key5: 'value5'
    };
const object2 = {
      key3: 'new_value3',
      key4: 'new_value4',
      key5: 'new_value5',
      key6: 'value6',
      key7: 'value7'
    };
const objectNew = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
console.log(objectNew(object1, object2));