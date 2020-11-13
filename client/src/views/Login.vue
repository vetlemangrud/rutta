<template>
  <div class="login">
    <h2>Logg inn</h2>
    Navn: <input id="name" v-model="name" /><br />
    Passord: <input id="password" v-model="password" type="password" /><br />
    <button v-on:click="sendLogin">Logg inn</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      name: [],
      password: []
    };
  },
  methods: {
    sendLogin: function() {
      axios
        .post("http://localhost:9000/login", { name: "Vetle", password: "Hei" })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.login {
  width: 20%;
  margin: auto;
  text-align: right;
}
h2 {
  text-align: center;
}
</style>
