let score = 0;
let autoclicker = 0;
let power = 1;

const scoreboard = document.getElementById("scoreboard");
const button = document.getElementById("click");
const resetbtn = document.getElementById("reset");
const shopbtn = document.getElementById("shop");
const autobtn = document.getElementById("auto");


button.addEventListener("click", () => {
    score += power;
    scoreboard.textContent = score;
});

resetbtn.addEventListener("click", () => {
    score = 0;
    autoclicker = 0;
    power = 1;
    scoreboard.textContent = score;
});

shopbtn.addEventListener("click", () => {
    if (score >= 10) {
        score -= 10;
        power++;
        scoreboard.textContent = score;
    } else{
        alert("You don't have enough points to buy this!");
    }
});

autobtn.addEventListener("click", () =>{
    if(score >= 20){
        score -= 20;
        autoclicker++;
        scoreboard.textContent = score;
    } else{
        alert("You don't have enough points to buy this!");
    }
});

setInterval(() =>{
    score+=autoclicker;
    scoreboard.textContent = score;
}, 1000);