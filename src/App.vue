<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h3>Filters at work</h3>
    <dl>
      <dt>Name</dt>
      <dd>{{ name | lowercase }}</dd>
      <dt>Birthdate</dt>
      <dd>{{ birthdate | date("short")}}
      <dt>Age</dt>
      <dd :class="isOld ? 'isOld' : 'isHip'">{{ age }}</dd>
      <dt>In Wallet</dt>
      <dd>{{ amountInWallet | currency }}</dd>
    </dl>
    <h4>Games ({{ favoriteGames | count }})</h4>
    <div v-for="g in favoriteGames" :key="g.name">
      <div>{{ g.name }} ( {{ g.platform }})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carlos Vasquez',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: "Carlos Vasquez",
      birthdate: new Date("1971-11-04"),
      age: 47,
      amountInWallet: 34.99,
      favoriteGames: [
        { name: "Halo", platform: "Xbox"},
        { name: "Fallout 3", platform: "PC"},
        { name: "Legend of Zelda: BOTW", platform: "Switch"},
      ]
    };
  },
  filters: {
    lowerCase: function (value){
      return value.toLowerCase();
    }
  },
  computed: {
    isOld: function () {
      return this.age > 35;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
.isOld {
  color: red;
}
.isHip {
  color: #222;
}
</style>
