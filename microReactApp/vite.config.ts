import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),

    qiankun('microReactApp', {
      useDevMode: true
    })
  ],

  server: {
    port: 3001
  }
})
