const COORDS = 'coords';

function handleGeoSucces(position){
    console.log(position);
}
function handleGeoError(){
    console.log("Cant access geo location");
}
function loadCoords(){
    const loadedCords  = localStorage.getItem(COORDS);

    if(loadCoords===null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){

}

init();