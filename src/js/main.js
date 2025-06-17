let currentQuestionIndex = 0; // Tracks the current question index
let selectedAnswers = []; // array for selected answers
let totalPoints = {
    "saver": 0,
    "spender": 0,
    "investor": 0,
    "compulsive": 0,
    "gambler": 0,
    "debtor": 0,
    "shopper": 0,
    "indifferent": 0
}; // Stores total points for each personality type

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizContainer = document.getElementById('quiz-container');
    const startButton = document.getElementById('start-button');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');

    const totalQuestions = questions.length;

    // Starts the quiz when the start button is clicked
    startButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        quizContainer.style.display = 'flex';
        loadQuestion(currentQuestionIndex); // Load the first question
    });
       //backbutton
       const backButton = document.getElementById('back-button');
       backButton.addEventListener('click', () => {
       if (currentQuestionIndex > 0) {
           currentQuestionIndex--;
           loadQuestion(currentQuestionIndex);
       } else {
           // Return to welcome screen if on first question
           quizContainer.style.display = 'none';
           welcomeScreen.style.display = 'flex';
           document.querySelectorAll('.answer-button').forEach(btn => btn.classList.remove('active'));
  
       }
       });
       //backbutton

    document.getElementById('restart-button').addEventListener('click', restartQuiz);

    function MobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // Sets up event listeners for answer buttons
    document.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', function () {
            recordAnswer(this.value);

            if (MobileDevice()) {
                button.classList.remove("mobile-click")
                void button.offsetWidth
                button.classList.add("mobile-click")
            }
        });
    });

    // Updates the progress bar based on current question index
    function updateProgressBar() {
        if (totalQuestions > 0) {
            const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    // Loads the question at the specified index
    function loadQuestion(index) {
        const question = questions[index];
        document.getElementById('question-text').innerText = question.value;

        updateProgressBar();

        document.getElementById('answer-sa').value = "sa";
        document.getElementById('answer-a').value = "a";
        document.getElementById('answer-n').value = "n";
        document.getElementById('answer-d').value = "d";
        document.getElementById('answer-sd').value = "sd";
        // Clear any previously active buttons
        document.querySelectorAll('.answer-button').forEach(btn => btn.classList.remove('active'));

        // Highlight the previously selected answer if it exists
        const selected = selectedAnswers[index];
        if (selected) {
            const button = document.querySelector(`.answer-button[value="${selected}"]`);
            if (button) button.classList.add('active');
        }
    }

    // Records the answer and updates the total points
    function recordAnswer(answer) {
        const question = questions[currentQuestionIndex];
    
        // If a previous answer exists for this question, subtract its points first
        const previousAnswer = selectedAnswers[currentQuestionIndex];
        if (previousAnswer) {
            const prevPoints = question.points[previousAnswer];
            for (const key in prevPoints) {
                if (totalPoints.hasOwnProperty(key)) {
                    totalPoints[key] -= prevPoints[key]; // Subtract old points
                }
            }
        }
    
        // Save the new selected answer
        selectedAnswers[currentQuestionIndex] = answer;
    
        // Add new points
        const newPoints = question.points[answer];
        for (const key in newPoints) {
            if (totalPoints.hasOwnProperty(key)) {
                totalPoints[key] += newPoints[key];
            }
        }
    
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }

    // Displays the quiz results and personality type
    function showResults() {
        progressContainer.style.display = 'none';

        let maxPoints = 0;
        let personalityType = '';

        // Determine the personality type with the highest points
        for (const type in totalPoints) {
            if (totalPoints[type] > maxPoints) {
                maxPoints = totalPoints[type];
                personalityType = type;
            }
        }

        const personalityData = personalitiesData.descriptions[personalityType];

        document.getElementById('question-container').style.display = 'none';
        //display none when result page is shown.
        document.getElementById('back-button').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';

        document.getElementById('answers').style.display = 'none';

        document.getElementById('result').innerText = `You are most similar to the ${capitalize(personalityData.animal)}`;

        const total = getTotalPoints();
        const resultsContainer = document.getElementById('detailed-results');

        resultsContainer.innerHTML = '';

        // Sort personality types by percentage
        const sortedTypes = Object.keys(totalPoints).map(type => {
            const percentage = (totalPoints[type] / total) * 100;
            return { type, percentage };
        }).sort((a, b) => b.percentage - a.percentage);

        // These can all be changed to adjust the buttons on the results page
        const maxButtonWidth = 400;
        const additionalLength = 100;
        const scalingFactor = 3;

        // Create buttons for each personality type
        sortedTypes.forEach(({ type, percentage }) => {
            const animalName = personalitiesData.descriptions[type].animal;

            const buttonWidth = Math.max(30  + ((percentage / 100) * 70));
            const activeSymbol = '<i class="fa-solid fa-eye"></i>';
            const inactiveSymbol = '<i class="fa-solid fa-eye-slash"></i>';

            const button = document.createElement('button');
            button.innerHTML = `${capitalize(animalName)}: ${percentage.toFixed(2)}% ${inactiveSymbol}`;
            button.style.width = `${buttonWidth}vw`;
            button.onclick = () => {
                showPersonalityDetails(type);
                for (const btn of resultsContainer.children){
                    btn.classList.remove('active');
                    btn.style.animation = 'none';
                    btn.innerHTML = btn.innerHTML.replace(activeSymbol, inactiveSymbol);
                }
                button.classList.add('active');
                button.innerHTML = `${capitalize(animalName)}: ${percentage.toFixed(2)}% ${activeSymbol}`;
            };

            if (type === personalityType) {
                button.classList.add('largest-button'); // Highlight the largest button
            }

            resultsContainer.appendChild(button);
        });

        showPersonalityDetails(personalityType);

        // Save quiz result to the Node.js backend
        const currentDate = new Date().toISOString();
        const quizResult = {
            ResultId: Date.now().toString(),
            date: currentDate,
            personalityType: personalityType,
            saver: totalPoints.saver,
            spender: totalPoints.spender,
            investor: totalPoints.investor,
            compulsive: totalPoints.compulsive,
            gambler: totalPoints.gambler,
            debtor: totalPoints.debtor,
            shopper: totalPoints.shopper,
            indifferent: totalPoints.indifferent
        };

        saveQuizResult(quizResult);  // Call the new function to save the result
        saveResultToFirestore(quizResult);


        function saveQuizResult(quizResult) {
            fetch("/api/save-result", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(quizResult)
            })
                .then(res => res.json())
                .then(data => console.log("✅ Result saved to backend:", data))
                .catch(err => console.error("❌ Error saving to backend:", err));
        }

        function saveResultToFirestore(quizResult) {
            const collectionName = "finlit_results"; // New Firestore collection
            const docRef = db.collection(collectionName).doc(quizResult.personalityType);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    return docRef.update({
                        resultCount: firebase.firestore.FieldValue.increment(1)
                    });
                } else {
                    return docRef.set({
                        personalityType: quizResult.personalityType,
                        resultCount: 1
                    });
                }
            }).then(() => {
                console.log(`✅ Firestore saved to ${collectionName}: ${quizResult.personalityType}`);
            }).catch((error) => {
                console.error("❌ Firestore error:", error);
            });
        }


        async function saveQuizResult(quizResult) {
            try {
                const response = await fetch('https://mpq-backend.onrender.com/save-quiz-result', { //need to get the link from new backend on render
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(quizResult),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.message);  // Log the success message
            } catch (error) {
                console.error('Error saving quiz result:', error);
            }
        }

        document.getElementById('feedback-form').addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const feedbackData = {
                shareHabits: event.target.shareHabits.value,
                recommendSurvey: event.target.recommendSurvey.value,
                comfortableTalking: event.target.comfortableTalking.value,
                engagement: event.target.engagement.value,
                resultsAccurate: event.target.resultsAccurate.value,
                resultsHelpful: event.target.resultsHelpful.value,
                interactivity: event.target.interactivity.value,
                practicalSteps: event.target.practicalSteps.value,
                additionalFeatures: Array.from(event.target.additionalFeatures)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value),
                saveResults: event.target.saveResults.value,
                visualSatisfaction: event.target.visualSatisfaction.value,
                timestamp: currentDate  // Add the current timestamp to the feedback data
            };

            try {
                const response = await fetch('https://mpq-backend.onrender.com/submit-feedback', { //need to get the link from new backend on render
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(feedbackData),
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message);
                } else {
                    alert(result.error);
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('Failed to submit feedback. Please try again later.');
            }
        });

        // Show detailed information for the selected personality type
        function showPersonalityDetails(personalityType) {
            const personalityData = personalitiesData.descriptions[personalityType];
            const detailsContainer = document.getElementById('personality-details');

            const resultAnimalImage = document.getElementById("result-animal-image");

            if (personalityData) {
                detailsContainer.innerHTML = `
                    <div class="details-tree"><img id="topper-for-line" class="responsive-image" src="src/assets/Quiz asset-02.png" alt="Top and Bottom Image for the Line"><img id="topper-for-line" class="responsive-image" src="src/assets/Quiz asset-02.png" alt="Top and Bottom Image for the Line"></div>
                    <div class="details-box left"><img id="description-image" class="responsive-image" src="/src/assets/Quiz asset-01.png" alt="Description Image" class="details-image"><strong class="large-text">Description</strong><br><br>${personalityData.description}</div>
                    <div class="details-box right"><img id="advantages-image" class="responsive-image" src="/src/assets/Quiz asset-01.png" alt="Advantages Image" class="details-image"><strong class="large-text">Advantages</strong><br><ul>${personalityData.advantages.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box left"><img id="disadvantages-image" class="responsive-image" src="/src/assets/Quiz asset-01.png" alt="Disadvantages Image" class="details-image"><strong class="large-text">Disadvantages</strong><br><ul>${personalityData.disadvantages.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box right"><img id="motivators-image" class="responsive-image" src="/src/assets/Quiz asset-01.png" alt="Motivators Image" class="details-image"><strong class="large-text">Motivators</strong><br><ul>${personalityData.motivators.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box left"><img id="demotivators-image" class="responsive-image" src="/src/assets/Quiz asset-01.png" alt="Demotivators Image" class="details-image"><strong class="large-text">Demotivators</strong><br><ul>${personalityData.demotivators.map(item => `<li>${item}</li>`).join('')}</ul></div>
                `;

                const animalImages = {
                    "saver": "/src/assets/animal_pngs/squirrel.png",
                    "spender": "/src/assets/animal_pngs/poodle.png",
                    "investor": "/src/assets/animal_pngs/owl.png",
                    "compulsive": "/src/assets/animal_pngs/bee.png",
                    "gambler": "/src/assets/animal_pngs/rabbit.png",
                    "debtor": "/src/assets/animal_pngs/armadillo.png",
                    "shopper": "/src/assets/animal_pngs/octopus.png",
                    "indifferent": "/src/assets/animal_pngs/panda.png"
                };

                if (animalImages[personalityType]) {
                    resultAnimalImage.src = animalImages[personalityType];
                    resultAnimalImage.style.display = "block";
                } else {
                    resultAnimalImage.style.display = "none";
                }
            } else {
                detailsContainer.innerHTML = "No details available for this personality type.";
            }
        }

        // Just a function to capitalize certain text
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    // Gets collective points
    function getTotalPoints() {
        return Object.values(totalPoints).reduce((sum, points) => sum + points, 0);
    }

    document.getElementById('feedback-button').addEventListener('click', function () {
        document.getElementById('feedback-popup').classList.add('active');
    });

    document.addEventListener('click', function (event) {
        let feedbackPopup = document.getElementById('feedback-popup');

        if (!feedbackPopup.contains(event.target) && event.target.id !== 'feedback-button') {
            feedbackPopup.classList.remove('active');
        }
    });

    // Restarts the quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        totalPoints = {
            "saver": 0,
            "spender": 0,
            "investor": 0,
            "compulsive": 0,
            "gambler": 0,
            "debtor": 0,
            "shopper": 0,
            "indifferent": 0
        };
        progressBar.style.width = '0%';
        progressContainer.style.display = 'block';
        document.getElementById('answers').style.display = 'block';
        document.getElementById('question-container').style.display = 'block';
        document.getElementById('result-container').style.display = 'none';
        loadQuestion(currentQuestionIndex);
        location.reload(); // Placeholder - need to just reset quiz like how I am trying above, but it screws up formatting, FIX
    }

    // Keyboard shortcut to instantly finish quiz
    let pressedKeys = {};

    document.addEventListener('keydown', (event) => {
    pressedKeys[event.key] = true;
    // Check for specific key combinations
    if (pressedKeys['s'] && pressedKeys['k']) {
        if (welcomeScreen.style.display !== 'none') {
            welcomeScreen.style.display = 'none';
            quizContainer.style.display = 'flex';
        }
        totalPoints = {
            "saver": 10,
            "spender": 7,
            "investor": 5,
            "compulsive": 4,
            "gambler": 3,
            "debtor": 2,
            "shopper": 1,
            "indifferent": 1
        };
        showResults();
    }
    });

    document.addEventListener('keyup', (event) => {
    delete pressedKeys[event.key];
    });
});
