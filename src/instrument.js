var bass = new Tone.MonoSynth({
  volume: 0,
  frequency: 'C2',
  oscillator: {
    type: 'square4'
  },
  envelope: {
    attack: 0.005,
    decay: 0.991,
    sustain: 0.001,
    release: .001
  }
})
var filter = new Tone.AutoFilter({
  wet: 1,
  frequency: 200,
  type: 'sine',
  depth: 1,
  baseFrequency: 200,
  octaves: 6,
  filter: {
    type: 'lowpass',
    rolloff: -12,
    Q: 1
  }
}) 

var tremelo = new Tone.Tremolo({
  frequency: 100,
  type: 'sine',
  depth: 1,
  spread: 15,
  wet: 0
}) 
bass.chain(tremelo, Tone.Master);