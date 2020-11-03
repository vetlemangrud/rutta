<template>
  <div class="home">
    <Oppdragskort v-for="opp in oppdrag" :key="opp._id" :tittel="opp.tittel" :beskrivelse="opp.beskrivelse" :ferdig="opp.ferdig"/>
  </div>
</template>

<script>
import axios from 'axios';

// @ is an alias to /src
import Oppdragskort from "@/components/Oppdragskort.vue";

export default {
  name: "home",
  data() {
    return{
      oppdrag: []
    }
  },
  mounted() {
    axios
      .get("http://192.168.14.152:9000/api")
      .then((res) => this.oppdrag = res.data)
      .catch(error => console.log(error))
  },
  components: {
    Oppdragskort
  }
};
</script>
