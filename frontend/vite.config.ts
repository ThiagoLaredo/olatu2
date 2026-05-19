import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Define a base URL para produção
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3001' // redireciona requisições /api para o backend
    }
  }
})