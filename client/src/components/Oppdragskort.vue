<template>
  <div class="oppdragskort" v-if="!ferdig">
    <h1>{{ tittel }}</h1>
    <p>{{ beskrivelse }}</p>
    <button v-on:click="fullfoer" class="ferdigknapp">Ferdig</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HelloWorld",
  props: {
    tittel: String,
    beskrivelse: String,
    ferdig: Boolean
  },
  methods: {
    fullfoer: function () {
      this.ferdig = true;
      axios
        .put("http://localhost:9000/api/"+this.$vnode.key, {ferdig: true})
        .then((res) => this.oppdrag = res.data)
        .catch(error => console.log(error))
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .oppdragskort{
    background-color: #A1CCA5;
    width: 50%;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    color: #3E2F5B;
  }
  .ferdigknapp{
    background-color: #F34213;
  }
</style>
