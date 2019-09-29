var playing = false;
var playPauseButton = document.getElementById("play-pause");
var loop

playPauseButton.addEventListener("click", function() {
  if (playing) {
    console.log('stopping')
    Tone.Transport.pause();
    playPauseButton.innerHTML = "Play";
    playing = false;
    bass.triggerRelease();
  } else {
    console.log('starting')
    loop = new Tone.Loop(loopFunc, "32n");
    loop.start();

    StartAudioContext(Tone.context)
    Tone.Transport.start();
    playPauseButton.innerHTML = "Pause";
    playing = true;
  }
});

