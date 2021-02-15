const API_KEY="8b0da1e4cd850a73371dcdaa48974523";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");


function getWeather(lat, lon){
    //API호출후 데이터 받기위해 fetch함수 이용
    fetch( 
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){ //then 통해 데이터가 들어온 이후(fetch이후) 함수 실행 
        return response.json(); 
    }).then(function(json){ //response.json이 정상적으로 return된 이후 함수 실행
       const temperature = json.main.temp;
       const place = json.name;
       weather.innerText = `${temperature} @ ${place}`;
    }); 
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//좌표 가져오는 함수
function handleGeoSucces(position){
    //위도
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      /*
        latitude : latitude,
        longitude : longitude
        */
       latitude,
       longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
    
}
function loadCoords(){
    const loadedCords  = localStorage.getItem(COORDS);

    if(loadedCords === null){
       
        askForCoords(); //좌표 요청 함수
    }else{
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();