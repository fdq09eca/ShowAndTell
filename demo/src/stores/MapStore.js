import { defineStore } from "pinia";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import { v4 as uuid } from "uuid";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Vue from "vue";
import MapComponent from "../components/Map.vue";

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

      reactiveUtils.on(
        () => view,
        "drag",
        (event) => {
          const dragState = event.action;
          if (dragState === "update") {
            this.sync_mapObjects(mapObj);
          }
        }
      );

      reactiveUtils.watch(
        () => view.zoom,
        (zoom) => {
          this.sync_mapObjects(mapObj);
        }
      );

      this.mapObjects.push(mapObj);
      return mapObj;
    },

    createMapComponent(container = null) {
      const MapComponentClass = Vue.extend(MapComponent);
      const new_map = new MapComponentClass();
      new_map.$mount();
      container.appendChild(new_map.$el);
    },

    removeMap(id = null) {
      let mapObj = null;
      if (id == null) {
        mapObj = this.mapObjects.at(-1);
      } else {
        mapObj = this.get_mapObject(id);
      }
      
      this.mapObjects = this.mapObjects.filter((mo) => mo !== mapObj);
      
      mapObj?.view.container.remove();
      mapObj?.view.destroy();
      mapObj?.map.destroy();
    },

    sync_mapObjects(src) {
      this.mapObjects
        .filter((dst) => dst !== src)
        .forEach((dst) => {
          dst.view.extent = src.view.extent;
          dst.view.zoom = src.view.zoom;
          dst.view.scale = src.view.scale;
          dst.view.rotation = src.view.rotation;
        });
    },
  },
});
