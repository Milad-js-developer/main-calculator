const prints = document.querySelectorAll(".show");
const displaybox = document.querySelector(".displayBox");
const clearAll = document.querySelector(".clearAll").addEventListener("click", allClears);
const clearLast = document.querySelector(".clearLast").addEventListener("click", lastClears);
const calc = document.querySelector(".calcs").addEventListener('click', calcs);

let x;

prints.forEach(item => {
    item.addEventListener("click", print);
})
function print(event) {
    event.preventDefault();
    x = event.target.innerText;
    if(displaybox.value == 0) {
        return displaybox.value = x;
    }
    return displaybox.value += x;
}


function allClears() {
    displaybox.value = 0;
}


function lastClears() {
    let txt = displaybox.value;
    displaybox.value = txt.substring(0, txt.length -1);
    if(displaybox.value.length == 0) {
        displaybox.value = 0;
    }
}


function calcs() {
    let result = displaybox.value;
    displaybox.value = eval(result);
}