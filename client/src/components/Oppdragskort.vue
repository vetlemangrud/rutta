<template>
  <div class="oppdragskort" v-if="!ferdig">
    <h1>{{ tittel }}</h1>
    <p>{{ beskrivelse }}</p>
    <button v-on:click="fullfoer" class="ferdigknapp">Ferdig</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Oppdragskort",
  props: {
    tittel: String,
    beskrivelse: String,
    ferdig: Boolean
  },
  methods: {
    fullfoer: function() {
      this.ferdig = true;
      axios
        .put("http://localhost:9000/api/oppdrag/" + this.$vnode.key, {
          ferdig: true
        })
        .then(res => (this.oppdrag = res.data))
        .catch(error => console.log(error));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.oppdragskort {
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px;
  color: #f34213;
  border: #f34213 3px solid;
  border-radius: 20px;
}
.ferdigknapp {
  background-color: #f34213;
}
</style>
