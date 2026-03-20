import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Expose REACT_APP_* so existing CRA-style .env keys still work alongside VITE_*
  envPrefix: ['VITE_', 'REACT_APP_'],
})
