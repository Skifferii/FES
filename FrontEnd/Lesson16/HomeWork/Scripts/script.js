const spanElement = document.querySelector('span');
const inputElement = document.querySelector('.input');
const buttonElement = document.querySelector('button');
let counter = 0;
let intervalId;
const timeHandler = () => {
    spanElement.innerText = counter;
    counter--;
    if (counter < 0) { 
        clearInterval(intervalId);
        spanElement.innerText = "0 - Время вышло";
        alert ("Время вышло") 
        }
};
buttonElement.addEventListener('click', () => {
    counter = inputElement.value;
    intervalId = setInterval(timeHandler, 1000);
});






