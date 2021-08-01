// Declare global variables
let isPaused = false;


const startCountdown = (minutes) => {
    let timeLeft = minutes * 60;
    let startButton = document.querySelector("#start-button");
    let stopButton = document.querySelector("#stop-button");
    let resetButton = document.querySelector("#reset-button");
    let secLeft = document.querySelector("#sec-left");
    let minLeft = document.querySelector("#min-left");

    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");
    resetButton.classList.toggle("hidden");

    console.log(stopButton);

    minLeft.innerHTML = Math.floor(timeLeft / 60);
    secLeft.innerHTML = Math.floor(timeLeft % 60);

    let intervalID = window.setInterval(reduceTime, 100);
    
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
        }
    }
    
};

const togglePause = () => {
    isPaused = !isPaused;
    let stopButton = document.querySelector("#stop-button");
    let resumeButton = document.querySelector("#resume-button");

    resumeButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
};