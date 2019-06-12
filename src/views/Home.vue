<template>
  <div class="home">
    <img alt="PhiDays logo" src="../assets/img/logo.png">
    <div class="content">
      <p>
        Esta es una app para la presentación <strong>"Awesome Web APIs"</strong>
      </p>
      <h3>Demos:</h3>
      <ul>
        <li>Demo: <router-link :to="{name: 'geolocation'}">Geolocation</router-link></li>
        <li>Demo: <router-link :to="{name: 'battery'}">Battery</router-link></li>
        <li>Demo: <router-link :to="{name: 'vibration'}">Vibration</router-link></li>
        <li>Demo: <router-link :to="{name: 'media-capture-and-stream'}">Media Capture and Stream</router-link></li>
        <li>Demo: <router-link :to="{name: 'page-visibility'}">Page Visibility</router-link></li>
        <li>Demo: <router-link :to="{name: 'audio'}">Audio</router-link></li>
        <!-- <li>Demo: <router-link :to="{name: 'service-worker'}">Service Worker</router-link></li> -->
        <!-- <li>Demo: <router-link :to="{name: 'notifications'}">Notifications</router-link></li> -->
        <!-- <li>Demo: <router-link :to="{name: 'animations'}">Animations</router-link></li> -->
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
