var playing = false;
var playPauseButton = document.getElementById("play-pause");

playPauseButton.addEventListener("click", function() {
  if (playing) {
    Tone.Transport.pause();
    playPauseButton.innerHTML = "Play";
    playing = false;
  } else {
    // Start the music
    Tone.Transport.start();  
    //Tone.Transport.loopEnd = "1m";
    //Tone.Transport.loop = true;
    playPauseButton.innerHTML = "Pause";
    playing = true;
  }
});

