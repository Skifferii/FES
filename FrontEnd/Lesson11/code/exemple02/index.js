

const arrA = ["a","b","c"];

const arrAo = {
   0: "a",
   1: "b",
   2: "n",
}

console.log(arrA[0]);
console.log(arrAo[0]);







console.log("--------OBJEKT METODSS-------------------");
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
   //  keys: function() {
   //    console.log(" i reaaddd d")
   // },
 }
 console.log(kinderA.nachname +" "+kinderA.name);
 console.log("-----------------------------------------------------");


 console.log(kinderA.nachname +" "+kinderA.name);
 console.log("-----------------------------------------------------");
 console.log("-----------------------------------------------------");

console.log (Object.keys(kinderA));
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log (Object.values(kinderA))
console.log("-----------------------------------------------------");
for (let key in kinderA) {
   console.log(kinderA[key]);
}
console.log("-----------------------------------------------------");
const array = Object.keys(kinderA);
for (let i = 0; i < array.length; i++) {
    console.log(kinderA[array[i]]);
 }
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

kinderA.height = kinderA.height+12;

console.log (Object.values(kinderA));
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
kinderA.height = "Visokiy  112";
// * dobavim novoe znqachenie
kinderA.MotherName = "Sara";
//udalayem
delete kinderA.weight;
console.log (Object.values(kinderA));
console.log("-----------------------------------------------------");