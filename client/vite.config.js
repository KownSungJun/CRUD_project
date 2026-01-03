import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://turbo-fishstick-95wpjj594vv2xx4j-3000.app.github.dev',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
