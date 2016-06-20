'use strict';

new Vue({

  el: '#main-container',
  data: {
    'isQuizActive': true,
    'isQuizFinished': false,
    'current': 0,
    'score' : 0,
    'quiz' : hpQuiz
  },

  methods: {

    nextQuestion: function () {
      if(this.quiz[this.current].isAnswered){
        if(this.current < this.quiz.length -1) {
          this.current += 1
        }else{
          this.quizFinished()
        }
      }
    },

    quizFinished: function () {
      this.isQuizActive = false;
      this.isQuizFinished = true;
    },

    selectAnswer: function(event) {
      var element = event.target;
      var question = this.quiz[this.current];

      if(!question.isAnswered)
        if(parseInt(element.getAttribute('for')) === question.answer){
          element.className = "correct"
        }else {
          element.className = "incorrect"
          this.score += 1;
        }

        question.isAnswered = true;

    },

    finalScore: function() {
     return this.quiz.length - this.score + "/" + this.quiz.length
    }
  }
});