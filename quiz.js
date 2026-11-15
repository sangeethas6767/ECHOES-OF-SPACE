
const moonQuestions = [
    {
        question: "1. Which mission first landed humans on the Moon?",
        options: ["Apollo 8", "Apollo 11", "Apollo 13", "Apollo 15"],
        answer: "Apollo 11",
        explanation: "Apollo 11 successfully landed humans on the Moon in July 1969."
    },
    {
        question: "2. Who was the first person to walk on the Moon?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
        answer: "Neil Armstrong",
        explanation: "Neil Armstrong became the first human to walk on the Moon."
    },
    {
        question: "3. What is the name of the vehicle used to travel on the lunar surface?",
        options: ["Lunar Roving Vehicle", "Mars Rover", "Space Shuttle", "Satellite"],
        answer: "Lunar Roving Vehicle",
        explanation: "The Lunar Roving Vehicle helped astronauts explore the Moon's surface."
    },
    {
        question: "4. What does ALSEP stand for?",
        options: [
            "Apollo Lunar Surface Experiments Package",
            "Advanced Lunar Space Equipment Program",
            "Apollo Landing Space Exploration Project",
            "Astronaut Lunar Science Equipment Program"
        ],
        answer: "Apollo Lunar Surface Experiments Package",
        explanation: "ALSEP was a collection of scientific instruments placed on the Moon during Apollo missions."
    },
    {
        question: "5. What is a lunar retroreflector used for?",
        options: [
            "Taking photographs",
            "Measuring the distance between Earth and Moon",
            "Producing oxygen",
            "Sending astronauts to Earth"
        ],
        answer: "Measuring the distance between Earth and Moon",
        explanation: "Laser retroreflectors help scientists measure the distance to the Moon very accurately."
    },
    {
        question: "6. Which spacecraft carried Neil Armstrong and Buzz Aldrin to the lunar surface?",
        options: ["Command Module", "Lunar Module Eagle", "Sputnik", "Voyager"],
        answer: "Lunar Module Eagle",
        explanation: "The Apollo 11 Lunar Module was named Eagle."
    },
    {
        question: "7. What happened to the Apollo Lunar Module descent stages?",
        options: [
            "They returned to Earth",
            "They were left on the Moon",
            "They travelled to Mars",
            "They were destroyed in space"
        ],
        answer: "They were left on the Moon",
        explanation: "The descent stages of Apollo Lunar Modules remain on the lunar surface."
    },
    {
        question: "8. What is the Moon's natural environment like?",
        options: [
            "Full of forests",
            "Covered with oceans",
            "Airless with extreme temperatures",
            "Full of rain"
        ],
        answer: "Airless with extreme temperatures",
        explanation: "The Moon has almost no atmosphere and experiences extreme temperature changes."
    },
    {
        question: "9. Which country successfully landed Chandrayaan-3 on the Moon?",
        options: ["Japan", "India", "France", "Germany"],
        answer: "India",
        explanation: "India's Chandrayaan-3 achieved a successful lunar landing in August 2023."
    },
    {
        question: "10. Why were scientific instruments left on the Moon?",
        options: [
            "For decoration",
            "To conduct scientific experiments",
            "To build houses",
            "To create artificial light"
        ],
        answer: "To conduct scientific experiments",
        explanation: "Scientific instruments were left behind to collect data about the Moon."
    }
];

