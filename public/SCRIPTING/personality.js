document.getElementById("quizButton").addEventListener("click", function() {
    const messages = [
      "You’re a Communication Master! 🎉",
      "You're good, but there's room for improvement. 👍",
      "Let’s work on those communication skills! 😅"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    document.getElementById("quizResult").innerHTML = randomMessage;
  });

  // Function to show the quiz when the button is clicked
document.getElementById("quizButton").addEventListener("click", function() {
  document.getElementById("quizSection").style.display = "block"; // Show the quiz
  document.getElementById("quizButton").style.display = "none";  // Hide the button
});

// Function to calculate and display the quiz result
document.getElementById("submitQuiz").addEventListener("click", function() {
  let score = 0;

  // Check answers for question 1
  let q1Answer = document.querySelector('input[name="q1"]:checked');
  if (q1Answer) {
      score += parseInt(q1Answer.value);
  }

  // Check answers for question 2
  let q2Answer = document.querySelector('input[name="q2"]:checked');
  if (q2Answer) {
      score += parseInt(q2Answer.value);
  }

  // Display the result
  let resultText = "Your Communication Skills Score: " + score;
  document.getElementById("quizResult").innerText = resultText;
  document.getElementById("quizResult").style.display = "block"; // Show the result
  document.getElementById("quizSection").style.display = "none"; // Hide the quiz
});
