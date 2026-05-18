const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn = document.getElementById("btn");
const color = document.querySelector("span");

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.querySelector("div").style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}