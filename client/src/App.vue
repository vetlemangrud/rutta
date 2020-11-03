<template>
  <div id="app">
    <div id="nav">
      <h1>rutta</h1>
      <router-link to="/">Toppliste</router-link> |
      <router-link to="/oppdrag">Oppdrag</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F34213;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #F34213;
}

#nav a.router-link-exact-active {
  color: #A1CCA5;
}
</style>
