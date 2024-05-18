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

    //calculate display time format
    function displayTime(time){
        const minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = seconds >9 ? seconds : `0${seconds}`
       return `${minutes}:${seconds}`;
    }

    //update progress bar as vodeo plays
    function updateProgress(){
        progressBarDiv.style.width = `${(videoElement.currentTime / videoElement.duration) * 100}%`;

        currentTime.textContent = `${displayTime(videoElement.currentTime)}`;

        timeDurationSpan.textContent = `${displayTime(videoElement.duration)}`;
    }

    //click to seek the video
    function setProgress(e){
        /* console.log(e.
            offsetX); */
            /* console.log(e); */
        
        let clikedErea = (e.offsetX / e.srcElement.offsetWidth);
        progressBarDiv.style.width = `${clikedErea}%`;
        videoElement.currentTime = clikedErea * videoElement.duration;

    }



// Volume Controls--------------------------//

let lastVolume = 1;
    //volume bar

    function changeVolume(e){
        let volume = e.offsetX / volumeRangeDiv.offsetWidth;
        //rounding volume up or down
        if(volume < 0.1){
            volume = 0;
        }
        if(volume> 0.9){
            volume = 1;
        }
        

        volumeBarDiv.style.width = `${volume *100}%`;
        videoElement.volume = volume;

        // change icon depending on volume
        volumeIcon.className = '';
        if(volume > 0.7){
            volumeIcon.classList.add('fas', 'fa-volume-up')
        }else if(volume < 0.7 && volume> 0){
            volumeIcon.classList.add('fas','fa-volume-down' )
        }else if(volume === 0){
            volumeIcon.classList.add('fas', 'fa-volume-off')
        }

        lastVolume = volume;
    }

    //mute and Unmute2

    function toggleVolume(){
        if(videoElement.volume){
            videoElement.volume = 0;
            volumeIcon.classList.add('fas','fa-volume-xmark' );
            volumeIcon.classList.remove( 'fa-volume-up', 'fa-volume-down', 'fa-volume-off');
            volumeBarDiv.style.width = '0'
        }else{
            videoElement.volume = lastVolume;

            volumeIcon.classList.remove('fas','fa-volume-xmark' );

            if(videoElement.volume > 0.7){
                volumeIcon.classList.add( 'fas','fa-volume-up')
                
            }else if(videoElement.volume < 0.7 && videoElement.volume> 0){
                volumeIcon.classList.add('fas','fa-volume-down' );
                
            }else if(videoElement.volume === 0){
                volumeIcon.classList.add('fas', 'fa-volume-off');
                
            }

            volumeBarDiv.style.width = `${lastVolume * 100}%`;
            

        }
    }


    




//add event listener
playBtn.addEventListener('click', togglePlay);
videoElement.addEventListener('click', togglePlay);
videoElement.addEventListener('timeupdate', updateProgress);
videoElement.addEventListener('canplay', updateProgress);
progressBarRangeDiv.addEventListener('click', setProgress);
volumeRangeDiv.addEventListener('click', changeVolume);
volumeIcon.addEventListener('click', toggleVolume);
speedDiv.addEventListener('change', changeSpeed);