const marsQuestions = [
    {
        question: "1. What is commonly known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Mercury"],
        answer: "Mars",
        explanation: "Mars is called the Red Planet because of iron-rich dust on its surface."
    },
    {
        question: "2. Which rover explored Mars after landing in 1997?",
        options: ["Curiosity", "Sojourner", "Perseverance", "Lunokhod"],
        answer: "Sojourner",
        explanation: "Sojourner was the first successful rover to operate on Mars."
    },
    {
        question: "3. Which mission carried the Sojourner rover?",
        options: ["Apollo 11", "Mars Pathfinder", "Chandrayaan-2", "Voyager 1"],
        answer: "Mars Pathfinder",
        explanation: "Mars Pathfinder delivered the Sojourner rover to Mars in 1997."
    },
    {
        question: "4. What is the main purpose of a Mars rover?",
        options: [
            "To study the Martian surface",
            "To carry humans to the Moon",
            "To produce sunlight",
            "To orbit Earth"
        ],
        answer: "To study the Martian surface",
        explanation: "Rovers examine rocks, soil and other features of Mars."
    },
    {
        question: "5. Which rover landed on Mars in February 2021?",
        options: ["Sojourner", "Spirit", "Perseverance", "Opportunity"],
        answer: "Perseverance",
        explanation: "NASA's Perseverance rover landed in Jezero Crater in February 2021."
    },
    {
        question: "6. What was the purpose of the airbags used by Mars Pathfinder?",
        options: [
            "To provide electricity",
            "To cushion the lander's landing",
            "To collect water",
            "To communicate with Earth"
        ],
        answer: "To cushion the lander's landing",
        explanation: "Airbags helped protect the lander during its impact with the Martian surface."
    },
    {
        question: "7. What is the largest volcano in the solar system, located on Mars?",
        options: ["Mount Everest", "Olympus Mons", "Mauna Loa", "Valles Marineris"],
        answer: "Olympus Mons",
        explanation: "Olympus Mons is a giant shield volcano on Mars."
    },
    {
        question: "8. Which space agency developed the Curiosity rover?",
        options: ["NASA", "ISRO", "ESA", "JAXA"],
        answer: "NASA",
        explanation: "NASA's Curiosity rover landed on Mars in August 2012."
    },
    {
        question: "9. What is the name of the large canyon system on Mars?",
        options: ["Grand Canyon", "Valles Marineris", "Olympus Valley", "Lunar Valley"],
        answer: "Valles Marineris",
        explanation: "Valles Marineris is an enormous canyon system on Mars."
    },
    {
        question: "10. Why do scientists study Mars?",
        options: [
            "To understand its geology and search for signs of ancient life",
            "To build a new Sun",
            "To replace Earth",
            "To study Earth's oceans"
        ],
        answer: "To understand its geology and search for signs of ancient life",
        explanation: "Mars research helps scientists understand the planet's history and whether it could once have supported microbial life."
    }
];

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let currentDestination = "";

const selectionPage = document.getElementById("selectionPage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const quizTitle = document.getElementById("quizTitle");
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("score");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

// Start the selected quiz
function startQuiz(destination) {
    currentDestination = destination;

    if (destination === "moon") {
        currentQuestions = moonQuestions;
        quizTitle.textContent = "🌕 Moon Exploration Quiz";
    } else {
        currentQuestions = marsQuestions;
        quizTitle.textContent = "🔴 Mars Exploration Quiz";
    }

    currentQuestion = 0;
    score = 0;

    selectionPage.classList.add("hidden");
    resultPage.classList.add("hidden");
    quizPage.classList.remove("hidden");

    showQuestion();
}

// Display a question
function showQuestion() {
    selectedAnswer = null;
    answered = false;

    const q = currentQuestions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${currentQuestions.length}`;

    scoreDisplay.textContent = `Score: ${score}`;

    questionElement.textContent = q.question;

    progressBar.style.width =
        `${(currentQuestion / currentQuestions.length) * 100}%`;

    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";

    submitBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");

    q.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option-btn";

        button.onclick = () => selectOption(button, option);

        optionsElement.appendChild(button);
    });
}

// Select an answer
function selectOption(button, option) {
    if (answered) return;

    selectedAnswer = option;

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}

// Submit the answer
function submitAnswer() {
    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer first!";
        return;
    }

    if (answered) return;

    answered = true;

    const q = currentQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === q.answer) {
            button.classList.add("correct");
        }

        if (
            button.textContent === selectedAnswer &&
            selectedAnswer !== q.answer
        ) {
            button.classList.add("wrong");
        }
    });

    if (selectedAnswer === q.answer) {
        score++;
        feedbackElement.textContent = "Correct answer! 🎉 " + q.explanation;
    } else {
        feedbackElement.textContent =
            "Incorrect! Correct answer: " + q.answer + ". " + q.explanation;
    }

    scoreDisplay.textContent = `Score: ${score}`;

    submitBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");

    if (currentQuestion === currentQuestions.length - 1) {
        nextBtn.textContent = "View Result";
    }
}

// Move to the next question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Display final result
function showResult() {
    quizPage.classList.add("hidden");
    resultPage.classList.remove("hidden");

    progressBar.style.width = "100%";

    const destination =
        currentDestination === "moon" ? "Moon" : "Mars";

    document.getElementById("resultMessage").textContent =
        `You have completed the ${destination} Exploration Quiz!`;

    document.getElementById("finalScore").textContent =
        `Your Score: ${score} / 10`;
}

// Restart the same quiz
function restartQuiz() {
    startQuiz(currentDestination);
}

// Return to destination selection
function goBack() {
    quizPage.classList.add("hidden");
    resultPage.classList.add("hidden");
    selectionPage.classList.remove("hidden");

    progressBar.style.width = "0%";
    nextBtn.textContent = "Next Question →";
}


