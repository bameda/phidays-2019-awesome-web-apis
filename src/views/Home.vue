<template>
  <div class="home">
    <img alt="PhiDays logo" src="../assets/img/logo.png">
    <div class="content">
      <p>
        Esta es una app para la presentación <strong>"Awesome Web APIs"</strong>
      </p>
      <h3>Demos:</h3>
      <ul>
        <li>Web Api Manifesto</li>
        <li><router-link :to="{name: 'geolocation'}">Geolocation Api</router-link></li>
        <li><router-link :to="{name: 'battery'}">Battery Api</router-link></li>
        <li><router-link :to="{name: 'vibration'}">Vibration Api</router-link></li>
        <li><router-link :to="{name: 'media-capture-and-stream'}">Media Capture and Stream Api</router-link></li>
        <li>Ambient Light Api</li>
        <li><router-link :to="{name: 'audio'}">Audio Api</router-link></li>
        <li><router-link :to="{name: 'page-visibility'}">Page Visibility Api</router-link></li>
        <li><router-link :to="{name: 'shared'}">Web Shared Api</router-link></li>
        <li>Service Worker</li>
        <li><router-link :to="{name: 'notification'}">Notification Api</router-link></li>
        <li><router-link :to="{name: 'animations'}">Animations</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default { name: 'home' }
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}
h3 {
  margin: 2rem 0 .5rem 0;
}
ul {
  text-align: left;
  list-style: decimal;
  padding: 0 0 0 1rem;
  margin: 0 0 0 1rem;
}
li {
  margin: .5rem;
}
a {
  color: #ff2d58;
}
</style>
