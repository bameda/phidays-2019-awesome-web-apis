<template>
  <div id="app">
    <header>
      <img class="logo" alt src="./assets/img/logo-letters.png" />
      <div id="nav">
        <router-link :to="{name: 'home'}">Home</router-link> |
        <a href="https://slides.com/bameda/awesome-webapis/" title="See slides" target="_blank">Slides</a>
      </div>
    </header>
    <router-view class="view" />
  </div>
</template>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";

@keyframes blinker {
  50% { opacity: 0; }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

header {
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 3.5rem;
  background-color: #ff2d58;
  color: #ffffff;
  box-shadow: 0 5px 5px -2px rgba(0,0,0,.3);

  .logo {
    padding-left: 1.5rem;
  }

  #nav {
    padding-right: 1.5rem;
  }

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
  padding-top: 3rem;
}
</style>
