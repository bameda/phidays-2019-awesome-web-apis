<template>
  <div class="home">
    <h3>Page Visibility Demo</h3>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'page-visibility'
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
