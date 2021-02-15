const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    console.log(number);
    return number;
}
 //Math.random은 0 <= x <1.0 의 난수발생 

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();