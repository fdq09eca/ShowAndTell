<template>
  <div id="viewDiv"></div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";

export default {
  data() {
    const _mapStore = useMapStore();

    return {
      name: "map",
      mapStore: _mapStore,
    };
  },

  methods: {
    doIt() {
      console.info("Map.vue::doIt()");
      console.info("this.mapStore.view.zoom: ", this.mapStore.view.zoom);
    },
  },

  mounted() {
    this.mapStore.onMount(this.$el);

    this.mapStore.view.when(() => {
      this.doIt();
    });
  },
};
</script>

<style scoped>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";

#viewDiv {
  height: 100vh;
}
</style>
