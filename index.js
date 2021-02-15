console.log("나는 성공한다.");
/*
const wat = true;
*/

//Array , object 

/*
const daysOfWeek=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(daysOfWeek);

const nicoInfo ={
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome : true,

    favMovies:["oldboy","ironMen"],

    favBooke:[
         {
             bookeName:"12가지 인생법칙",
             bookePrice:"18000원"
         },
         {
            bookeName:"Grit",
            bookePrice:"15000원"
         }
    ]
}

console.log(nicoInfo.gender);
nicoInfo.gender = "Female";
console.log(nicoInfo.gender);
console.log(nicoInfo.favBooke[1]);


function sayHello(name){
    console.log("Hello!");
    console.log(`Hello ${name} you are...`);
}

sayHello("park");

*/

/*
const calculator = {

    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multiplication: function(a,b){
        return a*b;
    },
    division: function(a,b){
        return a/b;
    }
}

const su = calculator.plus(3,5);
console.log(su);
*/

//const title= document.getElementById("title");
const title= document.querySelector("#title");
title.innerHTML="doaspofsaopfas";
console.dir(title);

//자바스크립트는 이벤트를 처리하기위해 만들어졌다.

function handleReSize(event){
    console.log(event);
}
function handleClick(){
    title.style.color="blue";
}
function handleOffline(){
    console.log("byebye");
}
window.addEventListener("resize",handleReSize);
window.addEventListener("click",handleClick);
window.addEventListener("offline",handleOffline);

