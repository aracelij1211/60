const audio = new Audio(
  "./ms/song.mp3"
);
audio.autoplay = false;
audio.loop = true;


audio.addEventListener(
  "loadeddata",
  () => {
    console.dir("Loaded!!!!");
    audio.volume = .75;
  },
  false
);


//toggle between playing and pausing on button click
const playBtn = document.querySelector(".toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);