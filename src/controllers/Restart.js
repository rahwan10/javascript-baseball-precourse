import pickRandomThreeNum from '../models/PickThreeNum.js'
export default Restart
function Restart(){
    ComNum=pickRandomThreeNum();
    document.getElementById('game-restart-button').style.display='none';
    document.getElementById("result").innerText=' ';
    return ComNum;
}