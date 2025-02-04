import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
],
build: {
  outDir: 'dist',
  // Ensure proper asset handling 
  assetsDir: 'assets',
  //Generate proper asset names
  rollupOptions: {
    output:{
      assetFileNames: 'assets/[name]-[hash][extname]',
      chunkFileNames: 'assets/[name]-[hash].js',
      entryFileNames: 'assets/[name]-[hash].js',
    }
  }
}
})
