function generateScale() {
  let randomMode = MT.modesList[getRandomIntInclusive(0,6)]
  console.log(randomMode)
  let notes = [];
  randomMode.forEach(function(x) { notes.push(MT.numbersToNotesWithOctaves[x]) })
  console.log(notes)
  return notes
}