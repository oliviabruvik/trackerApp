// Declare global variables
let isPaused = false;
let intervalID = null;

const startCountdown = (minutes) => {
    isPaused = false;
    
    clearInterval(intervalID);

    let timeLeft = minutes * 60;
    let startButton = document.querySelector("#start-button");
    let stopButton = document.querySelector("#stop-button");
    let secLeft = document.querySelector("#sec-left");
    let minLeft = document.querySelector("#min-left");
    let progressBar = document.querySelector("#progress-bar");

    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");

    minLeft.innerHTML = Math.floor(timeLeft / 60);
    secLeft.innerHTML = Math.floor(timeLeft % 60);

    let progressInterval = 1/timeLeft * 100;

    intervalID = window.setInterval(reduceTime, 1000);
    
    function reduceTime() {
        if (timeLeft === 0 && !isPaused) {
            console.log(intervalID);
            alert("congrats! session finished.");
            clearInterval(intervalID);
            return(timeLeft);
        } else if (timeLeft >= 1 && !isPaused) {
            timeLeft -= 1;
            minLeft.innerHTML = Math.floor(timeLeft / 60);
            secLeft.innerHTML = Math.floor(timeLeft % 60);
            progressBar.value += progressInterval;
        }
    }
};

const togglePause = (reset) => {

    let stopButton = document.querySelector("#stop-button");
    let resumeButton = document.querySelector("#resume-button");
    let resetButton = document.querySelector("#reset-button");
    let startButton = document.querySelector("#start-button");

    resetButton.classList.toggle("hidden");
    resumeButton.classList.toggle("hidden");

    if (reset) {
        startButton.classList.toggle("hidden");
        let secLeft = document.querySelector("#sec-left");
        let minLeft = document.querySelector("#min-left");
        clearInterval(intervalID);

        minLeft.innerHTML = 25;
        secLeft.innerHTML = '00';
    } else {
        stopButton.classList.toggle("hidden");
        isPaused = !isPaused;
    }
};