const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');

const getResultButton = document.querySelector('#resultButton');


getResultButton.addEventListener('click', showResult);



const resultField = document.querySelector('#result');
function showResult() {
    let resultOfAdding;
    resultOfAdding = +firstInput.value + +secondInput.value;
    resultField.innerText = resultOfAdding;
}