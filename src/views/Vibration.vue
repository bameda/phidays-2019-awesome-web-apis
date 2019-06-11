<template>
  <div class="home">
    <h3>Vibration Demo</h3>
    <div class="content">
      <button class="letter" @click="handleButtonOnClick">A</button>
      <button class="letter" @click="handleButtonOnClick">B</button>
      <button class="letter" @click="handleButtonOnClick">C</button>
      <button class="letter" @click="handleButtonOnClick">D</button>
      <button class="letter" @click="handleButtonOnClick">E</button>
      <button class="letter" @click="handleButtonOnClick">F</button>
      <button class="letter" @click="handleButtonOnClick">G</button>
      <button class="letter" @click="handleButtonOnClick">H</button>
      <button class="letter" @click="handleButtonOnClick">I</button>
      <button class="letter" @click="handleButtonOnClick">J</button>
      <button class="letter" @click="handleButtonOnClick">K</button>
      <button class="letter" @click="handleButtonOnClick">L</button>
      <button class="letter" @click="handleButtonOnClick">M</button>
      <button class="letter" @click="handleButtonOnClick">N</button>
      <button class="letter" @click="handleButtonOnClick">O</button>
      <button class="letter" @click="handleButtonOnClick">P</button>
      <button class="letter" @click="handleButtonOnClick">Q</button>
      <button class="letter" @click="handleButtonOnClick">R</button>
      <button class="letter" @click="handleButtonOnClick">S</button>
      <button class="letter" @click="handleButtonOnClick">T</button>
      <button class="letter" @click="handleButtonOnClick">U</button>
      <button class="letter" @click="handleButtonOnClick">V</button>
      <button class="letter" @click="handleButtonOnClick">W</button>
      <button class="letter" @click="handleButtonOnClick">X</button>
      <button class="letter" @click="handleButtonOnClick">Y</button>
      <button class="letter" @click="handleButtonOnClick">Z</button>
    </div>
  </div>
</template>

<script>

const morseAlphabet = {
  A: '·−',
  B: '−···',
  C: '−·−·',
  D: '−··',
  E: '·',
  F: '··−·',
  G: '−−·',
  H: '····',
  I: '··',
  J: '·−−−',
  K: '−·−',
  L: '·−··',
  M: '−−',
  N: '−·',
  O: '−−−',
  P: '·−−·',
  Q: '−−·−',
  R: '·−·',
  S: '···',
  T: '−',
  U: '··−',
  V: '···−',
  W: '·−−',
  X: '−··−',
  Y: '−·−−',
  Z: '−−··'
}

// Sound
const FREQ = 1100
const TYPE = 'square'

// Intervals
const INTERVAL = 30
const LONG = 400 // For  -
const SHORT = 200 // For .

const letterToPattern = letter => {
  const morse = morseAlphabet[letter]
  let pattern = []

  morse.split('').forEach(n => {
    pattern.push(n === '·' ? SHORT : LONG)
    pattern.push(INTERVAL)
  })

  return pattern
}

const calculateTotalTimeOfPattern = (pattern) =>
  pattern.reduce((accumulator, currentValue) => accumulator + currentValue)

export default {
  name: 'vibration',

  mounted () {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    this.masterVolume = this.audioCtx.createGain()
    this.masterVolume.gain.setValueAtTime(0.05, this.audioCtx.currentTime)
    this.masterVolume.connect(this.audioCtx.destination)
  },

  methods: {
    _playPattern (pattern) {
      const oscillator = this.audioCtx.createOscillator()
      oscillator.type = TYPE
      oscillator.frequency.setValueAtTime(1100, this.audioCtx.currentTime)

      let elapsed = 0

      pattern.forEach((dur, i) => {
        elapsed += dur / 1000
        oscillator.frequency.setValueAtTime(
          i % 2 === 0 ? 0 : FREQ,
          this.audioCtx.currentTime + elapsed
        )
      })

      oscillator.connect(this.masterVolume)
      oscillator.start()
      oscillator.stop(this.audioCtx.currentTime + elapsed)
    },

    _vibrate (pattern) {
      navigator.vibrate(pattern)
    },

    handleButtonOnClick (event) {
      // Exist if we are playing something
      if (this.playing) {
        return
      }

      this.playing = true

      const pattern = letterToPattern(event.srcElement.innerText)
      const totalTime = calculateTotalTimeOfPattern(pattern)

      this._vibrate(pattern)
      this._playPattern(pattern)

      setTimeout(
        () => { this.playing = false },
        totalTime
      )
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 3rem 0 0;
}

.content {
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem;

  .letter{
    color:#ffffff;
    background: #ff2d58;
    font-size: 3rem;
    margin: 2rem;
    @media screen and (min-width: 768px) {
     font-size:8rem;
    }
  }
}
</style>
