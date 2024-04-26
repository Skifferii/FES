const toDODODD = document.querySelector('#input-field');
const getToDODODDButton = document.querySelector('.btn');
const nextItem = document.querySelector('#second-item');
const list = document.querySelector(".list");


getToDODODDButton.addEventListener('click', recordNewItem);


function recordNewItem()
    {
    let newItem;
    newItem = toDODODD.value.trim(); 
     if (newItem) 
     { 
    console.log(newItem);
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    newListItem.textContent = newItem;
    list.appendChild(newListItem);
    newListItem.addEventListener('click', stylTudaSuda, console.log("клик"));
     }
    }
function stylTudaSuda(event) {
    const listItem = event.target; 
    listItem.classList.toggle('list-item_done')
}



const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');
fetchResult
  .then((response) => {return response.json()})
  .then((data) => { const arrA =data.slice(1,15)                   
    console.log(arrA)    
    const arrB = arrA.map(obj => obj.title.trim())              
     for (i=0; i<=arrB .length; i++) {    

    const newListItem = document.createElement("li"); // Создаем новый элемент списка
    newListItem.classList.add("list-item"); // Добавляем класс "list-item" к новому элементу
    newListItem.textContent = arrB [i]; // Устанавливаем текст нового элемента
    list.appendChild(newListItem); // Добавляем новый элемент в список
    newListItem.addEventListener('click', stylTudaSuda, console.log("click")); // Добавляем обработчик события клика на новый элемент
     }   
    }
)
.catch((error)=>{ console.log(error)})
.finally (() => {console.log('finally')});

