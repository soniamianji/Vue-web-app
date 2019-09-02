<template>
  <b-button variant="success" size="lg" v-on:click="increament">{{this.startValue}}</b-button>
</template>

<script>
export default {
  data() {
    return {
      doThecounting: this.startValue
    };
  },
  name: "countercompo",
  props: {
    startValue: Number,
    incValue: Number
  },
  methods: {
    increament() {
      this.startValue += this.incValue;
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
