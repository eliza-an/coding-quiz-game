let questions= [
 { q: "Which symbol is commonly associated with JQueery?",
    answer: {
        a: `&`
        b: `£`
        c: `$`
        d: `%`
    }, 

    rightAnswer: `c`
    } 
    { q: "Which tag would you use to input Javascript directly into and HTML page?",
    answer: {
        a: `<javascript>`
        b: `<script>`
        c: `<js>`
        d: `<JavaScript>`
    }, 

    rightAnswer: `b`
    } 
    { question: "Which of these data types does NOT exist in Javascript?",
    answer: {
        a: `Boolean`
        b: `Null`
        c: `Object`
        d: `Unidentified`
    }, 

    rightAnswer: `d`
    } 
    { question: "What does push() do in Javascript?",
    answer: {
        a: `adds an item into an array`
        b: `adds the values in an array together`
        c: `pushes an item to another page`
        d: `displays your local storage on the live serve html page`
    }, 

    rightAnswer: `a`
    } 
    { question: "Which of the following cannot be used for variable declaration Javascript?",
    answer: {
        a: `for`
        b: `let`
        c: `const`
        d: `var`
    }, 

    rightAnswer: `a`
    } 
]

function createQuiz(qs, quizDiv, resultsDiv, submitBtn){

	function displayQuestions(qs, quizDiv){
		
	}

	function displayResults(qs, quizDiv, resultsDiv){
		
	}

	// display the qs
	displayQuestions(qs, quizDiv);

	// when user clicks submit, show results
	submitBtn.onclick = function(){
		displayResults(qs, quizDiv, resultsDiv);
	}
}