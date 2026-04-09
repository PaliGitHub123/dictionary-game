// Eigene sentencer-Implementierung
const sentencer = {
    make: function(template) {
        const nouns = ['apple', 'dog', 'tree', 'house', 'car', 'book', 'phone', 'computer', 'table', 'chair', 'water', 'flower', 'mountain', 'river', 'star', 'moon', 'sun', 'cloud', 'wind', 'rain'];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        return template.replace('{{ noun }}', randomNoun);
    }
};

let timerState = false;
let time = 60;
const timer = document.getElementById("timer");
const input = document.getElementById("input");
const dictionarySelect = document.getElementById("dictionary-language");
const inputSelect = document.getElementById("input-language");
const dictionaryWord = document.getElementById("dictionary-word");
dictionaryWord.innerHTML = sentencer.make("{{ noun }}");

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