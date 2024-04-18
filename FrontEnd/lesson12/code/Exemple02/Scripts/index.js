// console.log('test');


// меняем
const ourTitle = document.querySelector('.title');
// console.log(ourTitle);
ourTitle.innerText = 'Header';
ourTitle.classList.add('font-red');


// создаем новые ноды
const ourSpan = document.createElement('span');
ourSpan.innerText = 'Text in span';
ourSpan.classList.add('span-style');
// созданную ноду вставляем куда то
ourTitle.append(ourSpan);



// Hören
const ourButton = document.createElement ('button');
ourButton.innerText = 'lets go';
const divForButton = document.querySelector ('.button');
divForButton.append(ourButton);


ourButton.addEventListener('click', functionB);



function functionB() {
    console.log('ya furefafafaf');
}