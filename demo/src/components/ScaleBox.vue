<template>
  <div>
    <div id="scale-ratio">
      <p class="m-0 pl-1">{{ this.ratio }}</p>
    </div>
    <div id="scale-widget"></div>
  </div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

export default {
  data() {
    return { ratio: "n/a" };
  },

  methods: {
    updateRatio(view) {
      const value = Math.trunc(view.scale).toLocaleString("en-UK");
      this.ratio = `1 : ${value}`;
    },
  },

  mounted() {
    const view = useMapStore().view;

    reactiveUtils
      .whenOnce(() => view.ready)
      .then(() => {
        this.updateRatio(view);
      });

    reactiveUtils.watch(
      () => view?.zoom,
      (zoom) => {
        this.updateRatio(view);
      }
    );

    const scaleBar = new ScaleBar({
      view: view,
      unit: "dual",
      container: "scale-widget",
    });

    view.ui.add(this.$el, "bottom-left");
  },
};
</script>

<style scoped>
.m-0 {
  margin: 0;
}

.pl-1 {
  padding-left: 1px;
}

#scale-ratio {
  font-weight: bold;
  text-align: left;
}
</style>
