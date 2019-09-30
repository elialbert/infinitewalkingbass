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
    if (!loop) { loop = new Tone.Loop(loopFunc, "32n"); }
    // loop.humanize = '0.005s';
    loop.start();
    StartAudioContext(Tone.context);
    Tone.Transport.start();  
  }
});

