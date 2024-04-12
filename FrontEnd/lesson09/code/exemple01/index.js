// console.log ("------------------------------------------------");
// let a = undefined;
// if (!a) {
//     console.log ("a = 0")
// } else {
//     console.log ("a > 0")
// }
// console.log ("...................................................");

// const arrA = ['a','b','c'];
// const lengthOfArrA = arrA.length;
// console.log(lengthOfArrA,"-----Dlinna massiva");
// console.log (arrA[1],"-----------Elem,ent massiva po nomeru yacheyke")
// console.log ("...................................................");
// arrA.push('d');
// console.log(arrA,"-------Dobavil v konce massiva ----arrA.push('d')------");
// console.log ("...................................................");
// arrA.pop();
// console.log(arrA,"--------udalil v konce massiva ----arrA.pop()---");
// console.log ("...................................................");
// arrA.shift();
// console.log(arrA,"--------udalil v nachale massiva ----arrA.shift()---");
// console.log ("...................................................");
// arrA.unshift('A');
// console.log(arrA,"--------Dobavil v nachale massiva ----arrA.unshift()---");



console.log ("...................................................");
const arrB = [];
for (i=0; i<=9; i++) {
    arrB[i]=10-i;
}
console.log("ves massiv:  ",arrB);
console.log ("...................................................");
console.log ("...................................................");
console.log ("...................................................");

const arrC = [];
for (i=0; i<=9; i++) {
    let randA = Math.round(Math.random ()*100);
       arrC[i]=(randA)
    };
    console.log("arrC[i]:  ",arrC);

console.log ("...................................................");

const arrD = [];
for (i=0; i<=9; i++) {
    let randW = Math.round(Math.random ()*100);
    arrD.push(randW)
}   ;
    console.log("arrD.push :  ",arrD);
console.log ("...................................................");
console.log ("...................................................");




// // let randA = Math.random ();
// // console.log (randA)
// console.log (Math.ceil(7.1));
// console.log (Number('1'));
// console.log (Math.round(10.55));

// let x = Math.random();
// y =x *2;
// let consoleLogFunctions = console.log (y);
// console.log (consoleLogFunctions);

// console.log ("...................................................");
// console.log ("...................................................");


let strA ='Hallo meine kleine pupe';
console.log (strA);
let strB = strA.toUpperCase();
console.log(strB);
console.log ("...................................................");

let arrOfWords = strA.split (' ');
console.log(arrOfWords);
console.log(arrOfWords[2]);
console.log ("...................................................");

console.log(arrOfWords.join(' '));
console.log ("...................................................");

let strC ='Hallo meine kLeine pupe';

let arrWithC = strC.split('');
console.log(arrWithC);
console.log ("...................................................");

let bigLetter = 'H';
console.log(bigLetter === bigLetter.toUpperCase());


// massiva

// cikliconnst arr
// for (let i =0; i<=10; i++) { 
//     console.log (i);
// 
// console.log(arrB);


//console.log (!false)

// if (1 === 1) {
//     console.log('1 = 1')
// }
// else if (false) {

// } // необязательно
// else {

// }

// // конкантенация строк
// const a = '8';
// const b = 7;

// const c = b + +a;
// console.log(c);



// const k = Math.random(23);
// const l = Math.random(87);
// if (k<l) {
//     console.log ('+')
// } else {   
//     console.log ('-') 
// }


