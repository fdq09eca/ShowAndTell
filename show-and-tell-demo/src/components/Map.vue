<template>
  <div id="viewDiv"></div>
</template>

<script>
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";


export default {
  data() {
    return {
      name: "map",
    };
  },
  
  methods: {
    doIt() {
      console.log(`Hello ${this.name}`);
    },
  },
  
  mounted() {
    

    const map = new Map({
      basemap: "topo-vector",
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [-98, 35],
    });

    view.when(() => {
      this.doIt();
    });
  },
};
</script>

<style>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";

#viewDiv {
  height: 100vh;
}
</style>
