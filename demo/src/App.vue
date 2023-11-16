<template>
  <div id="app-div">
    <div id="overlay-btns-div">
      <button id="add-map-btn" @click="this.addMap">Add Map</button>
      <button id="remove-map-btn" @click="this.removeMap">Remove Map</button>
    </div>
    <Map></Map>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import { useMapStore } from "./stores/MapStore";
export default {
  components: {
    Map,
  },

  methods: {
    addMap() {
      useMapStore().createMapComponent(this.$el);
    },

    removeMap() {
      useMapStore().removeMap();
    },
  },
};
</script>

<style>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";
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
  position: relative;
}

#overlay-btns-div {
  position: absolute;
  top: 85vh;
  left: 40vw;
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
}

button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  opacity: 0.5;
}

button:hover {
  opacity: 1;
}

#remove-map-btn {
  background-color: red;
  color: white;
  font-weight: bold;
}

#add-map-btn {
  background-color: blue;
  color: white;
  font-weight: bold;
}
</style>
