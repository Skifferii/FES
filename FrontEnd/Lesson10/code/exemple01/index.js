function sumAB(a, b) {
   const sum = a + b;
   return sum;
}
const sum1 = sumAB(3,4);
console.log ("summAB" + sum1);
console.log ("...................................................");



function maxInArr(arr) {
   let maxNum = Math.max (...arr);
   return maxNum;
}

const arrC = [1,5,25,12,12];
console.log (maxInArr(arrC));
console.log ("...................................................");
console.log (arrC)

function mas20(arr,a) {
   let arrQ=[];
 for (i=0; i<arr.length; i++) {
   arrQ[i]=arr[i]*a;
   }
   return arrQ;
}

function arrNaA(arr, a=1111) {
       const arrD = [];
   for (let i = 0; i < arr.length; i++) {
       arrD.push(arr[i]*a);
       //arrD[i] = arrA[i]*10;
   }
   return arrD;
}

const arrT = [1, 8, 3, 13];

console.log (mas20(arrC, 200));
console.log ("...................................................");
console.log(arrNaA(arrT));
console.log ("...................................................");
console.log ("...................................................");
console.log ("...................................................");


//STRELOCHNAYA FUNKTION

const arrNa10 =(arr, a =10 ) => {
   const arrD = [];
for (let i = 0; i < arr.length; i++) {
   arrD.push(arr[i]*a);
   //arrD[i] = arrA[i]*10;
}
return arrD;
}
const arrF = [1, 8, 3, 13];
console.log(arrNa10(arrF));
console.log ("...................................................");



// функция которая ищет максимум в Массиве
const maxInArr1 = (arr) => {
   return maxNum = Math.max(...arr);
}

const maxInArr1schort = arr => Math.max(...arr);


console.log(maxInArr1schort(arrF));
console.log ("...................................................");









// const arrA = [];
// for (i=0; i<=9; i++) {
//     let randW = Math.round(Math.random ()*100);
//     arrA.push(randW)
// };
// console.log (arrA);
// console.log ("...................................................");
// const arrB = [...arrA].reverse();
// console.log (arrA);
// console.log (arrB);
// console.log ("...................................................");
// const arrC = arrA.slice().sort((a, b) => b - a);
// console.log (arrC);
// const arrD = [...arrA].sort((a, b) => a - b);
// console.log (arrD);
// console.log ("...................................................");
// console.log ("...................................................");
// console.log ("...................................................");











// let arrC = new Array;
// for (i=0; i<=9; i++) {
//     let randA = Math.round(Math.random ()*100);
//        arrC[i]=(randA)
//     };
//   console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100:  ",arrC);
//   let max = Math.max(...arrC);
//   let min = Math.min(...arrC);
//   console.log ("Найти максимальное и минимальное значение в массиве");
//   console.log("Макс:", max);
//    console.log("Мин:", min);
// console.log ("...................................................");
// console.log ("...................................................");

// console.log("Mмассив:  ",arrC);
// let firstElement = arrC.shift();
// arrC.push(firstElement);

// console.log(" Вырезать первый элемент и добавить его в конец массива.:  ",arrC);

// console.log ("...................................................");

//  console.log ("...................................................");
//  console.log ("...................................................");
//  console.log ("...................................................");

//  let arrA = new Array;
// for (i=0; i<=9; i++) {
//     let randA = Math.round(Math.random ()*75);
//        arrA[i]=(randA)
//     };
//   console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75:  ",arrA);
// console.log ("...................................................");


//  let maxA = Math.max(...arrA);
// let minA = Math.min(...arrA);
// console.log ("Найти минимальное и максимальное значение в массиве: ");

// console.log("Макс:", maxA);
//  console.log("Мин:", minA);
//  let summA = maxA + minA;
//  console.log("Вывести в консоль их сумму:" + summA);
//  console.log ("...................................................");
//  console.log ("...................................................");
//  console.log ("...................................................");
//  console.log ("...................................................");


//  let arrB = new Array;
//  for (i=0; i<=9; i++) {
//      let randA = Math.round(Math.random ()*50);
//         arrB[i]=(randA)
//      };
//    console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50:  ",arrB);
//  console.log ("...................................................");
 
//  let summB = arrB.reduce((acc, curr) => acc + curr, 0);

//  console.log("Найти сумму всех элементов массива: " + summB);
//   console.log ("...................................................");
//   console.log ("...................................................");
//   console.log ("...................................................");
//   console.log ("...................................................");


//  let strA ='Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.';
//  let arrOfWords = strA.split (' ');
//  console.log(arrOfWords);
// console.log ("...................................................");


// let str2 = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";

// let words = str2.split(/\s+/);
// words.forEach(word => console.log(word));
// console.log ("...................................................");
// console.log ("...................................................");
// console.log ("...................................................");
// console.log ("...................................................");
// console.log ("...................................................");



// let arr5 = new Array;
// for (i=0; i<=4; i++) {
//     let randA = Math.round(Math.random ()*50);
//        arr5[i]=(randA)
//     };
//     console.log("Объявить массив из 5 элементов и заполнить его любыми числами:  ",arr5);
//     console.log ("...................................................");
    
// let [num1, num2, num3, num4, num5] = arr5;
// console.log ("Присвоить 5 переменным значения из массива с помощью деструктуризации, Выводим значения переменных в консоль:");
// console.log("num1:", num1);
// console.log("num2:", num2);
// console.log("num3:", num3);
// console.log("num4:", num4);
// console.log("num5:", num5);

// console.log ("...................................................");
