<template>
  <div id="app">
    <h1>rutta</h1>
    <div id="nav">
      <router-link to="/">Toppliste</router-link> |
      <router-link to="/oppdrag">Oppdrag</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f34213;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #f34213;
}

#nav a.router-link-exact-active {
  color: #a1cca5;
}
</style>
