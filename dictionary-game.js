let timerState = false;
let time = 60;
const timer = document.getElementById("timer");
const input = document.getElementById("input");
const dictionarySelect = document.getElementById("dictionary-language");
const inputSelect = document.getElementById("input-language");

let dictionaryLanguage;
let inputLanguage;

document.addEventListener("click", function(e){
    if(e.target.classList.contains("submit")){
        console.log("submit")
    }

    if(e.target.classList.contains("timer")){
        startStop();
    }

    if(e.target.classList.contains("switch-languages")){
        switchLangs();
    }
})

setInterval(
    function(){
        if(timerState == true){
            time -= 1;
            render();
        }
}, 1000);

function startStop(){
    if(!timerState){
        timerState = true;
    }else{
        timerState = false;
    }
}

function render(){
    timer.innerHTML = time + "s";
}

function getLangs(){
    dictionaryLanguage = dictionarySelect.value;
    inputLanguage = inputSelect.value;
}
getLangs();

function switchLangs(){
    getLangs();
    let x = dictionaryLanguage;
    dictionaryLanguage = inputLanguage;
    inputLanguage = x;
    dictionarySelect.value = dictionaryLanguage;
    inputSelect.value = inputLanguage;
    x = "";
    console.log(dictionaryLanguage, inputLanguage);
}