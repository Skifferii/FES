let names = [];

function addName() {
  let input = document.getElementById('nameInput');
  let name = input.value.trim();
  if (name !== '') {
    names.push(name);
    input.value = '';
    displayNames();
  }
}

function displayNames() {
  let list = document.getElementById('nameList');
  list.innerHTML = '';
  names.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
  });
}

function selectWinner() {
  let winnerDisplay = document.getElementById('winner');
  if (names.length === 0) {
    winnerDisplay.innerText = 'Введите фамилии перед выбором победителя.';
    return;
  }
  let randomIndex = Math.floor(Math.random() * names.length);
  let winner = names[randomIndex];
  winnerDisplay.innerText = 'Победитель: ' + winner;
}