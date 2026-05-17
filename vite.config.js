import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: 'all',
    proxy: {
      // 🚀 MASTER FIX: Ab local requests seedhe Hugging Face live server par bypass hongi
      '/api': {
        target: 'https://suraj5632-resuranker-backend.hf.space', 
        changeOrigin: true,
        secure: false,
      }
    }
  },
})