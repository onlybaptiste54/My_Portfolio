import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Baptiste.Beroual.github.io/', // Remplace 'nom-du-repository' par le nom de ton repository GitHub

})
