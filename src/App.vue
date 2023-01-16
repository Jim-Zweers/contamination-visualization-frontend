<template>
  <router-view/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'nunito sans';
  src: url('~@/assets/fonts/NunitoSans-Regular.ttf');
}

html, body{
  font-family: 'nunito sans';
  height: 100vh;
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  background-color: #E9EBF8;
}

.navbar{
  background-color: white;
  grid-row: 1 / span 2;
  margin: 25px;
}

.model{
  background-color: white;
  padding: 10px;
  margin: 30px;
}

.data{
  background-color: white;
  margin: 30px;
}

.navbar, .model, .data{
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.navbar{
  background-color: white;
  grid-row: 1 / span 2;
  margin: 25px;
}

</style>
