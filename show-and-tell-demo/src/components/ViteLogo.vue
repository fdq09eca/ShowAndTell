<template>
  <img src="../../public/vite.svg" alt="vite_logo" />
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

  mounted() {
    const view = this.mapStore.view;
    view.ui.add(this.$el, "top-right");
  },
};
</script>
