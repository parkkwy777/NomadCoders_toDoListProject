const toDoForm =document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS= 'toDos'; //localstorage 변수 이름
let toDos = []; //해야할일 List
let idNumbers =1; // id값

function deleteToDo(event){
    console.dir(event.target);
    const btn =event.target; //click한 button 지정
    const li = btn.parentNode; //버튼의 부모 요소값
    const con=confirm("삭제하시겠습니까?");
    if(con===true){
        toDoList.removeChild(li);
    }

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //현재 선택한 li.id가 아닌 것만 필터로 배열 저장
    }); 
    
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    //localStorage는 자바스크립트 객체를 인식 못한다. (문자열로 바꿔야함)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    const newId = idNumbers;
    idNumbers+=1;

    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",deleteToDo); 
    span.innerText=text;

    li.id=newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    
    const toDoObj ={
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos!==null){
            console.log(loadToDos); //localstorage에서 확인하기위해 문자열로 바꾼 값
            const parsedToDos = JSON.parse(loadedToDos); // 자바스크립트에서 처리하기위해 json문자열 데이터를 object로 변환 
            console.log(parsedToDos);
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });
    }
}

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit);
    }

    init();