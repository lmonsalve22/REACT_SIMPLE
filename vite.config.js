import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REACT_SIMPLE/' // <-- cambia esto al nombre de tu repo en GitHub
})
