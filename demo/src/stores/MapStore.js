import { defineStore } from "pinia";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import { v4 as uuid } from "uuid";

export const useMapStore = defineStore("mapStore", {
  state() {
    const mapObjects = [];
    return { mapObjects: mapObjects };
  },

  getters: {},

  actions: {
    get_mapObject(id) {
      if (id == null) {
        throw new Error("mapStore::get_mapObject(id) id is null");
      }
      const mo = this.mapObjects.find((obj) => obj.id === id);

      if (mo == null) {
        throw new Error(`mapStore::get_mapObject(id) id ${id} not found`);
      }

      return mo;
    },

    init_mapObject(id = uuid()) {
      const map = new Map({
        basemap: "topo-vector",
      });

      const view = new MapView({
        container: null,
        map: map,
        center: [-2.28, 53.474], // longitude, latitude
        zoom: 6,
      });

      const mapObj = { id: id, map: map, view: view };

      this.mapObjects.push(mapObj);
      return mapObj;
    },

    onMount(container_, id) {
      const v = this.get_mapObject(id)?.view;

      if (v == null) {
        throw new Error(`view is null`);
      }

      v.container = container_;
      this.doSomething();
    },

    doSomething() {
      // console.log("mapStore::doSomething");
    },
  },
});
