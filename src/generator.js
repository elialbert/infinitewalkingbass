function generateScale() {
  let randomMode = MT.modesList[getRandomIntInclusive(0,6)]
  console.log(randomMode)
  let notes = [];
  randomMode.forEach(function(x) { 
    let note = MT.numbersToNotesWithOctaves[x];
    notes.push({note: note, length: '32n', play: true})
    notes.push({note: null, length: null, play: false}) 
    notes.push({note: null, length: null, play: false}) 
    notes.push({note: note, length: '64n', play: true}) 
  })
  console.log(notes)
  return notes
}