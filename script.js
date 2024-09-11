let timer;
let time = 0;
let isRunning = false;
let adjustTimerInterval;

//function to start adjust time
function startAdjustTime(seconds){
  adjustTime(seconds);
  
  adjustTimerInterval = setInterval(()=>{
    adjustTime(seconds);
  },100)
}

// Function to stop adjusting the time

function stopAdjustTime(){
  clearInterval(adjustTimerInterval);
}


// Function to toggle the timer between running and paused
function toggleTimer(){
  if (!isRunning){
    //start timer
    isRunning = true;
    timer = setInterval(updateTimer, 1000) //update every second
    document.getElementById('start').innerText = 'Pause';
  }else {
  // Pause the timer
  isRunning = false;
  clearInterval(timer);
  document.getElementById('start').innerText = 'Resume';
  }
} 

// Function to cancel the timer and reset its state
function cancelTimer(){
  clearInterval(timer);
  // Reset timer variables
  time = 0;
  isRunning = false;
  // Update the UI
  document.getElementById('timerDisplay').innerText = formatTime(time);
  document.getElementById('start').innerText = 'Start';
  document.getElementById('start').setAttribute('disabled', 'disabled');
}



//function to update Timer Display

function updateTimer(){
  if(time > 0){
    time--
    document.getElementById('timerDisplay').innerHTML = formatTime(time);
  } else if(time === 0) {
    
    clearInterval(timer);
    isRunning = false;
    document.getElementById('start').innerText = 'Start';
    document.getElementById('start').setAttribute('disabled', 'disabled');
    
    
  }
}

//function to format time seconds
function formatTime(seconds){
  const minutes = Math.floor(seconds/60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

//function to adjust time with given seconds
function adjustTime(seconds){
  
  time += seconds; //adjust time by given seconds
  if (time < 0){
    time = 0;
  }
  
  document.getElementById('timerDisplay').innerText = formatTime(time); //Display the formatted time
  
  if(time > 0) {
    
    document.getElementById('start').removeAttribute('disabled');
    
  } else {
    document.getElementById('start').setAttribute('disabled', 'disabled');
  }
}
  
//set timer for a short break of 1 minute
function setShortBreak(){
  time = 60;
  document.getElementById('timerDisplay').innerText = formatTime(time);
  document.getElementById('start').removeAttribute('disabled');
}

//set timer for a long break of 2 minutes
function setLongBreak(){
  time=120;
  document.getElementById('timerDisplay').innerText = formatTime(time);
  document.getElementById('start').removeAttribute('disabled');
}

//function to reset timer

function resetTimer(){
  time=0;
  document.getElementById('timerDisplay').innerText = formatTime(time);
  document.getElementById('start').setAttribute('disabled', 'disabled');
}

function toggleDarkMode() {
  const element = document.getElementsByClass('container');
  element.classList.toggle('inverted');
}