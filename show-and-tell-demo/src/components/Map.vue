<template>
  <div id="viewDiv">
    <ViteLogo />
    <LonLatBox />
    <ScaleBox />
  </div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";
import ViteLogo from "./ViteLogo.vue";
import LonLatBox from "./LonLatBox.vue";
import ScaleBox from "./ScaleBox.vue";

export default {
  components: {
    ViteLogo,
    LonLatBox,
    ScaleBox,
  },

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
