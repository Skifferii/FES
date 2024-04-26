const button = document.querySelector(".button")
const nickName = document.querySelector("#input_NickName")

button.addEventListener('click', recordNewNickName);

function recordNewNickName()

{
    let newNickName;
    newNickName = nickName.value.trim(); 
     if (newNickName ) // &&  ("https://api.github.com/users/"+nickName.value)
     {
       // Очищаємо вміст .avatar_url
      document.querySelector(".avatar_url").innerHTML = "";

const url = "https://api.github.com/users/"+nickName.value
let dataResponse;
const getData = async (api) => {
    const serverResponse = await fetch(api)
    dataResponse = await serverResponse.json()
    dataWork(dataResponse)
}
getData(url)
function dataWork(data){
    if (data.login)
     {
    let avatarUrlDiv = document.querySelector(".avatar_url");  // Находим элемент с классом .avatar_url
    let loginDiv = document.createElement("div");  // Создаем первый новый div для data.login
    loginDiv.innerText = "Nick: " + data.login;
    loginDiv.classList.add("login");  // Присваиваем класс для стилизации
    avatarUrlDiv.appendChild(loginDiv); // Добавляем созданный div внутрь элемента .avatar_url

    let locationDiv = document.createElement ("div");
    locationDiv.innerText = "Location: " + data.location;
    locationDiv.classList.add("location");
    avatarUrlDiv.appendChild(locationDiv);

     
    let imageDiv = document.createElement("div");// Создаем третий новый div для изображения
    let image = document.createElement("img");  // Создаем элемент изображения
    image.src = data.avatar_url;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.avatar_url                               
    imageDiv.classList.add("avatar-image"); // Присваиваем класс для стилизации (если требуется)
    imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
    avatarUrlDiv.appendChild(imageDiv); // Добавляем созданный div внутрь элемента .avatar_url
 
    console.log(data)
     }else {
        let noGefundenavatarUrlDiv = document.querySelector(".avatar_url");
        let noGefundenDiv = document.createElement ("div");
        noGefundenDiv.innerText = "LOGIN not GefundenDiv";
        console.log("adawdawd")
        noGefundenDiv.classList.add("oGefundenDiv");
        noGefundenavatarUrlDiv.appendChild(noGefundenDiv);
        
    }}
 } 
}





