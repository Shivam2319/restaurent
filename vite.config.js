// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),  // This was missing - required for React projects
    tailwindcss(),
  ],
  base: '/',  // This is crucial for correct asset paths in production
  build: {
    outDir: 'dist',  // Explicit output directory
    emptyOutDir: true,  // Clear the directory before building
  },
  server: {
    historyApiFallback: true,  // Helps with routing in development
  }
})