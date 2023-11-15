<script>
import Map from "./components/Map.vue";

export default {
  components: {
    Map,
  },
};
</script>

<template>
  <div id="app-div">
    <Map></Map>
  </div>
</template>

<style>

html,
body {
  margin: 0;
  padding: 0;
}

#app-div {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
}
</style>
