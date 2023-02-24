let options= document.getElementById('options')
let qs= document.getElementById('question')


let questions= [
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
    { q: "blank",
    answer: {
        a: `blank`,
        b: `blank`,
        c: `blank`,
        d: `blank`,
    }, 

    rightAnswer: `a`
    } ,
]

//btn.addEventListener("click", displayQuestions);
//btn.addEventListener("click", 

var i=0


var qtitle = document.createElement('p')

var qopt1= document.createElement('button')
var qopt2= document.createElement('button')
var qopt3 =document.createElement('button')
var qopt4 =document.createElement('button')

qopt1.addEventListener("click", displayQuestions)
qopt2.addEventListener("click", displayQuestions)
qopt3.addEventListener("click", displayQuestions)
qopt4.addEventListener("click", displayQuestions)

qopt1.classList.add("Hello")
qopt2.classList.add("Hello")
qopt3.classList.add("Hello")
qopt4.classList.add("Hello")

qopt1.addEventListener("click",setLocalStorage1)
qopt2.addEventListener("click",setLocalStorage2)
qopt3.addEventListener("click", setLocalStorage3)
qopt4.addEventListener("click", setLocalStorage4)

function displayQuestions() {

if(i<6){

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

} else{
    myFunction()
}
}
 
   
displayQuestions()

let one= 0
let two=0
let three=0
let four=0

window.localStorage.setItem("Question 1 answer: ", one)
window.localStorage.setItem("Question 2 answer: ", two)
window.localStorage.setItem("Question 3 answer: ", three)
window.localStorage.setItem("Question 4 answer: ", four)


function setLocalStorage1(){
  window.localStorage.setItem("Question 1 answer: ", one+=1)
}

function setLocalStorage2(){
  window.localStorage.setItem("Question 2 answer: ", two+=1)
}

function setLocalStorage3(){
  window.localStorage.setItem("Question 3 answer: ", three+=1)
}

function setLocalStorage4(){
  window.localStorage.setItem("Question 4 answer: ", four+=1)
}

function counting() {
    var sec = 31;
    function count() {
      var counter = document.getElementById("countdown");
      sec--;
      counter.innerHTML =
        "0:" + (sec < 10 ? "0" : "") + String(sec);
      if (sec > 0) {
        setTimeout(count, 1000);
      } else if (sec<1) {
       alert("You're out of time!");
       $('#myModal').modal(options)
      
      } else if (questions.answer!==questions.rightAnswer) {
        console.log(`hello`)
      }
    }
    count();
  }
  counting();


  

  



