// Questions and answers array
const quizQuestions = [
    {
        question: "How often do you feel confident during public speaking events?",
        answers: [
            { text: "Never", value: 1 },
            { text: "Sometimes", value: 2 },
            { text: "Always", value: 3 }
        ]
    },
    {
        question: "Can you adapt your communication style according to the audience?",
        answers: [
            { text: "No", value: 1 },
            { text: "Sometimes", value: 2 },
            { text: "Yes", value: 3 }
        ]
    },
    {
        question: "Do you use body language to enhance your message?",
        answers: [
            { text: "Rarely", value: 1 },
            { text: "Occasionally", value: 2 },
            { text: "Frequently", value: 3 }
        ]
    },
    // Add more questions as needed
    // {
    //     question: "New question here?",
    //     answers: [
    //         { text: "Option 1", value: 1 },
    //         { text: "Option 2", value: 2 },
    //         { text: "Option 3", value: 3 }
    //     ]
    // }
    
];

// Function to generate the quiz dynamically
function generateQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("quiz-question");

        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionText);

        question.answers.forEach((answer, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index}`;
            input.value = answer.value;
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer.text));
            questionElement.appendChild(label);
            questionElement.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionElement);
    });
}

// Handle quiz submission
document.getElementById("submitQuiz").addEventListener("click", function() {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer) {
            score += parseInt(selectedAnswer.value);
        }
    });

    const resultText = `Your Advanced Communication Skills Score: ${score}`;
    const resultDiv = document.getElementById("quizResult");
    resultDiv.innerText = resultText;
    resultDiv.style.display = "block"; // Show result

  // Display message if score is below 4
  if (score < 4) {
    const encouragementMessage = document.createElement("p");
    encouragementMessage.textContent = "Let’s work on those communication skills! 😅";
    resultDiv.appendChild(encouragementMessage);
}

// Display message if score is greater than 4
else if (score > 4) {
    const masteryMessage = document.createElement("p");
    masteryMessage.textContent = "You’re a Communication Master! 🎉";
    resultDiv.appendChild(masteryMessage);
}

    // Optionally hide quiz after submission
    document.querySelector(".quiz-section").style.display = "none";
});


// Generate quiz when the page loads
window.onload = generateQuiz;
