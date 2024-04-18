const bmiForm = document.getElementById('bmiForm');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultElement = document.getElementById('result');
const statusElement = document.getElementById('status');

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Сантиметрі в метрі
    const weight = parseFloat(weightInput.value);
    const bmi = weight / (height * height); // BMI формула

    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        statusElement.textContent = 'Сухопарий';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        statusElement.textContent = 'Пропорційної статури';
    } else if (bmi >= 24.9 && bmi < 29.9) {
        statusElement.textContent = 'Зашій рота, пухкий';
    } else {
        statusElement.textContent = 'Свиння';
    }
}