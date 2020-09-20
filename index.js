(() => {
    function onEnded() {
        progressBar.value = 0;
        audioElem.currentTime = 0;
        controlBtn.classList.remove("fa-pause");
        controlBtn.classList.add("fa-play");
        isPlay = false;
    }
    function onInput() {
        audioElem.currentTime = this.value;
    }
    function onTimeUpdate() {
        startTime.innerHTML = getTimeFormat(this.currentTime); 
        progressBar.value = this.currentTime;
        // const angle = this.currentTime / audioElem.duration * 350 * 6;
        // cover.style.transform = `rotate(${angle}deg)`;
    }
    function getTimeFormat(secondTime) {
        const minute = Math.floor(secondTime / 60).toString();
        const second = Math.floor((secondTime % 60)).toString().padStart(2, '0');
        return `${minute}:${second}`;
        
    }
    function onLoaded() {
        endTime.innerHTML = getTimeFormat(this.duration);
        progressBar.max = this.duration;
    }
    function onClick() {
        if (!isPlay) {
            this.classList.remove("fa-play");
            this.classList.add("fa-pause");
            audioElem.play();
            cover.style.webkitAnimationPlayState = "running";
            isPlay = true;
        } else {
            this.classList.remove("fa-pause");
            this.classList.add("fa-play");
            audioElem.pause();
            cover.style.webkitAnimationPlayState = "paused";
            isPlay = false;
        }
    }
    let isPlay = false;
    const audioElem = document.querySelector("audio");
    const controlBtn = document.querySelector("div.control-button");
    const startTime = document.querySelector("#start-time");
    const endTime = document.querySelector("#end-time");
    const progressBar = document.querySelector("#progress-bar");
    const cover = document.querySelector("#cover");
    function App() {
        cover.style.webkitAnimationPlayState = "paused";
        controlBtn.addEventListener('click', onClick);
        // audio
        audioElem.addEventListener('loadeddata', onLoaded);
        audioElem.addEventListener('timeupdate', onTimeUpdate);
        audioElem.addEventListener('ended', onEnded);
        // progress bar
        progressBar.addEventListener('input', onInput);
    }
    App();
})();