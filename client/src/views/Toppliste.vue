<template>
  <div class="home">
      <p v-for="user in users" :key="user._id">{{ user.name }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:9000/api/user")
      .then(res => (this.users = res.data))
      .catch(error => console.log(error));
  }
};
</script>
