import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ShowAndTell/",
  plugins: [vue()],
  build: {
    target: "esnext", // you can also use 'es2020' here
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // you can also use 'es2020' here
    },
  },
});
