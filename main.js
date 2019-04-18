var panel = $("#quiz-area");

var countStartNumber = 30;

//Question Set
var questions = [

    {
        question: "In the first movie of Harry Potter, which house did Harry choose?"
        answers: ["Hufflepuff", "Slytherin", "Ravenvclaw", "Gryffindor"],
        correctAnswer: "Gryffindor",
        image: 
    },

    {
        question: "Who was the voice of Woody in the movie Toy Story?"
        answers: ["Tom Hanks", "Tim Allen", "John Morris", "Annie Potts"],
        correctAnswer: "Tom Hanks"
        image: 
    },

] 

//Variable to hold out setInterval
var timer; 

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("STOP");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setIneterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length, i++);
        {
            panel.append("<button class= 'answer-button' id='button' data-name=''" + questions[this.currentQuestion].answers[i] + 
            "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },
    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html (game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function(){

    }

}