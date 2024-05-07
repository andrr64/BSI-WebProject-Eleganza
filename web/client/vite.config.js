import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': {
        target: 'http://localhost:3000', // Atur target ke URL server backend Anda
        secure: false
      },
    }
  },
  plugins: [react()],
})
