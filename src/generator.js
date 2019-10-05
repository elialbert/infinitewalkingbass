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
  // console.log(key, c2)
  let startingNote = getRandomIntInclusive(0, 4)
  let nextStartingNote = getRandomIntInclusive(0, 4)
  
  let c1Notes = Tonal.Scale.notes(key).slice(startingNote, startingNote + 4);
  let c2Notes = Tonal.Chord.notes(keyNote + c2);
  let c3Notes = Tonal.Scale.notes(key).slice(nextStartingNote, nextStartingNote + 4);
  let c4Notes = Tonal.Scale.notes(key).slice(startingNote, startingNote + 2);

  let a3 = shuffleArray([c1Notes, c2Notes, c3Notes]);
  
  
  // console.log(c1Notes, c2Notes, c3Notes)
  let notesToUse = a3[0].concat(a3[1].reverse()).concat(a3[2]).concat(c4Notes);
  return notesToUse;
}

let numNotes = 0;
let numNotesToUse = 0;

function generateNotes() {
  numNotes = 0;
  const play = true;
  changeKey();
  notesToUse = pickChords();
  useIndex = 0;
  // console.log('got notes to use', notesToUse)
  let notes = [];
  for (i=0; i < 8; i++) {
    let randd = Math.random();
    let note = notesToUse[useIndex]
    let subNotes = [];
    if (randd < 0.65) {
      notes.push(note + '2')
      numNotes += 1;
    } else {
      // subnotes
      if (randd < 0.8) {
        subNotes = [note + '2', null, null, Tonal.transpose(note + '2', '-8m')]
        numNotes += 2;
      } else if (randd < 0.9) {
        subNotes = [note + '2', null, null, Tonal.transpose(note + '2', '5m')]
        numNotes += 2;
      } else {
        // triplet
        subNotes = [note + '2', notesToUse[i+1] + '2', notesToUse[i+2] + '2']
        useIndex = useIndex + 2;
        numNotes += 3;
      }
      
      notes.push(subNotes)
    }
    useIndex += 1;
  }
  console.log('made', numNotes, notes)
  if (numNotesToUse == 0) {
    numNotesToUse = numNotes;
  }
  return notes
}