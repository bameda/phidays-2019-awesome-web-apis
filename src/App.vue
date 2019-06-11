<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <a href="#TODO" title="Ver Slides de la presentación">Slides</a>
    </div>
    <router-view class="view" />
  </div>
</template>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #3452d4;
    &.router-link-exact-active {
      color: #ff2d58;
      font-weight: 800;
    }
  }
}
</style>
