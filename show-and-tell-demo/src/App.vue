<!-- <script>
import Map from "./components/Map.vue";
import esriConfig from "@arcgis/core/config.js";
esriConfig.apiKey =
  "AAPK71940b33b03d4e4c99613292f1444a9fUeF221r0E9WRtGtNDyA45xaDnza7VTZHfM5epuWxZKcXHLMDPSeKutOwDdmPCifc";
export default {
  components: {
    Map,
  },
};
</script> -->

<script setup>
import Map from "./components/Map.vue";
import esriConfig from "@arcgis/core/config.js";

esriConfig.apiKey = import.meta.env.VITE_ESRI_API_KEY;
</script>

<template>
  <Map />
</template>

<style scoped></style>
