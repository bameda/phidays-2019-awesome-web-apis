<template>
  <div class="home">
    <img alt="PhiDays logo" src="../assets/img/logo.png">
    <div class="content">
      <p>
        Esta es una app para la presentación <strong>"Awesome Web APIs"</strong>
      </p>
      <h3>Demos:</h3>
      <ul>
        <li>Demo 1: Web Api Manifesto</li>
        <li>Demo 2: <router-link :to="{name: 'geolocation'}">Geolocation Api</router-link></li>
        <li>Demo 3: <router-link :to="{name: 'battery'}">Battery Api</router-link></li>
        <li>Demo 4: <router-link :to="{name: 'vibration'}">Vibration Api</router-link></li>
        <li>Demo 5: <router-link :to="{name: 'media-capture-and-stream'}">Media Capture and Stream Api</router-link></li>
        <li>Demo 6: Ambient Light Api</li>
        <li>Demo 7: <router-link :to="{name: 'audio'}">Audio Api</router-link></li>
        <li>Demo 8: <router-link :to="{name: 'page-visibility'}">Page Visibility Api</router-link></li>
        <li>Demo 9: <router-link :to="{name: 'shared'}">Web Shared Api</router-link></li>
        <li>Demo 10: Service Worker</li>
        <!-- <li>Demo: <router-link :to="{name: 'service-worker'}">Service Worker</router-link></li> -->
        <li>Demo 12: <router-link :to="{name: 'notification'}">Notification Api</router-link></li>
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
  margin: 3.5rem 0;
}
ul {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
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
