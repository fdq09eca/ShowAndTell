<template>
  <div id="viewDiv">
    <Logo :mapObject="this.mapObject" />
    <LonLatBox :mapObject="this.mapObject" />
    <ScaleBox :mapObject="this.mapObject" />
  </div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";
import Logo from "./Logo.vue";
import LonLatBox from "./LonLatBox.vue";
import ScaleBox from "./ScaleBox.vue";

export default {
  components: {
    Logo,
    LonLatBox,
    ScaleBox,
  },

  data() {
    const _mapStore = useMapStore();

    return {
      mapObject: null,
      mapStore: _mapStore,
    };
  },

  computed: {
    map() {
      return this.mapObject?.map;
    },
    view() {
      return this.mapObject?.view;
    },
    mapObj_id() {
      return this.mapObject?.id;
    },
  },

  beforeMount() {
    this.mapObject = this.mapStore.init_mapObject();
  },

  mounted() {
    this.mapStore.onMount(this.$el, this.mapObj_id);
  },
};
</script>

<style scoped>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";

#viewDiv {
  flex: 1;
  border: rgb(38, 38, 37) solid 2px;
}
</style>
