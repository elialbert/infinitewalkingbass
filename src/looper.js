

// Start the sequence
var stepNumber = 0;

var scoreId = -1;

Tone.Transport.bpm.value = 80;
let notes = generateScale()
var numberOfSteps = notes.length;

let nextNotes = null
console.log('starting', notes)

var loop = new Tone.Loop(function(time){
  if (!nextNotes) {
    nextNotes = generateScale()  
    console.log('generated', nextNotes)
  }

  var numberOfSteps = notes.length;
  let basslineNote = notes[stepNumber]
  console.log(basslineNote)
  if (basslineNote != null) {
    bassline.triggerAttackRelease(basslineNote,
                                  "16n",
                                  time);
  }

  stepNumber++;
  if (stepNumber == numberOfSteps) {
    notes = nextNotes;
    nextNotes = null;
    stepNumber = 0
    console.log('looping')
  }


}, "4n");
loop.start();