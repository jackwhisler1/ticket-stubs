import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Define a proxy for API requests
      '/api': {
        target: 'https://api.setlist.fm',  // Replace with your target API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove /api prefix
        secure: false,  // Set to true if using HTTPS
      },
    },
  },
})
