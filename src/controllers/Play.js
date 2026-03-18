import getUserNum from '../models/UserNum.js'
import whatIsResult from '../views/printResult.js'
import pickRandomThreeNum from '../models/PickThreeNum.js';
export default play

let ComNum = pickRandomThreeNum();

function Restart(){
    ComNum=pickRandomThreeNum();
    document.getElementById('game-restart-button').style.display='none';
    document.getElementById("result").innerText=' ';
}

function play() {
    const UserNum = getUserNum();
    if (!UserNum) return;
    let CountBall = 0;
    let CountStrike=0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            CountBall=CountBall+isBall(ComNum,UserNum,i,j);
            CountStrike=CountStrike+isStrike(ComNum,UserNum,i,j);
        }
    }
    whatIsResult(CountBall,CountStrike);
}
function isBall(ComNum, UserNum, i, j) {
    let CountBall=0;
    if (ComNum[i] == UserNum[j] && i != j) {
        CountBall++;
    }
    return CountBall;
}
function isStrike(ComNum, UserNum, i, j){
    let CountStrike=0;
    if (ComNum[i] == UserNum[j] && i == j) {
        CountStrike++;
    }
    return CountStrike;
}

document.getElementById("submit").onclick = play;
document.getElementById("game-restart-button").onclick=Restart