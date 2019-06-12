<template>
  <div class="home">
    <h3>Geolocation Demo</h3>
    <div class="content">
      <button class="button" @click="handleButtonOnClick">Geolocate me now!!</button>
      <div class="data" v-if="position">
        <div>LATITUDE: <strong>{{ position.coords.latitude }}</strong></div>
        <div>LONGITUDE: <strong>{{ position.coords.longitude }}</strong></div>
        <div>ACCURACY: <strong>{{ position.coords.accuracy }}</strong></div>
      </div>
    </div>
  </div>
</template>

<script>
const geoOptions = {
  enableHighAccuracy: true
}

export default {
  name: 'geolocation',
  data: () => ({
    position: undefined
  }),
  methods: {
    _onGeoSuccess (pos) {
      this.position = pos
    },

    _onGeoError () {
      alert('ERROR: Geolocation error. Try again')
    },

    handleButtonOnClick (event) {
      this.position = undefined

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          this._onGeoSuccess,
          this._onGeoError,
          geoOptions
        )
      } else {
        alert('ERROR: This device cannot geolocate you.')
      }
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

  .button{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    color:#ffffff;
    background: #ff2d58;
    padding: .5rem;
  }

  .data {
    list-style: none;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
