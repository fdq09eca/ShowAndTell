<template>
  <div id="lat-lon-box" style="background-color: ivory; padding: 2px">
    <p style="margin: 0; padding: 0;">
      lat: <b>{{ this.lat }}</b>
    </p>
    <p style="margin: 0; padding: 0">
      lon: <b>{{ this.lon }}</b>
    </p>
  </div>
</template>

<script>
import { useMapStore } from "../stores/MapStore";
export default {
  data() {
    const _mapStore = useMapStore();
    const _lat = "n/a";
    const _lon = "n/a";

    return {
      mapStore: _mapStore,
      lat: _lat,
      lon: _lon,
    };
  },

  methods: {
    setLatLon(mapPoint_) {
      this.lat = mapPoint_.latitude?.toFixed(3);
      this.lon = mapPoint_.longitude?.toFixed(3);
    },
  },

  mounted() {
    console.log("LonLatBox.vue::mounted()");
    const view = this.mapStore.view;
    view.ui.add(this.$el, "top-right");

    // setup event callback
    view.on("pointer-move", (event) => {
      const mapPoint = view.toMap({ x: event.x, y: event.y });
      this.setLatLon(mapPoint);
    });
  },
};
</script>
