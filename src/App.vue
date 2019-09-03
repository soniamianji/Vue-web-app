<template>
  <div id="app">
    <b-container fluid>
      <h1 class="mt-5">Welcome to the world of entertainment.</h1>
    </b-container>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/dice">Dice</router-link>
      <router-link to="/faq">FAQ</router-link>
      <router-link to="/calc">Calculator</router-link>
      <router-link to="/clock">Clock</router-link>
      <router-link to="/counters">Counters</router-link>
    </div>

    <router-view />
    <!-- <footer>blub blub Sonia Mianji</footer> -->
  </div>
</template>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 2%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
