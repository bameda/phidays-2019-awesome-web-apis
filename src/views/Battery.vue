<template>
  <div class="home">
    <h3>Battery Demo</h3>
    <div class="content">
      <div v-if="isBatteryApiSupported">
        <div class="battery">
          <div class="level" :style="{width: level}">
            {{level}}
            <div class="charging" v-if="isCharging">⚡</div>
          </div>
        </div>
      </div>
      <div v-else>
        -- This browser does not support Battery API --
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'battery',
  data: () => ({
    isBatteryApiSupported: false,
    level: undefined,
    isCharging: false
  }),
  mounted () {
    if (!navigator.getBattery) {
      return
    }

    this.isBatteryApiSupported = true

    navigator.getBattery().then((battery) => {
      const onChargingChange = () => {
        this.isCharging = battery.charging
      }

      const onLevelChange = () => {
        this.level = `${battery.level * 100}%`
      }

      onChargingChange()
      battery.addEventListener('chargingchange', onChargingChange)

      onLevelChange()
      battery.addEventListener('levelchange', onLevelChange)
    })
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

.battery {
  background-color: #fff;
  border: 2px solid #000;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 10rem;
  margin: .5rem 0;

  &::after {
    background-color: #fff;
    border: 2px solid #000;
    content: "";
    display: block;
    height: 3rem;
    position: absolute;
    right: -12px;
    top: 6px;
    width: 12px;
  }

  & .level {
    background-color: #ff2d58;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    & .charging {
      font-weight: 900;
      color: yellow;
      padding-left: .1rem;
      animation: blinker 1s linear infinite;
    }
  }
}
</style>
