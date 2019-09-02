<template>
  <div class="dice w-50 mx-auto">
    <b-card bg-variant="dark" text-variant="white" header="Dice" class="text-center">
      <h3 v-if="dismissCountDown === 0 ">
        The dice value is:
        <b-badge variant="success">{{diceValue}}</b-badge>
      </h3>
      <div v-if="dismissCountDown === 0 ">
        <h5 v-if="diceValue <=2 ">The value was too low.</h5>
        <h5 v-else-if="diceValue == 3 ">The value was average.</h5>
        <h5 v-else-if="diceValue == 4 ">The value was average.</h5>
        <h5 v-else>The value was too high.</h5>
      </div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>Rolling...</p>
        <b-progress variant="success" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
      </b-alert>

      <b-button
        @click="showAlert"
        v-on:click="throwDice"
        variant="success"
        class="m-1"
      >Roll the dice</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    const between1And6 = 1 + Math.floor(Math.random() * 6);
    return {
      diceValue: between1And6,
      dismissSecs: 2,
      dismissCountDown: 0
    };
  },
  methods: {
    throwDice() {
      this.diceValue = 1 + Math.floor(Math.random() * 6);
      console.log(this.diceValue);
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>
<style scoped>
.dice {
  font-size: 2rem;
}
</style>