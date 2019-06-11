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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 3rem;
  background-color: #ff2d58;
  color: #ffffff;
  box-shadow: 0 5px 5px -2px rgba(0,0,0,.3);

  a {
    color: #ffffff;
    margin: 0 .2rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffffff;
      text-decoration: underline;
      font-weight: 800;
    }
  }
}

.view {
  margin: 2rem;
}
</style>
