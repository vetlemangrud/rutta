<template>
  <div class="loginInfo">
    <p><router-link to="/login" v-if="!user">Logg inn</router-link></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginInfo",
  data() {
    return {
      user: false
    };
  },
  mounted() {
    axios
      .get("http://localhost:9000/me")
      .then(res => (console.log(res)))
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginInfo {
  text-align: right;
  margin: 10px;
}
</style>
