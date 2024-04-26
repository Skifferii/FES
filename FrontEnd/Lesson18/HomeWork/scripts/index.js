const toDODODD = document.querySelector('#input-field');
const getToDODODDButton = document.querySelector('.btn');
const nextItem = document.querySelector('#second-item');
const list = document.querySelector(".list");


getToDODODDButton.addEventListener('click', recordNewItem);


function recordNewItem()
    {
    let newItem;
    newItem = toDODODD.value.trim(); // TUT NASA Асинхронная функция
     if (newItem) 
     { 
    console.log(newItem);
    const newListItem = document.createElement("li"); // Создаем новый элемент списка
    newListItem.classList.add("list-item");// Добавляем класс "list-item" к новому элементу
    newListItem.textContent = newItem;   // Устанавливаем текст нового элемента
    list.appendChild(newListItem); // Добавляем новый элемент в список
    newListItem.addEventListener('click', stylTudaSuda);
      // Создаем кнопку delete
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");
      // Добавляем обработчик события клика на кнопку delete
      deleteButton.addEventListener('click', function() {
          newListItem.remove(); // Удаляем элемент списка при клике на кнопку delete
      });
      // Добавляем кнопку delete к новому элементу списка
      newListItem.appendChild(deleteButton)
     }
    }
function stylTudaSuda(event) {
    const listItem = event.target; 
    listItem.classList.toggle('list-item_done')
}

const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos');
fetchResult
  .then((response) => {return response.json()})
  .then((data) => { const arrA =data.slice(1,11)                   
    console.log(arrA)    
    const arrB = arrA.map(obj => obj.title.trim())              
     for (i=0; i<arrB.length; i++) {  
    const newListItem = document.createElement("li"); // Создаем новый элемент списка
    newListItem.classList.add("list-item"); // Добавляем класс "list-item" к новому элементу

    newListItem.textContent = arrB [i]; // Устанавливаем текст нового элемента

    list.appendChild(newListItem); // Добавляем новый элемент в список
    newListItem.addEventListener('click', stylTudaSuda);       
    // Создаем кнопку delete
     const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.classList.add("delete-button");
         deleteButton.addEventListener('click', function() {
         newListItem.remove(); 
     });
     newListItem.appendChild(deleteButton)
    }   
    }
)
.catch((error)=>{ console.log(error)})
.finally (() => {console.log('finally')});

