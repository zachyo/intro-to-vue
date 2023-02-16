<template>
  <div class="container">
    <div class="jokes" v-for="joke in data.results" :key="joke.id">
      <div class="joke">
        <p>{{ joke.joke }}</p>
      </div>
      <p>{{ count }}</p>
      <p>{{ dooubleCount }}</p>
      <button @click="incrementVal">Add Count</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dogJokes",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    axios
      .get("https://icanhazdadjoke.com/search?term=dog", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => (this.data = res.data));
  },
  computed: {
    count() {
      console.log("here");
      return this.$store.state.count;
    },
    dooubleCount() {
    console.log('here2')
      return this.$store.getters.doubleCount;
    },
  },
  methods: {
    incrementVal(val) {
      this.$store.dispatch("asyncIncrement", val);
    },
  },
};
</script>
