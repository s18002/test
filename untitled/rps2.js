document.getElementById("rock").addEventListener("click", handSelect);
document.getElementById("scissors").addEventListener("click", handSelect);
document.getElementById("paper").addEventListener("click", handSelect);

const playerHands = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
];

const computerHands = [
    document.getElementById("c0"),
    document.getElementById("c1"),
    document.getElementById("c2"),
];

const message = document.getElementById("message");

let winCount = 0;
let loseCount = 0;

function handSelect(event) {
    let playerSelect = 0;
    const buttonId = event.currentTarget.getAttribute("id");
    if (buttonId === "scissors") {
        playerSelect = 1;
    } else if (buttonId === "paper") {
        playerSelect = 2;
    }

    for (let h of playerHands) {
        h.classList.remove("on");
    }
    playerHands[playerSelect].classList.add("on");

    const lot = Math.floor(Math.random() * 12);
    if (lot < 4) {
        judge = 1;
        message.innerText = "かち";
    } else if (lot < 10) {
        judge = 2;
        message.innerText = "まけ";
    } else {
        message.innerText = "あいこ";
    }

    for (let hand of computerHands) {
        hand.classList.remove("on");
    }
    const computerSelect = (playerSelect + hudge) % 3;
    computerHands[computerSelect].classList.add("on");
}