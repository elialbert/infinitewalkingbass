var playing = false;
var playPauseButton = document.getElementById("play-pause");
var loop;

playPauseButton.addEventListener("click", function() {
  if (playing) {
    console.log('stopping'); playing = false; playPauseButton.innerHTML = "Play";
    bass.triggerRelease();
    loop.stop();
    Tone.Transport.pause();

  } else {
    console.log('starting'); playing = true; playPauseButton.innerHTML = "Pause";
    loop = new Tone.Sequence(loopFunc, notes, "8n");
    loop.start();
    StartAudioContext(Tone.context);
    Tone.Transport.start();  
  }
});

