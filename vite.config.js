import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pages = ['index', 'how-rockets-work', 'missions', 'famous-rockets', 'history', 'glossary', '404']

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((name) => [name, resolve(__dirname, `${name}.html`)])),
    },
  },
})
