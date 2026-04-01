let timerState = false;
let time = 60;
const timer = document.getElementById("timer");
const input = document.getElementById("input")

const languages = ["en", "fr", "ger"];
let dictionaryLanguage = languages[1];
let inputLanguage = languages[2];

document.addEventListener("click", function(e){
    if(e.target.classList.contains("submit")){
        console.log("submit")
    }

    if(e.target.classList.contains("timer")){
        startStop();
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