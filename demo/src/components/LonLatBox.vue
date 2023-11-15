<template>
  <div id="lat-lon-box">
    <p class="lat-lon-val">
      lat: <b>{{ this.lat }}</b>
    </p>
    <p class="lat-lon-val">
      lon: <b>{{ this.lon }}</b>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    mapObject: Object,
  },
  data() {
    const _lat = "n/a";
    const _lon = "n/a";

    return {
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
    const view = this.mapObject.view;
    view.ui.add(this.$el, "top-right");

    // setup event callback
    view.on("pointer-move", (event) => {
      const mapPoint = view.toMap({ x: event.x, y: event.y });
      this.setLatLon(mapPoint);
    });
  },
};
</script>

<style scoped>
#lat-lon-box {
  background-color: ivory;
  padding: 2px;
}

.lat-lon-val {
  margin: 0;
  padding: 0;
}
</style>
```
