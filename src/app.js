import Restart from './controllers/Restart.js'
import play from './controllers/Play.js'
alert("연동중");
// const ComNum = pickRandomThreeNum();
document.getElementById("submit").onclick = play;
document.getElementById("game-restart-button").onclick=Restart