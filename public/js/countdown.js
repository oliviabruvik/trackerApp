// Declare global variables
let isPaused = false;
let intervalID = null;
let breakStatus;

const startCountdown = (minutes) => {
    isPaused = false;
    clearInterval(intervalID);

    let timeLeft = minutes * 60;
    let returnModal = document.querySelector("#return-modal");
    let startButton = document.querySelector("#start-button");
    let stopButton = document.querySelector("#stop-button");
    let secLeft = document.querySelector("#sec-left");
    let minLeft = document.querySelector("#min-left");
    let progressBar = document.querySelector("#progress-bar");

    returnModal.classList.remove("is-active");
    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");

    minLeft.innerHTML = Math.floor(timeLeft / 60);
    secLeft.innerHTML = Math.floor(timeLeft % 60);

    let progressInterval = 1/timeLeft * 100;

    intervalID = window.setInterval(reduceTime, 100);
    
    function reduceTime() {
        if (timeLeft === 0 && !isPaused) {
            console.log(intervalID);
            clearInterval(intervalID);
            returnModal.classList.add("is-active");
            return(timeLeft);
        } else if (timeLeft >= 1 && !isPaused) {
            timeLeft -= 1;
            minLeft.innerHTML = Math.floor(timeLeft / 60);
            secLeft.innerHTML = Math.floor(timeLeft % 60);
            progressBar.value += progressInterval;
        }
    }

};

// const performCountdown = () => {
//     let progressInterval = 1/timeLeft * 100;

//     intervalID = window.setInterval(reduceTime, 100);
    
//     function reduceTime() {
//         if (timeLeft === 0 && !isPaused) {
//             console.log(intervalID);
//             clearInterval(intervalID);
//             returnModal.classList.add("is-active");
//             return(timeLeft);
//         } else if (timeLeft >= 1 && !isPaused) {
//             timeLeft -= 1;
//             minLeft.innerHTML = Math.floor(timeLeft / 60);
//             secLeft.innerHTML = Math.floor(timeLeft % 60);
//             progressBar.value += progressInterval;
//         }
//     }
// };

const togglePause = (reset, time) => {

    let stopButton = document.querySelector("#stop-button");
    let resumeButton = document.querySelector("#resume-button");
    let resetButton = document.querySelector("#reset-button");
    let startButton = document.querySelector("#start-button");
    let skipToSessionButton = document.querySelector("#skip-to-session");

    resetButton.classList.toggle("hidden");
    resumeButton.classList.toggle("hidden");

    if (reset) {
        startButton.classList.toggle("hidden");
        let secLeft = document.querySelector("#sec-left");
        let minLeft = document.querySelector("#min-left");
        let progressBar = document.querySelector("#progress-bar");
        progressBar.value = 0;
        clearInterval(intervalID);
        breakStatus = true;
        minLeft.innerHTML = time;
        secLeft.innerHTML = '00';
    } else {
        stopButton.classList.toggle("hidden");
        isPaused = !isPaused;
    }
};

let continueButton = document.querySelector("#continue-button");


