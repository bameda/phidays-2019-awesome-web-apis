<template>
  <div class="home">
    <h3>Animation Api Demo</h3>
    <div class="content">
      <div class="texts">
        <p ref="toAnimate1">
          <span>P</span>
          <i>h</i>
          <b>i</b>
        </p>
        <p ref="toAnimate2">
          <span>D</span>
          <i>a</i>
          <b>y</b>
          <i>s</i>
        </p>
      </div>
      <div class="buttons">
        <button v-if="areSync" @click="handleClickDesync">Desync</button>
        <button v-else @click="handleClickSync">Sync</button>

        <button v-if="arePause" @click="handleClickPlay">▷ Play</button>
        <button v-else @click="handleClickPause">▯▯ Pause</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animation',
  data: () => ({
    areSync: false,
    arePause: false
  }),
  mounted () {
    const animations = [
      { transform: 'scale(1) rotate(-2deg)', offset: 0, opacity: 1 },
      { transform: 'scale(.3) rotate(5deg)', opacity: 0.2, offset: 0.333333 },
      { transform: 'scale(.567) rotate(-3deg)', opacity: 0.567, offset: 0.666667 },
      { transform: 'scale(.5) rotate(2deg)', opacity: 0.4, offset: 1 }
    ]
    const timings = {
      duration: 700,
      iterations: Infinity,
      direction: 'alternate',
      fill: 'forwards',
      delay: 0,
      easing: 'ease-in-out'
    }

    this.player1 = this.$refs.toAnimate1.animate(animations, timings)
    this.player2 = this.$refs.toAnimate2.animate(animations, timings)
    this.player2.currentTime = 500 // get out of sync
  },
  methods: {
    handleClickSync () {
      this.player2.currentTime = this.player1.currentTime
      this.areSync = true
    },
    handleClickDesync () {
      this.player2.currentTime = this.player1.currentTime - (Math.random() * 1000)
      this.areSync = false
    },
    handleClickPlay () {
      this.player1.play()
      this.player2.play()
      this.arePause = false
    },
    handleClickPause () {
      this.player1.pause()
      this.player2.pause()
      this.arePause = true
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
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  max-width: 600px;
  padding: 2rem;
  margin: 0;
  color:  #ff2d58;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 8rem;
  text-align: center;

  @media all and (max-width: 440px) {
    font-size: 4rem;
  }
}

.buttons,
.texts {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

p {
  display: inline-block;
}

button{
  font-size: 1rem;
  width: 8rem;
  color: #ffffff;
  background: #ff2d58;
  padding: .8rem;
  margin: .5rem;
}
</style>
