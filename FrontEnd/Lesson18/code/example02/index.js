// promises

const promiseExample = new Promise(
    
    (resolve, reject) => {

        // const timeHandler = () => {
        //     const fortuna = Math.random();
        // if(fortuna > 0.5) {
        //     resolve(fortuna);
        // } else {
        //     reject(fortuna);
        // }
        // }

        // setTimeout(timeHandler, 5000);

        const fortuna = Math.random();
        resolve(fortuna);

}
);

const callbackForPromiseFulfild = (d) => {console.log ('Razmer Diamanta' + d)} 
promiseExample
.then(callbackForPromiseFulfild);

console.log(promiseExample);



// fetch

// fetch('https://jsonplaceholder.typicode.com/todos').then()




// const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');



// fetchResult
//   .then((response) => {return response.json()})
//   .then((data) => {console.log(data)})
//   .catch((error)=>{ console.log(error)})
//   .finally (() => {console.log('NAKONEC TO')})



  const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');



fetchResult
  .then((response) => {return response.json()})
  .then((data) => {
    const arrA =data.slice(1,5)
         console.log(arrA)
    })
  .catch((error)=>{ console.log(error)})
  .finally (() => {console.log('NAKONEC TO')});
  
// const arrA =data.slice[0,5];

// for (i = 0; i < 5; i++) {
//     console.log(arrA[i])
//        }
  
  