import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ShowAndTell/show-and-tell-demo/',
  plugins: [vue()],
})
