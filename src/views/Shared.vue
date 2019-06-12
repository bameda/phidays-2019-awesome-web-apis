<template>
  <div class="home">
    <h3>Web Share Api Demo</h3>
    <div class="content">
      <button @click="handleShareSlides">
        Share slides!!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shared',
  methods: {
    handleShareSlides: () => {
      if (!navigator.share) {
        alert('This browser does not support Web Share API')
        return
      }

      navigator.share({
        title: 'Awesome Web API - Slides',
        text: 'Slides of my talk "Awesome Web APIs"',
        url: 'https://slides.com/bameda/awesome-webapis/'
      })
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
}

button{
  font-size: 3rem;
  color: #ffffff;
  background: #ff2d58;
  padding: .8rem;
  margin: .5rem;
}
</style>
