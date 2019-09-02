<template>
  <div class="calculator w-50 mx-auto">
    <b-card bg-variant="dark" header="Calculator" text-variant="white" class="text-center">
      <form>
        <b-form-input
          type="number"
          id="firstNumber"
          placeholder="First Number"
          v-model.number="firstNumber"
          class="mb-2"
        ></b-form-input>
        <b-form-input
          type="number"
          id="secondNumber"
          placeholder="Second Number"
          v-model.number="secondNumber"
        ></b-form-input>
        <b-form-select v-model="selected" :options="options"></b-form-select>

        <b-form-input type="number" id="result" v-model="result" class="mt-1"></b-form-input>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstNumber: "",
      secondNumber: "",
      selected: null,
      options: [
        { value: null, text: "Please select an operation" },
        { value: "add", text: "+" },
        { value: "deduct", text: "-" },
        { value: "devide", text: "/" },
        { value: "multiply", text: "*" }
      ]
    };
  },

  computed: {
    result: function() {
      let answer;

      console.log(this.firstNumber);
      console.log(this.secondNumber);

      if (this.selected === "add") {
        answer = this.firstNumber + this.secondNumber;
        console.log(answer);
      } else if (this.selected === "deduct") {
        answer = this.firstNumber - this.secondNumber;
      } else if (this.selected === "devide") {
        answer = this.firstNumber / this.secondNumber;
      } else if (this.selected === "multiply") {
        answer = this.firstNumber * this.secondNumber;
      } else {
        answer = 0;
      }

      return answer;
    }
  }
};
</script>
<style scoped>
.calculator {
  font-size: 2rem;
}
</style>