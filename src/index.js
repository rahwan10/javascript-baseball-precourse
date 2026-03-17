//컴퓨터 값뽑기 모델?
function pickRandomThreeNum() {
    let ComNum = new Array();
    
    let i = 0;
    while (i < 3) {
        let temp = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!isOverlap(ComNum, temp)) {
            ComNum[i] = temp;
            i++;
        }
    }
    alert(ComNum);

    return ComNum;

}
function isOverlap(ComNum, temp) {
    let Overlap = false;
    for (let j = 0; j < ComNum.length; j++) {
        if (temp == ComNum[j]) {
            Overlap = true;
        }
    }
    return Overlap;
}
//컴퓨터 값 뽑기 끝
//유저 값 받기 모델?
function getUserNum() {
    let UserNum = Array.from(document.getElementById("user-input").value);
    if (UserNum.length == 0) {
        alert("숫자를 적어주세요");
        return null;
    } else if (UserNum.length < 3 || UserNum.length > 3) {
        alert("숫자 3개를 붙여 적어주세요!");
        return null;
    }
    if (isDup(UserNum)) {
        alert("중복되지않는 숫자를 입력해주세요!");
        return null;
    }

    return UserNum;
}
function isDup(UserNum) {
    let Isdup = false
    for (let i = 0; i < UserNum.length; i++) {
        for (let j = i + 1; j < UserNum.length; j++) {
            Isdup = isSame(UserNum, i, j, Isdup);
        }
    }
    return Isdup;
}
//?
function isSame(UserNum, i, j, Isdup) {
    if (UserNum[i] == UserNum[j]) {
        return true;
    } else {
        return Isdup
    }
}
//유저값받기 끝

//판단하기 컨트롤?

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
//판단끝

//프린트하기 뷰?
function whatIsResult(CountBall,CountStrike){
    let text;
    let isAnswer=false;
    if(CountBall==0&&CountStrike==0){
        text="낫싱";
    }else if(CountStrike==3){
        text="정답을 맞추셨습니다!"
        isAnswer=true;
    }else if(CountStrike==0){
        text=CountBall+"볼";
    }else if(CountBall==0){
        text=CountStrike+"스트라이크";
    }else{
        text=CountBall+"볼"+CountStrike+"스트라이크";
    }
    printResult(text,isAnswer);
    
}
function printResult(text,isAnswer){
    const element=document.getElementById("result");
    element.innerText=text;
    if(isAnswer){
        document.getElementById('game-restart-button').style.display='block';
    }else{
        document.getElementById('game-restart-button').style.display='none';
    }
}

//프린트하기끝
//다시 시작하기
function Restart(){
    pickRandomThreeNum();
    document.getElementById('game-restart-button').style.display='none';

}
const ComNum = pickRandomThreeNum();
document.getElementById("submit").onclick = play;
document.getElementById("game-restart-button").onclick=Restart