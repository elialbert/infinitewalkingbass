// Bassline
var bassline = new Tone.FMSynth();
var basslineVolume = new Tone.Volume(0);
var basslineDistortion = new Tone.Distortion(10);
var basslineDelay = new Tone.FeedbackDelay(50); 
var basslinePhaser = new Tone.Phaser({
  "frequency" : 125, 
  "depth" : 1.5, 
  "baseFrequency" : 50
})
bassline.chain(basslineDistortion, basslineDelay);
bassline.chain(basslineDistortion, basslinePhaser);
bassline.chain(basslinePhaser, basslineVolume);
bassline.chain(basslineVolume, Tone.Master);
