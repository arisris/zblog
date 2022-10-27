
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

const config = defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['!**/node_modules/@zblog/**/**']
    }
  }
})

export default config