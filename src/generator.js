let allScaleTypes = ["bebop", "bebop dominant", "bebop locrian", "bebop major", "bebop minor", "composite blues", "minor bebop"]
let keys = ['C', 'G', 'D', 'A', 'E', 'B']
let keyNote = 'C';
let modifier; let key; let chordsToUse;
let keyCounter = 0;
let keyTypeCounter = 0;
let keyIndex = 0;

function changeKey() {
  keyTypeCounter += 1;
  keyCounter += 1;
  if (keyTypeCounter > 16) {
    keyTypeCounter = 0;
    changeKeyType();
  } else {
    if (keyCounter > 4) {
      keyNote = keys[keyIndex]
      keyCounter = 0;
      keyIndex += 1;
      if (keyIndex == keys.length) {
        keyIndex = 0;
      }
    }
  }
  key = keyNote + ' ' + modifier;
  console.log('key is ', key)
  chordsToUse = Tonal.Scale.chords(key).filter(function(x) { return x !== '5' && x !== '64' && x !== '4'});;
}

function changeKeyType() {
  modifier = randFromArray(allScaleTypes);
  key = keyNote + ' ' + modifier;
  chordsToUse = Tonal.Scale.chords(key).filter(function(x) { return x !== '5' && x !== '64' && x !== '4'});;
}
changeKeyType();

function pickChords() {
  // let c1 = randFromArray(key);
  // console.log(chordsToUse, c1)
  let c2 = randFromArray(chordsToUse);
  // let c3 = randFromArray(key);
  console.log(key, c2)
  let startingNote = getRandomIntInclusive(0, 4)
  let nextStartingNote = getRandomIntInclusive(0, 4)
  
  let c1Notes = Tonal.Scale.notes(key).slice(startingNote, startingNote + 4);
  let c2Notes = Tonal.Chord.notes(keyNote + c2);
  let c3Notes = Tonal.Scale.notes(key).slice(nextStartingNote, nextStartingNote + 4);

  let a3 = shuffleArray([c1Notes, c2Notes, c3Notes]);
  
  
  // console.log(c1Notes, c2Notes, c3Notes)
  let notesToUse = a3[0].concat(a3[1].reverse()).concat(a3[2]);
  return notesToUse;
}

function generateNotes() {
  changeKey();
  notesToUse = pickChords();
  console.log('got notes to use', notesToUse)
  let notes = [];
  for (i=0; i < 8; i++) {
    let note = notesToUse[i]
    if (note.indexOf('##') > -1) {
      note = note.
      play = false;
    } else {
      play = true;
    }
    let randd = Math.random();
    if (randd < 0.45 && randd > 0.4) {
      notes.push({note: Tonal.transpose(note + '2', '-8m'), length: '32n', play: play})
    } else {
      notes.push({note: note + '2', length: '32n', play: play})
    }
    notes.push({note: null, length: null, play: false}) 
    notes.push({note: null, length: null, play: false})
    
    // little grace note
    if (randd > 0.85) {
      notes.push({note: Tonal.transpose(note + '2', '-8m'), length: '64n', play: true}) 
    } else if (randd < .05) {
      notes.push({note: Tonal.transpose(note + '2', '5m'), length: '64n', play: true}) 
    } else {
      notes.push({note: null, length: null, play: false}) 
    }
  }
  return notes
}