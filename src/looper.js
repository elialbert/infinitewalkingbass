var stepNumber = 0;
Tone.Transport.bpm.value = 70;
Tone.Transport.swing.value = 0.24;

let notes = generateNotes()
var numberOfSteps = 32;

let nextNotes = null
let playIndex = -1;

let loopFunc = function(time, note) {
  playIndex += 1;
  // console.log('l', playIndex, numNotesToUse, note)
  if (!nextNotes) {
    // can push to web worker?!:
    nextNotes = generateNotes();
    // console.log('generated', nextNotes, 'num', numNotes)
  }
  bass.triggerAttackRelease(note,
                            '8n',
                            time);

  if (showInfo) {
    document.getElementById('currently-playing').innerHTML = note;
  }
  
  if (playIndex == (numNotesToUse - 1)) {
    // console.log('looping!', nextNotes)
    loop.removeAll();
    for (i=0; i < nextNotes.length; i++) {
      // console.log('adding ', i, nextNotes[i])
      loop.add(i, nextNotes[i]);
    }
    nextNotes = null;
    numNotesToUse = numNotes;
    playIndex = -1;
  }
};