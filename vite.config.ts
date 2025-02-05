import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  define: {
    'process.env.SOME_SECRET': JSON.stringify(process.env.SOME_SECRET),
  }
})
