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
    this.mapObject.view.container = this.$el;
  },
};
</script>

<style scoped>
#viewDiv {
  flex: 1;
  border: rgb(38, 38, 37) solid 2px;
}
</style>
