const spanElement = document.querySelector ('span');
let counter = 10;

console.log('Перед setTimeout');

const startIntervalTime = Date.now();

const timeHandler = () => {
    
    // console.log('Вывод  ' + (Date.now()-startIntervalTime));
    // spanElement.innerText = (Date.now()-startIntervalTime);
    // if ((Date.now()-startIntervalTime) > 10000){
    //     clearInterval (intervalId);
    // }
    spanElement.innerText = counter;
    counter --;
    if (counter < 0){
            clearInterval (intervalId);
         }
  }

const intervalId = setInterval(timeHandler, 1000);

 
// clearInterval (intervalId);

console.log('После запуска функции setInterval');








// const startLoopTime = Date.now();
// for(let i = 0; i < 120000000; i++) {
// }
// const endLoopTime = Date.now();
// console.log(endLoopTime - startLoopTime);