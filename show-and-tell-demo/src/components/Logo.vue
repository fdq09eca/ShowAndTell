<template>
  <div>
    <img
      src="https://assets.manchester.ac.uk/logos/hi-res/TAB_UNI_MAIN_logo/Coloured_backgrounds/TAB_col_background.png"
      alt="logo"
      width="100"
    />
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
