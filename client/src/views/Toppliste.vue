<template>
  <div class="home">
    <p v-for="user in users" :key="user._id">
      {{ user.name }}: {{ user.experience }} XP
    </p>
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
      .then(
        res =>
          (this.users = res.data.sort((a, b) => b.experience - a.experience))
      ) //Sort the list based on experience. Most XP first
      .catch(error => console.log(error));
  }
};
</script>
