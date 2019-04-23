var panel = $("#quiz-area");

var countStartNumber = 30;

//Question Set
var questions = [

    {
        question: "In the first movie of Harry Potter, which house did Harry choose?"
        answers: ["Hufflepuff", "Slytherin", "Ravenvclaw", "Gryffindor"],
        correctAnswer: "Gryffindor",
        image: assets\harry potter gif.jpg
    },

    {
        question: "Who was the voice of Woody in the movie Toy Story?"
        answers: ["Tom Hanks", "Tim Allen", "John Morris", "Annie Potts"],
        correctAnswer: "Tom Hanks"
        image: assets\toy story gif.jpg
    }

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
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
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

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + question[this.currentQuestion].correctAnswer);
        panel.append("<img src=''" + questions[this.currentQuestion].image);

        if (game.currentQuestion === questions.length -1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else{
            setTimeout(game.nextQuestion, 3 * 1000);
        }
        
    },
    
    results: function() {

        clearInterval(timer);

        panel.html("<h2>All done, here's how you did!</h2>");

        $("counter-number").html(game.counter);

        panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (question.length -(game.correct + game.incorrect)) + "</h3>");
        panel.append("<br><button id='start-over'>Start Over?</button>");
    },

}