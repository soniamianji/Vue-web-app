<template>
  <div class="faq">
    <b-card bg-variant="dark" header="FAQ " text-variant="white" class="text-center w-50 mx-auto">
      <div role="tablist">
        <b-card no-body class="mb-1" v-for="(item) in faq" v-bind:key="item.index">
          <b-button
            block
            v-on:click="showAnswers(item)"
            variant="secondary"
          >{{ item.question }} {{item.index}}</b-button>

          <!-- <b-collapse id="item.answer" accordion="my-accordion" role="tabpanel"> -->
          <b-card-body v-if="item.showAnswer === true">
            <b-card-text class="customTextVariant">{{ item.answer }}</b-card-text>
          </b-card-body>
          <!-- </b-collapse> -->
        </b-card>
        <h6 class="mt-3">Total number of FAQ is {{faq.length}}</h6>
      </div>
      <!-- <ul id="faqList">
        <li v-for="(item) in faq" v-bind:key="item.index">{{ item.question }} - {{index}}</li>
      </ul>-->
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    const faq = [
      {
        question: "How old are you?",
        answer: "I'm 10 years old.",
        showAnswer: true
      },
      {
        question: "What's your favorite color?",
        answer: "My favorite color is purple.",
        showAnswer: false
      },
      {
        question: " Why should I, the audience, care?",
        answer: "My favorite color is purple.",
        showAnswer: false
      },
      {
        question: "Why will you win?",
        answer: "My favorite color is purple.",
        showAnswer: false
      },
      {
        question: "Does it work?",
        answer: "My favorite color is purple.",
        showAnswer: false
      }
    ];
    return {
      faq
    };
  },
  methods: {
    showAnswers(item) {
      item.showAnswer = !item.showAnswer;
    }
  }
};
</script>
<style scoped>
.customTextVariant {
  color: black !important;
}
.faq {
  font-size: 2rem;
}
</style>