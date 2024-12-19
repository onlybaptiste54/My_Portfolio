import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Baptiste.Beroual.github.io/', // Assure-toi que le nom du dépôt est correct


})
