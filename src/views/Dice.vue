<template>
  <div class="home">
    <h1>The dice value is: {{diceValue}}</h1>
    <h3 v-if="diceValue <=2 ">The value was too low.</h3>
    <h3 v-else-if="diceValue == 3 ">The value was average.</h3>
    <h3 v-else-if="diceValue == 4 ">The value was average.</h3>
    <h3 v-else>The value was too high.</h3>
    <button v-on:click="throwDice">Roll the dice</button>
  </div>
</template>

<script>
export default {
  data() {
    const between1And6 = 1 + Math.floor(Math.random() * 6);
    return {
      diceValue: between1And6
    };
  },
  methods: {
    throwDice() {
      this.diceValue = 1 + Math.floor(Math.random() * 6);
      console.log(this.diceValue);
    }
  }
};
</script>
