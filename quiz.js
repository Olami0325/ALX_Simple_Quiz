document.addEventListener('DOMContentLoaded', function (){

    const submitBtn = document.getElementById('submit-answer');

    function checkAnswer(){

        const correctAnswer = "4";
        const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

        if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done."
        }else{
        document.getElementById('feedback').textContent = "That's incorrect. Try again!."
        }

  }
        submitBtn.addEventListener('click', checkAnswer);
})

