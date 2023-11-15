<template>
  <div>
    <img src="/vite.svg" alt="vite_logo" />
  </div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";

export default {
  mounted() {
    const view = useMapStore().view;
    view.ui.add(this.$el, "bottom-right");
  },
};
</script>
