const toDODODD = document.querySelector('#input-field');
const getToDODODDButton = document.querySelector('.btn');
const nextItem = document.querySelector('#second-item');
const list = document.querySelector(".list");


// getToDODODDButton.addEventListener('click', recordNewItem);

// function recordNewItem() {
//     let newItem;
//     newItem = toDODODD.value;
//     console.log(newItem)
//     const newListItem = document.createElement("li");
//     newListItem.classList.add("list-item"); 
//     newListItem.textContent = newItem;
//     list.appendChild(newListItem);
   
//     newListItem.addEventListener('click', re2);
//     function re2() { 
//     console.log("KLATZ click tur")
//     newListItem.classList.add("list-item_done"); 
//     }
// }


// Добавляем обработчик события клика на кнопку
getToDODODDButton.addEventListener('click', recordNewItem);

// Функция для записи нового элемента
function recordNewItem() {
    let newItem;
    newItem = toDODODD.value; // Получаем значение из поля ввода
    console.log(newItem); // Выводим значение в консоль
    const newListItem = document.createElement("li"); // Создаем новый элемент списка
    newListItem.classList.add("list-item"); // Добавляем класс "list-item" к новому элементу
    newListItem.textContent = newItem; // Устанавливаем текст нового элемента
    list.appendChild(newListItem); // Добавляем новый элемент в список
    
    newListItem.addEventListener('click', stylTudaSuda); // Добавляем обработчик события клика на новый элемент
}

// Функция для переключения стиля элемента
function stylTudaSuda(event) {
    console.log("KLATZ click tur")// Выводим KLATZ click tur в консоль
    const listItem = event.target; // Получаем элемент, на который был клик
    if (listItem.classList.contains('list-item_done')) { // Проверяем, содержит ли элемент класс "list-item_done"
        listItem.classList.remove('list-item_done'); // Если содержит, удаляем класс
    } else {
        listItem.classList.add('list-item_done'); // Если не содержит, добавляем класс
    }
}



