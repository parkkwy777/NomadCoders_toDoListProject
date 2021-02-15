const form  = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN="showing"; //클래스 이름.

function paintGreeting(text){
    //유저가 있을 경우 입력 받을 필요 없기 때문에 SHOWING_CN이라는 클레스 이름을 지운다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}
function saveName(text){
    localStorage.setItem(USER_LS,text);
}

//Submit 이벤트 동작 막기
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}


function loadName(){
    const currentUser= localStorage.getItem(USER_LS);

    if(currentUser==null){
            // 유저 없는경우 
            askForName();
            console.log(USER_LS);
    }else{
            // 유저 있는경우
        paintGreeting(currentUser);
        console.log("?");
    }
}

function init(){
    loadName();
}

init();