// Player elements
const playerDiv = document.querySelector('.player');
const videoElement = document.querySelector('.video');

// Show controls elements
const showControlsDiv = document.querySelector('.show-controls');
const controlContainerDiv = document.querySelector('.control-container');

// Progress bar elements
const progressBarRangeDiv = document.querySelector('.progress-range');
const progressBarDiv = document.querySelector('.progress-bar');

// Control group elements
const controlGroupDiv = document.querySelector('.control-group');

// Left control elements
const controlsLeftDiv = document.querySelector('.controls-left');
const playControlsDiv = document.querySelector('.play-controls');
const playBtn = document.getElementById('play-btn');

// Volume elements
const volumeDiv = document.querySelector('.volume');
const volumeIconDiv = document.querySelector('.volume-icon');
const volumeIcon = document.getElementById('volume-icon');
const volumeRangeDiv = document.querySelector('.volume-range');
const volumeBarDiv = document.querySelector('.volume-bar');

// Right control elements
const controlsRightDiv = document.querySelector('.controls-right');

// Speed elements
const speedDiv = document.querySelector('.speed');
const playerSpeedSelect = document.querySelector('.player-speed');

// Time elements
const timeDiv = document.querySelector('.time');
const currentTime = document.querySelector('.time-elapsed');
const timeDurationSpan = document.querySelector('.time-duration');

// Fullscreen elements
const fullscreenDiv = document.querySelector('.fullscreen');
const expandIcon = document.querySelector('.fas.fa-expand');

// Other elements
const no1Div = document.querySelector('.no1');
const no2Div = document.querySelector('.no2');





//Play & Pause//

function togglePlay(){
    if(videoElement.paused){
        videoElement.play();
        playBtn.classList.add('fa-pause');
        playBtn.classList.remove('fa-play');


    }else{
        videoElement.pause();

        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
        
    }
}


// progress bar ----------------------------//

    //update progress bar as vodeo plays
    function updateProgress(){
        progressBarDiv.style.width = `${(videoElement.currentTime / videoElement.duration) * 100}%`
    }


//add event listener
playBtn.addEventListener('click', togglePlay);
videoElement.addEventListener('click', togglePlay);
videoElement.addEventListener('timeupdate', updateProgress);
videoElement.addEventListener('canplay', updateProgress);
