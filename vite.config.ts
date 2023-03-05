import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
          react_vendor: ["react"],
          react_dom_vendor: ["react-dom"],
        },
      },
    },
  },
})
