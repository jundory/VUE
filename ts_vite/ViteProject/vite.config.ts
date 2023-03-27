import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { fileURLToPath, URL } from "url";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api': {
        target:'http://smartcity.gimhae.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  },
  resolve: {
    // alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    alias: {'@': path.resolve(__dirname, './src') },
  },
})
