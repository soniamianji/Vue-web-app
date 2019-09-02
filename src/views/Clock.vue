<template>
  <div class="clock w-50 mx-auto">
    <b-card bg-variant="dark" header="Clock" text-variant="white" class="text-center">
      <b-card-text>The current time is: {{time}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    let time = "";
    return { time };
  },
  created() {
    let updateTime = setInterval(this.showTime, 1000);
  },
  destroyed() {
    clearInterval(updateTime);
  },

  methods: {
    showTime() {
      const now = new Date();
      this.time =
        now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      return this.time;
    }
  }
};
</script>

<style scoped>
.clock {
  font-size: 2rem;
}
</style>
