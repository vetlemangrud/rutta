<template>
  <div class="login">
    <h2>Logg inn</h2>
    Navn: <input id="name" v-model="name" /><br />
    Passord: <input id="password" v-model="password" type="password" /><br />
    <button v-on:click="sendLogin">Logg inn</button>
    <p id="errorMesage" v-if="errorMessage">Feil brukernavn eller passord</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      name: [],
      password: [],
      errorMessage: false
    };
  },
  methods: {
    sendLogin: function() {
      axios
        .post("http://localhost:9000/login", { name: this.name, password: this.password})
        .then(res => {
          console.log(res);
          this.errorMessage = false;
          this.$router.push({ name: 'toppliste' });
        })
        .catch(error => {
          console.log(error);
          if (error.response.status == 400 || error.response.status == 401) {
            this.errorMessage = true;
          }
        });
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
