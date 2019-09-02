<template>
  <div class="counter w-50 mx-auto">
    <b-card bg-variant="dark" header="Counter" text-variant="white" class="text-center">
      <countercompo v-bind:startValue="0" v-bind:incValue="1" class="m-3"></countercompo>
      <countercompo v-bind:startValue="45" v-bind:incValue="5" class="m-3"></countercompo>
      <countercompo v-bind:startValue="33" v-bind:incValue="10" class="m-3"></countercompo>
    </b-card>
  </div>
</template>

<script>
import countercompo from "../components/countercompo";
export default {
  components: { countercompo }
};
</script>
<style scoped>
.counter {
  font-size: 2rem;
}
</style>
