let options= document.getElementById('options')
let qs= document.getElementById('question')
let score=document.getElementById('answer')



let questions= [
  { q: "blank",
  answer: {
      a: `blank`,
      b: `blank`,
      c: `blank`,
      d: `blank`,
  }, 

  rightAnswer: `a`
  } ,
  { q: "blank",
  answer: {
      a: `blank`,
      b: `blank`,
      c: `blank`,
      d: `blank`,
  }, 

  rightAnswer: `a`
  } ,
 { q: "Which symbol is commonly associated with JQueery?",
    answer: {
        a: `&`,
        b: `£`,
        c: `$`,
        d: `%`,
    }, 

    rightAnswer: `c`
    } ,
    { q: "Which tag would you use to input Javascript directly into and HTML page?",
    answer: {
        a: `<javascript>`,
        b: `<script>`,
        c: `<js>`,
        d: `<JavaScript>`,
    }, 

    rightAnswer: `b`
    } ,
    { q: "Which of these data types does NOT exist in Javascript?",
    answer: {
        a: `Boolean`,
        b: `Null`,
        c: `Object`,
        d: `Unidentified`,
    }, 

    rightAnswer: `d`
    } ,
    { q: "What does push() do in Javascript?",
    answer: {
        a: `adds an item into an array`,
        b: `adds the values in an array together`,
        c: `pushes an item to another page`,
        d: `displays your local storage on the live serve html page`,
    }, 

    rightAnswer: `a`
    } ,
    { q: "Which of the following cannot be used for variable declaration Javascript?",
    answer: {
        a: `for`,
        b: `let`,
        c: `const`,
        d: `var`,
    }, 

    rightAnswer: `a`
    } ,
    { q: "What type of popup box is NOT available in Javascript?",
    answer: {
        a: `Prompt`,
        b: `Confirm`,
        c: `Question`,
        d: `Alert`,
    }, 

    rightAnswer: `c`
    } ,
    { q: "You Have FINISHED!!",
    answer: {
        a: `Thank`,
        b: `You`,
        c: `for`,
        d: `Playing!`,
    }, 

    rightAnswer: `c`
    } ,
]




//btn.addEventListener("click", displayQuestions);
//btn.addEventListener("click", 
function removing(){
  window.localStorage.removeItem("debug")

window.localStorage.removeItem("b")
}


let x=0
var i=2
function counting() {
    var sec = 31;
    function count() {
     
      var counter = document.getElementById("countdown");
      sec--;
      counter.innerHTML =
        "0:" + (sec < 10 ? "0" : "") + String(sec);
      if (sec > 0) {
        setTimeout(count, 1000);
        setInterval(function(){
        let clicked= localStorage.getItem("b")
    
console.log(i)

      if(i>8){
        sec=0
      
      }
        if (clicked!==null && clicked!==questions[i-2].rightAnswer){
         
          sec=sec-5
          
          window.localStorage.removeItem("b")}
        else if (clicked==questions[i-2].rightAnswer){
          sec=sec
          

        }
         
           },100)
      } else if (sec<1) {
       alert("Finished!");
       score.append(window.localStorage.getItem("correct answer"))
       $('#myModal').modal(options)
      removing()
      }
    }
    count();
  }
  counting();


var qtitle = document.createElement('p')

var qopt1= document.createElement('button')
var qopt2= document.createElement('button')
var qopt3 =document.createElement('button')
var qopt4 =document.createElement('button')

qopt1.addEventListener("click", displayQuestions)
qopt2.addEventListener("click", displayQuestions)
qopt3.addEventListener("click", displayQuestions)
qopt4.addEventListener("click", displayQuestions)

qopt1.classList.add("a")
qopt2.classList.add("b")
qopt3.classList.add("c")
qopt4.classList.add("d")

qopt1.addEventListener("click",setLocalStorage1)
qopt2.addEventListener("click",setLocalStorage2)
qopt3.addEventListener("click", setLocalStorage3)
qopt4.addEventListener("click", setLocalStorage4)

function displayQuestions() {

if(i<9){

        var opt= questions[i].answer
        let quest= questions[i].q
        qtitle.textContent=quest 
        qopt1.textContent= opt.a
        qopt2.textContent= opt.b
        qopt3.textContent= opt.c
        qopt4.textContent= opt.d
        qs.append(qtitle)
        options.append(qopt1)
        options.append(qopt2)
        options.append(qopt3)
        options.append(qopt4)
        i=i+1   

}
}
 
   
displayQuestions()


let right =document.getElementById("right")


function setLocalStorage1(){
  window.localStorage.setItem("b", "a")

  if ('a'==questions[i-2].rightAnswer){
  correct_answers = Number(localStorage.getItem("correct answer"))
  localStorage.setItem("correct answer", correct_answers+1)
right.textContent="Correct"}
else right.textContent="Wrong"
}

function setLocalStorage2(){
  window.localStorage.setItem("b", "b")
  if ('b'==questions[i-2].rightAnswer){
    correct_answers = Number(localStorage.getItem("correct answer"))
    localStorage.setItem("correct answer", correct_answers+1)
    right.textContent="Correct"}
    else right.textContent="Wrong"
}

function setLocalStorage3(){
  window.localStorage.setItem("b", "c")

  if ('c'==questions[i-2].rightAnswer){
    correct_answers = Number(localStorage.getItem("correct answer"))
    localStorage.setItem("correct answer", correct_answers+1)
    right.textContent="Correct"}
    else right.textContent="Wrong"
}

function setLocalStorage4(){
  window.localStorage.setItem("b", "d")
  if ('d'==questions[i-2].rightAnswer){
    correct_answers = Number(localStorage.getItem("correct answer"))
    localStorage.setItem("correct answer", correct_answers+1)
    right.textContent="Correct"}
    else right.textContent="Wrong"
}


localStorage.setItem("correct answer", x)







function set (){
 
  let previous= window.localStorage.getItem("correct answer")
let username= document.getElementById("username").value

 window.localStorage.setItem(username, previous)
}

let saveBttn=document.getElementById("saveBttn")
saveBttn.addEventListener("click", set )

  


