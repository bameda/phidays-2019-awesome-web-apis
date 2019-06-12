<template>
  <div class="home">
    <h3>Media Capture and Stream Demo</h3>

    <div class="content" v-if="!isSupported">
      This device does not support media capture and streaming.
    </div>

    <div class="content" v-else>
      <video class="video" ref="video" autoPlay />
      <div class="controls" v-if="showControlls">
        <button @click="takeVideoSnap">
          📷 Take Photo
        </button>
        <button @click="changeVideoDevice"  v-if="areMultipleVideoDevices">
          易 Switch camera
        </button>
      </div>
      <div class="strip">
        <img class="strip_item"  v-for="s in snaps" :key="s" :src="s" />
      </div>
    </div>
  </div>
</template>

<script>
// Note: code based on https://github.com/soyguijarro/magic-web/
//       by Ramon Gijarro (@soyguijarro)

const isMediaDevicesSupported = 'mediaDevices' in navigator &&
  'enumerateDevices' in navigator.mediaDevices

const getVideoDevices = () =>
  navigator.mediaDevices.enumerateDevices().then(
    devices => devices.filter(device => device.kind === 'videoinput')
  )

const getMediaDeviceStream = (deviceId) =>
  navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: { exact: deviceId }
    }
  })

const stopMediaDeviceStream = (stream) => {
  const videoTracks = stream.getVideoTracks()
  videoTracks[0].stop()
}

const takeVideoSnap = (stream, videoElement) => {
  if ('ImageCapture' in window) {
    const videoTracks = stream.getVideoTracks()
    const imageCapture = new window.ImageCapture(videoTracks[0])
    return imageCapture.takePhoto().then(URL.createObjectURL)
  }

  // Vintage mode
  const canvas = document.createElement('canvas')
  canvas.width = videoElement.videoWidth * 0.25
  canvas.height = videoElement.videoHeight * 0.25
  const context = canvas.getContext('2d')
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
  return Promise.resolve(canvas.toDataURL('image/jpg'))
}

export default {
  name: 'media-capture-and-stream',
  data: () => ({
    isSupported: true,
    hasErrored: false,
    showControlls: false,
    areMultipleVideoDevices: false,
    snaps: []
  }),
  mounted () {
    this._videoDevices = []
    this._currentVideoDeviceIndex = 0
    this._currentVideoStream = null

    if (!isMediaDevicesSupported) {
      this.isSupported = false
    }

    this.setVideoDevices().then(
      () => this.setCurrentVideoDeviceStream()
    )
  },
  destroyed () {
    if (this._currentVideoStream) {
      stopMediaDeviceStream(this.currentVideoStream)
    }
  },
  methods: {
    setVideoDevices () {
      return getVideoDevices()
        .then(videoDevices => {
          this._videoDevices = videoDevices

          this.hasErrored = false
          this.areMultipleVideoDevices = videoDevices.length > 1

          return this._setCurrentVideoDeviceStream()
        }).catch(() => {
          this.hasErrored = true
        })
    },
    setCurrentVideoDeviceStream () {
      if (this._currentVideoStream) stopMediaDeviceStream(this._currentVideoStream)

      const selectedVideoDevice = this._videoDevices[this._currentVideoDeviceIndex]
      return getMediaDeviceStream(selectedVideoDevice.deviceId)
        .then((stream) => {
          this._currentVideoStream = stream
          this.$refs.video.srcObject = stream
          this.showControlls = true
        })
    },
    changeVideoDevice () {
      this._currentVideoDeviceIndex = this._currentVideoDeviceIndex < this._videoDevices.length - 1
        ? this._currentVideoDeviceIndex + 1
        : 0

      this.setCurrentVideoDeviceStream()
        .catch(() => { this.hasErrored = true })
    },
    takeVideoSnap () {
      if (!this._currentVideoStream) return

      takeVideoSnap(this._currentVideoStream, this.$refs.video)
        .then(newSnap => {
          this.snaps = [newSnap, ...this.snaps]
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
  font-family: "Times", "Times New Roman", "serif", "sans-serif", "EmojiSymbols";
  font-size: 1rem;
  color: #ffffff;
  background: #ff2d58;
  padding: .8rem;
  margin: .5rem;
}

.controls {
  padding: 1rem;
}

.strip {
  .strip_item {
    padding: .3rem;
  }
}
</style>
