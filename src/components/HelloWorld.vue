<template>
  <div class="hello">
    <h1>{{name}}, {{ msg }} </h1>
    <h2>{{ num }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p>{{ count }}</p>
    <button @click="incrementCount">Increment</button>
    <button @click="decrementCount">Decrement</button>
    <p v-if="isAvailable">Available</p>
    <p v-if="inventory > 10">we have {{ inventory }} items in stock</p>
    <p v-else>Hurry we're almost out of stock</p>
    <p v-show="username">Name : {{ username }}</p>

    <input type="text" v-model="username" v-focus />
    <button v-show="username" @click="incrementCount">Submit</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    name : Object
  },
  data() {
    return {
      count: 0,
      // secondCount: 20,
      username: "",
      isAvailable: true,
      inventory: 2,
      num: Date.now(),
    };
  },
  mounted() {
    // this.count+=20
    console.log("has been mounted");
  },
  beforeMount() {
    console.log("before mounted");
  },
  beforeCreate() {
    console.log("before created");
  },
  created() {
    console.log("has been created");
  },
  beforeUpdate() {
    console.log("before updated");
  },
  updated() {
    console.log("has been updated");
  },

  methods: {
    incrementCount() {
      if (this.count < 20) {
        this.count++;
      }
    },
    decrementCount() {
      this.count -= 5;
    },
  },
  //local directives
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
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
