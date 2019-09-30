var stepNumber = 0;
Tone.Transport.bpm.value = 70;
// Tone.Transport.swing.value = 0.24;

let notes = generateNotes()
var numberOfSteps = 32;

let nextNotes = null

let loopFunc = function(time) {
  if (!nextNotes) {
    // can push to web worker?!:
    nextNotes = generateNotes();
  }

  let note = notes[stepNumber]
  try {
    if (note.play) {
      bass.triggerAttackRelease(note.note,
                                note.interval,
                                time);
    } else if (note.pause) {
      bass.triggerRelease();
    }
  } catch(e) {
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
