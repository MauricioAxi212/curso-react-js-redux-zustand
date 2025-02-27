import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//definir configuraciones de nuestro desarrollo
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
   port: 3000
  },
})
