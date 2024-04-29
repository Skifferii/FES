const button = document.querySelector(".button")
const city = document.querySelector("#input_city")

button.addEventListener('click', recordNewcity);
city.addEventListener('keypress', event => event.keyCode === 13 && recordNewcity());
function recordNewcity()

{
    let newcity;
    newcity = city.value.trim(); 
     if (newcity) 
     {  
const url = "http://api.weatherapi.com/v1/current.json?key=ef3b4a40dd54446ea49160325242904&q="+city.value+"&aqi=no"  // name    
let dataResponse;
const getData = async (api) => {
    const serverResponse = await fetch(api)
    dataResponse = await serverResponse.json()
    dataWork(dataResponse)
    console.log(dataResponse)
}

getData(url)
function dataWork(data){
    if (data.location)
     {

    let getData = new Date(data.current.last_updated)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const day = days[getData.getDay()-1]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthNames[getData.getMonth()];
    let dateHeaderDiv = document.querySelector(".date");
    dateHeaderDiv.innerText = day+"."+ " " + month + " " + getData.getDate();
     
    
    
    let city = document.querySelector(".city");  // Находим элемент с классом .city
    city.innerText = " " + data.location.name + " " + data.location.region;
    // nameDiv.classList.add("city");  // Присваиваем класс для стилизации
    
       
    let imageDiv = document.querySelector(".image");
    let image = document.createElement("img");  // Создаем элемент изображения
    document.querySelector(".image").innerHTML = "";
    image.src = data.current.condition.icon;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.city                               
    // imageDiv.classList.add("cloudy-image"); // Присваиваем класс для стилизации (если требуется)
    imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
    

    let cloudyDiv = document.querySelector("#clody")
    cloudyDiv.innerText = "" + data.current.condition.text;

    let currentTempC = document.querySelector("#temp")
    currentTempC.innerText = "" + data.current.temp_c;

     }else {
        console.log("notGefunden") 
        let notGefunden = document.querySelector(".city");  // Находим элемент с классом .city
        notGefunden.innerText = "City not finden ";      
        let noImageDiv = document.querySelector(".image");
        let noImage = document.createElement("img");  // Создаем элемент изображения
        document.querySelector(".image").innerHTML = "";       
        let noCloudyDiv = document.querySelector("#clody")
        noCloudyDiv.innerText = "-----";
        let noCurrentTempC = document.querySelector("#temp")
        noCurrentTempC.innerText = "--";
    }}
 } 
}





