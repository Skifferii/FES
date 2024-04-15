let arrC = new Array;
for (i=0; i<=9; i++) {
    let randA = Math.round(Math.random ()*100);
       arrC[i]=(randA)
    };
  console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100:  ",arrC);
  let max = Math.max(...arrC);
  let min = Math.min(...arrC);
  console.log ("Найти максимальное и минимальное значение в массиве");
  console.log("Макс:", max);
   console.log("Мин:", min);
console.log ("...................................................");
console.log ("...................................................");

console.log("Mмассив:  ",arrC);
let firstElement = arrC.shift();
arrC.push(firstElement);

console.log(" Вырезать первый элемент и добавить его в конец массива.:  ",arrC);

console.log ("...................................................");

 console.log ("...................................................");
 console.log ("...................................................");
 console.log ("...................................................");

 let arrA = new Array;
for (i=0; i<=9; i++) {
    let randA = Math.round(Math.random ()*75);
       arrA[i]=(randA)
    };
  console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75:  ",arrA);
console.log ("...................................................");


 let maxA = Math.max(...arrA);
let minA = Math.min(...arrA);
console.log ("Найти минимальное и максимальное значение в массиве: ");

console.log("Макс:", maxA);
 console.log("Мин:", minA);
 let SummA = maxA + minA;
 console.log("Вывести в консоль их сумму:" + SummA);
 console.log ("...................................................");
 console.log ("...................................................");
 console.log ("...................................................");
 console.log ("...................................................");


 let arrB = new Array;
 for (i=0; i<=9; i++) {
     let randA = Math.round(Math.random ()*50);
        arrB[i]=(randA)
     };
   console.log("Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50:  ",arrB);
 console.log ("...................................................");
 
 let summB = arrB.reduce((acc, curr) => acc + curr, 0);

 console.log("Найти сумму всех элементов массива: " + summB);
  console.log ("...................................................");




