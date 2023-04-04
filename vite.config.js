import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Daijoubust/Simple-Weather-App.git',
  plugins: [react()],
})
