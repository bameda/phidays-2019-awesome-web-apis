<template>
  <div class="home">
    <img alt="PhiDays logo" src="../assets/img/logo.png">
    <div class="content">
      <p>
        Esta es una app para la presentación <strong>"Awesome Web APIs"</strong>
      </p>
      <h3>Demos:</h3>
      <ul>
        <li><router-link :to="{name: 'vibration'}">Vibration</router-link></li>
        <li><router-link :to="{name: 'vibration-and-sound'}">Vibration and Sound</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default { name: 'home' }
</script>

<style scoped lang="scss">
h3 {
  margin: 3rem 0 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: .5rem;
}
a {
  color: #ff2d58;
}
</style>
