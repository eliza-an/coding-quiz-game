//let clearr= document.getElementById("clearr")

//clearr.addEventListener("click", window.localStorage.clear)
function clearr() {
    window.localStorage.clear();
   
  }

let items = { ...localStorage }

window.localStorage.removeItem("debug")
window.localStorage.removeItem("correct answer")

 let keys =Object.keys(window.localStorage)
for (i=0; i<keys.length && i <4; i++){
var litem= document.createElement("li")
litem.textContent = keys[i] + "   " + window.localStorage.getItem(keys[i])
let highscores=document.getElementById("highscores")
highscores.append(litem)


}

