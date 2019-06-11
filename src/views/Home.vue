<template>
  <div class="home">
    <img alt="PhiDays logo" src="../assets/img/logo.png">
    <div class="content">
      <p>
        Esta es una app para la presentación <strong>"Awesome Web APIs"</strong>
      </p>
      <h3>Demos</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
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
  list-style-type: upper-roman;
  padding: 0;
}
li {
  margin: .5rem;
}
a {
  color: #ff2d58;
}
</style>
