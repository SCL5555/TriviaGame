
$(document).ready(function() { 


var correctAnswers = 0;
var inCorrectAnswers = 0;
var unanswered = 0;
var seconds = 25;
var intervalId;
var answerRadio1;
var answerRadio2;
var answerRadio3;
var answerRadio4;
var answerRadio5;



var questions = {

	question1: {
		question: "Who is Kim Kardashian's husband?",
		answers: ["David Letterman", "Kanye West", "Barack Obama", "Michael Jordan"],
		rightAnswer: ["q1a1", "q1a2", "q1a3", "q1a4"]
	},

	question2: {
		question: "How many kardashian sisters are there?",
		answers: ["5", "2", "4", "3"],
		rightAnswer: ["q2a1", "q2a2", "q2a3", "q2a4"]
	},

	question3: {
		question: "How many Kardashian brothers are there?",
		answers: ["0", "2", "4", "1"],
		rightAnswer: ["q3a1", "q3a2", "q3a3", "q3a4"]
	},

	question4: {
		question: "How many of the sisters are currently pregnant?",
		answers: ["2", "who cares", "0", "1"],
		rightAnswer: ["q4a1", "q4a2", "q4a3", "q4a4"]
	},

	question5: {
		question: "Where does Khloe live?",
		answers: ["Calabasas", "Cleveland", "Chicago", "Cincinnati"],
		rightAnswer: ["q5a1", "q5a2", "q5a3", "q5a4"]
	}
};




function loadQuestions(){
	$(".quizContentArea").append("<p>" + questions.question1.question + "</p>");
	
	for(var i=0; i < questions.question1.answers.length; i++){
		answerRadio1 = $(".quizContentArea").append("<br /> <input type='radio' name = 'radio1' value=" + questions.question1.answers[i] + " id=" + questions.question1.rightAnswer[i] + ">");
		answerRadio1.append(questions.question1.answers[i]);

		$(".quizContentArea").append(answerRadio1);
	}

	$(".quizContentArea").append("<hr><p>" + questions.question2.question + "</p>");
	
	for(var i=0; i < questions.question2.answers.length; i++){
		answerRadio2 = $(".quizContentArea").append("<br /> <input type='radio' name = 'radio2' value=" + questions.question2.answers[i] + " id=" + questions.question2.rightAnswer[i] + ">");
		answerRadio2.append(questions.question2.answers[i]);
	}

	$(".quizContentArea").append("<hr><p>" + questions.question3.question + "</p>");
	
	for(var i=0; i < questions.question3.answers.length; i++){
		answerRadio3 = $(".quizContentArea").append("<br /> <input type='radio' name= 'radio3' value=" + questions.question3.answers[i] + " id=" + questions.question3.rightAnswer[i] + ">");
		answerRadio3.append(questions.question3.answers[i]);
	}

	$(".quizContentArea").append("<hr><p>" + questions.question4.question + "</p>");
	
	for(var i=0; i < questions.question4.answers.length; i++){
		answerRadio4 = $(".quizContentArea").append("<br /> <input type='radio' name = 'radio4' value=" + questions.question4.answers[i] + " id=" + questions.question4.rightAnswer[i] + ">");
		answerRadio4.append(questions.question4.answers[i]);
	}

	$(".quizContentArea").append("<hr><p>" + questions.question5.question + "</p>");
	
	for(var i=0; i < questions.question5.answers.length; i++){
		answerRadio5 = $(".quizContentArea").append("<br /> <input type='radio' name = 'radio5' value=" + questions.question5.answers[i] + " id=" + questions.question5.rightAnswer[i] + ">");
		answerRadio5.append(questions.question5.answers[i]);
	}
}

function checkAnswer1(){
	if($("#q1a2").is(":checked")){
			correctAnswers++;
		}
		else if (!$("#q1a1").is(":checked") && !$("#q1a2").is(":checked") && !$("#q1a3").is(":checked") && !$("#q1a4").is(":checked")){
			unanswered++;
		}
		else{
			inCorrectAnswers++;
		}
}

function checkAnswer2(){
	if($("#q2a1").is(":checked")){
			correctAnswers++;
		}
		else if (!$("#q2a1").is(":checked") && !$("#q2a2").is(":checked") && !$("#q2a3").is(":checked") && !$("#q2a4").is(":checked")){
			unanswered++;
		}
		else{
			inCorrectAnswers++;
		}
}

function checkAnswer3(){
	if($("#q3a4").is(":checked")){
			correctAnswers++;
		}
		else if (!$("#q3a1").is(":checked") && !$("#q3a2").is(":checked") && !$("#q3a3").is(":checked") && !$("#q3a4").is(":checked")){
			unanswered++;
		}
		else{
			inCorrectAnswers++;
		}
}

function checkAnswer4(){
	if($("#q4a2").is(":checked")){
			correctAnswers++;
		}
		else if (!$("#q4a1").is(":checked") && !$("#q4a2").is(":checked") && !$("#q4a3").is(":checked") && !$("#q4a4").is(":checked")){
			unanswered++;
		}
		else{
			inCorrectAnswers++;
		}
}

function checkAnswer5(){
	if($("#q5a2").is(":checked")){
			correctAnswers++;
		}
		else if (!$("#q5a1").is(":checked") && !$("#q5a2").is(":checked") && !$("#q5a3").is(":checked") && !$("#q5a4").is(":checked")){
			unanswered++;
		}
		else{
			inCorrectAnswers++;
		}
}

function gameOver(){
	$(".quizContentArea").empty();
	$(".quizContentArea").append("<p>Correct Answers: " + correctAnswers + "</p>");
	$(".quizContentArea").append("<p>Incorrect Answers: " + inCorrectAnswers + "</p>");
	$(".quizContentArea").append("<p>Unanswered Questions: " + unanswered + "</p>");
	$(".timerDisplay").html("<h1>Game Over!</h1>");
}

function countDown(){
	$(".timerDisplay").html("<h1>Time Remaining: " + seconds + " seconds left </h1>");
	seconds--;
	if (seconds>-1){

		setTimeout(countDown,1000);
	}
	else{
		
		checkAnswer1();
		checkAnswer2();
		checkAnswer3();
		checkAnswer4();
		checkAnswer5();
		gameOver();
	}
}

$("#start").on("click", function() {
	$("#start").remove();
	setTimeout(countDown,1000);
	setTimeout(loadQuestions, 1000);
});

});

