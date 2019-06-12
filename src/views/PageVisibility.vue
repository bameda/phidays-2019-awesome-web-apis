<template>
  <div class="home">
    <h3>Page Visibility Api Demo</h3>
    <div class="content">
      <video ref="video" src="../assets/video/tere_llio_parda.mp4" autoplay controls />
    </div>
  </div>
</template>

<script>

const getHidenAndVisibilityChange = () => {
  if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
    return { hidden: 'hidden', visibilityChange: 'visibilitychange' }
  }
  if (typeof document.msHidden !== 'undefined') {
    return { hidden: 'msHidden', visibilityChange: 'msvisibilitychange' }
  }
  if (typeof document.webkitHidden !== 'undefined') {
    return { hidden: 'webkitHidden', visibilityChange: 'webkitvisibilitychange' }
  }
  return { hidden: undefined, visibilityChange: undefined }
}

const { hidden, visibilityChange } = getHidenAndVisibilityChange()

const handleVisibilityChange = (videoElement) => {
  if (document[hidden]) {
    videoElement.pause()
  } else {
    videoElement.play()
  }
}

export default {
  name: 'page-visibility',
  mounted () {
    this.oldDocumentTitle = document.title

    if (typeof document.addEventListener === 'undefined' || hidden === undefined) {
      alert('This browser does not support Page Visibility API.')
      return
    }

    // Handle page visibility change
    document.addEventListener(
      visibilityChange,
      () => handleVisibilityChange(this.$refs.video),
      false
    )

    // When the video pauses, set the title.
    this.$refs.vide.addEventListener(
      'pause',
      () => { document.title = 'Paused' },
      false
    )

    // When the video plays, set the title.
    this.$refs.videt.addEventListener(
      'play',
      () => { document.title = 'Playing' },
      false
    )

    // When the video ends, set the original title.
    this.$refs.videt.addEventListener(
      'ended',
      () => { document.title = this.oldDocumentTitle },
      false
    )
  },
  beforeDestroy () {
    document.title = this.oldDocumentTitle
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

  video {
    max-width: 90vw;
  }
}
</style>
