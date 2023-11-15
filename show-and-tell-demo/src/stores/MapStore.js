import { defineStore } from "pinia";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";

export const useMapStore = defineStore("mapStore", {
  state() {
    const map = new Map({
      basemap: "topo-vector",
    });

    const view = new MapView({
      map: map,
      zoom: 6,
      center: [-2.244, 53.483], // lon, lat
    });

    return { map: map, view: view };
  },

  getters: {
    // map() {
    //   console.log("mapStore::getters::map");
    //   return this._map;
    // },
  },

  actions: {
    init_mapView(container) {
      this.view.container = container;
    },

    onMount(container) {
      this.init_mapView(container);
      this.doSomething();
    },

    doSomething() {
      console.log("mapStore::doSomething");
    },
  },
});
