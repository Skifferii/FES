function objectInString (objectB) {
    const arrOfObject = Object.values(objectB);
    let string1 = "";
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        string1 = `${string1}${arrOfObject[i]}${(i === arrOfObject.length - 1) ? '' : ', '}`
    }
    return string1;
}
// function objectInString (objectB) {
//     const arrOfObject = Object.values(objectB);
//     let string1 = "";
//     console.log(arrOfObject);
//     for (let i = 0; i < arrOfObject.length; i++) {
//        string1 = (i === arrOfObject.length - 1)  //        ? string1 = `${string1}${arrOfObject[i]} ` //        : string1 = `${string1}${arrOfObject[i]}, `;
        
        
        
        
//         // {
//         //     string1 = `${string1}${arrOfObject[i]}, `;
//         //     // string1 = string1 + arrOfObject[i];
//         //  }else {
//         //     // string1 = string1 + arrOfObject[i] + ", ";
//         //     string1 = `${string1}${arrOfObject[i]}, `;
//         // }       
//     }
//     return string1;
// }

const objectF = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInString(objectF));0


// const doubleF = (name) => {
//     return 



function objectInObject (objectE) {
    const arrOfObject = Object.entries(objectE);
    const objectENew = {};
    console.log(arrOfObject);
    for (let i = 0; i < arrOfObject.length; i++) {
        objectENew[arrOfObject[i][0]] = {value: arrOfObject[i][1], type: typeof arrOfObject[i][1]};
    
    }
    return objectENew;
}
const objectW = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
console.log(objectInObject(objectW));