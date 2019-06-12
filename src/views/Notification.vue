<template>
  <div class="home">
    <h3>Notification Api Demo</h3>
    <div class="content">
      <button @click="handleSendNotification">
        Notify me!!
      </button>
    </div>
  </div>
</template>

<script>
import icon from '../assets/img/logo.png'

const createNotification = () => {
  const text = 'Hello, PhiDays lovers!!'
  const options = {
    body: `Thanks for coming to this talk.\nNow it's ${new Date().toLocaleTimeString()}`,
    icon: icon,
    badge: icon,
    vibrate: [200, 100, 200],
    persistent: true
  }
  // With Notification API
  return new Notification(text, options)

  // With Service Worker API
  // return navigator.serviceWorker.ready.then((registration) =>
  //   registration.showNotification(text, options)
  // )
}

export default {
  name: 'notification',
  methods: {
    handleSendNotification: () => {
      if (!('serviceWorker' in navigator)) {
        alert('This browser does not support Service Worker')
        return
      }

      if (!('Notification' in window)) {
        alert('This browser does not support Notification Web API')
        return
      }

      if (Notification.permission === 'granted') {
        // If it's okay let's create a notification
        createNotification()
      } else if (Notification.permission !== 'denied') {
        // Otherwise, we need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            createNotification()
          }
        })
      }
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
