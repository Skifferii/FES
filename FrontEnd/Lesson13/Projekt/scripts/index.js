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
    newItem = toDODODD.value.trim(); // Получаем значение из поля ввода и удаляем лишние пробелы 
                                     // Функция trim() применяется к newItem, чтобы удалить возможные пробелы в начале и конце введенной строки. 
                                     // Если значение после удаления пробелов все еще не пустое, то создается новый элемент списка. 
                                     // Если же значение пустое (после удаления пробелов), то новый элемент не создается.
                                     // Таким образом, это обновление поможет избежать создания пустых элементов списка и обеспечит более чистый и удобный пользовательский интерфейс.
    if (newItem) {  // Проверяем, что значение не пустое
    console.log(newItem); // Выводим значение в консоль

    const newListItem = document.createElement("li"); // Создаем новый элемент списка
    newListItem.classList.add("list-item"); // Добавляем класс "list-item" к новому элементу
    newListItem.textContent = newItem; // Устанавливаем текст нового элемента
    list.appendChild(newListItem); // Добавляем новый элемент в список
        newListItem.addEventListener('click', stylTudaSuda, console.log("2222222222")); // Добавляем обработчик события клика на новый элемент
}
}

// Функция для переключения стиля элемента
function stylTudaSuda(event) {
    console.log("2222222222")// Выводим KLATZ click tur в консоль
    const listItem = event.target; // Получаем элемент, на который был клик
    // if (listItem.classList.contains('list-item_done')) { // Проверяем, содержит ли элемент класс "list-item_done"
    //     listItem.classList.remove('list-item_done'); // Если содержит, удаляем класс
    // } else {
    //     listItem.classList.add('list-item_done'); // Если не содержит, добавляем класс
    // }
    listItem.classList.toggle('list-item_done') // classList.toggle  функция ТУДА СЮДА КЛАСС
}




