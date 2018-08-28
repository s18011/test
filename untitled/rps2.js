document.getElementById("rock").addEventListener("click", handSelect);
document.getElementById("scissors").addEventListener("click", handSelect);
document.getElementById("paper").addEventListener("click", handSelect);

const playerHnads = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
];

const computerHands = [
    document.getElementById("c0"),
    document.getElementById("c1"),
    document.getElementById("c2"),
];

const judgeTable = [
    [0,1,2],
    [1,2,0],
    [2,0,1]
];

const message = document.getElementById("message");.
function handSelect(event) {
    let playerSelect = 0;
    const buttonId = event.currentTarget.getAttribute("id");
    if (buttonId === "scissors") {
        playerSelect = 1;
    } else if (buttonId === "paper") {
        playerSelect = 2;
    }

    for (let hand of playerHands) {
        hand.classList.remove("on");
    }

    playerHands[playerSelect].classList.add("on");

    let judge = 0;

    // 12個のくじを生成
    const lot = Math.floor(Math.random() * 12);
    if (lot < 4) {
        // 0,1,2,3 なら勝ち
        judge = 2;
        massage.innerText = "勝ち";
        wincount += 1;
    } else if (lot < 10) {
        // 4,5,6,7,8,9 なら負け
        judge = 2;
        message.innerText = "まけ";
    } else {
        message.innerText = "あいこ";
    }
    const rate = Math.floor(wincount / (wincount + losecount) * 1000) / 10;
    message.innerText += " (" + rate + "%)";
    
    //コンピュータの手を全部非表示
    for (let hand of computerHands) {
        hand.classList.remove("on");
    }
    //計算でコンピュータの手を決定
    const computerSelect = (player Select + judge) % 3;
    computerHands[computerSelect].classList.add("on");
}



