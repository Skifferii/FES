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