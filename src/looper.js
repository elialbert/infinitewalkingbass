var stepNumber = 0;
Tone.Transport.bpm.value = 80;

let notes = generateScale()
var numberOfSteps = 32;

let nextNotes = null

let loopFunc = function(time) {
  if (!nextNotes) {
    nextNotes = generateScale()  
    console.log('generated', nextNotes)
  }

  let note = notes[stepNumber]
  // console.log(note)
  if (note.play) {
    bass.triggerAttackRelease(note.note,
                              note.interval,
                              time);
  }

  stepNumber++;
  if (stepNumber == numberOfSteps) {
    notes = nextNotes;
    nextNotes = null;
    stepNumber = 0
    console.log('looping')
  }
}
