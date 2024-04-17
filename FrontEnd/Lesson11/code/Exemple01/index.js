// function name (a,b) {
//     const/let =
// }
// const name = function(a,b) {

// }

// const name = (a,b) => {

// }

// let y = 5;
// let x = 5;
// name (y,x);
 const arrA = ["a", "b", "x"];
 console.log(arrA);

 console.log("-----------------------------------------------------");
 console.log("-----------------------------------------------------");

 //abjects
 const objA = {
    param1 :"a",
    param2 :"b",
    param3 :"x",
 }
 console.log(objA);

 console.log("-----------------------------------------------------");
 console.log("-----------------------------------------------------");

 const carB = {
    doors : 4,
    wheels : 4,
    engine : 2000,
    weight :1750
 }

 const footboolPlayarJon = {
    height : 170,
    weight : 80,
    result: 7.5,
    goal: function() {
        console.log ("i make goal")
    },
    number: function () {
        return 5;
    }
 }
 console.log(footboolPlayarJon.result);
 console.log(footboolPlayarJon["height"]);
 console.log("-----------------------------------------------------");
 footboolPlayarJon.goal();
 console.log("-----------------------------------------------------");



 let randomNum= Math.random();
 let numberFromJophn = footboolPlayarJon.number();
 console.log (numberFromJophn);

 console.log("-----------------------------------------------------");
 console.log("-----------------------------------------------------");


 console.log("-----------------------------------------------------");
 const kinderA = {
    name: "Andreas",
    nachname: "Pupkin",
    height: 105,
    weight : 12,
    geburstDatum: function(){
    console.log ("19.05.2020")},
    schrank: function() {
        console.log ("Bär gruppe")
    }, 
 }
 console.log(kinderA.nachname +" "+kinderA.name);
 console.log("-----------------------------------------------------");