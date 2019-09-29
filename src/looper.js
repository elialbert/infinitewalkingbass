var stepNumber = 0;
Tone.Transport.bpm.value = 70;

let notes = generateNotes()
var numberOfSteps = 32;

let nextNotes = null

let loopFunc = function(time) {
  if (!nextNotes) {
    // can push to web worker?!:
    nextNotes = generateNotes();
  }

  let note = notes[stepNumber]
  if (note.play) {
    bass.triggerAttackRelease(note.note,
                              note.interval,
                              time);
  } else if (note.pause) {
    bass.triggerRelease();
  }

  stepNumber++;
  if (stepNumber == numberOfSteps) {
    notes = nextNotes;
    nextNotes = null;
    stepNumber = 0
    // console.log('looping')
  }
}
