// forEach

// const arrF = [1, 2, 3, 5, 4, 10, 6];
// let b=0

// const ff =(a)=> { b=b+a;
//     console.log(`${b} `);
// }

// arrF.forEach(ff);
// console.log(`${b} `);



const arrF = [1, 2, 3, 5, 4, 10, 6];
const arrA =[];

const ff =(a)=> {
    arrA.push(a+3);
}

arrF.forEach(ff);
console.log(`-----------------------`);
console.log(`${arrF} ${'  +3 = '} ${arrA}`);


//map !!!
const callbackForMap = (element) => {
    return element +4;
}

const arrAMap = arrF.map(callbackForMap);
console.log(arrAMap);

const callbackForMap2 = (element) => {
    return element * element;
}
const arrAMap2 = arrF.map(callbackForMap2);
console.log(arrAMap2);


// filter
const callBackForFiler = (element) => {
    if (element > 4) {
        return true
    } else {
        return false
    }
}

const arrAFilter = arrF.filter(callBackForFiler);
console.log(arrAFilter);



// slice
const arrASliceResult = arrF.slice(2, 5);
console.log(arrASliceResult);
console.log(arrF);

//sort
// const callBackForSort = (a, b) =>{
//     if (a < b ) {
//         return -1;
//     } else {return 1;
//     }
// }
const callBackForSort = (a, b) => a > b ? -1 : 1;

// return a-b 
console.log( "___________________________________________________________________");

const aarFcopy = [...arrF];

aarFcopy.sort(callBackForSort);
console.log(aarFcopy);


const callBackForSortS = (a, b) => a.height < b.height ? -1 : 1;

const objectF = [
    {"name": "John", "surname": "Doe", "height": 198, "effectiveness": 15.6},
    {"name": "Jane", "surname": "Smith", "height": 183, "effectiveness": 12.3},
    {"name": "Mike", "surname": "Brown", "height": 202, "effectiveness": 18.4},
    {"name": "Emily", "surname": "Davis", "height": 190, "effectiveness": 14.8},
    {"name": "Chris", "surname": "Wilson", "height": 205, "effectiveness": 20.1}
  ]
  const objectFcopy = [...objectF];

 objectFcopy.sort(callBackForSortS);
  console.log(objectF);
  console.log(objectFcopy);


  