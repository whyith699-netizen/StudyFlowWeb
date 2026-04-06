import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      {
        find: '../contexts/DataContext',
        replacement: path.resolve(__dirname, 'src/extensionSandbox/DataContext.jsx'),
      },
      {
        find: '../contexts/LanguageContext',
        replacement: path.resolve(__dirname, 'src/extensionSandbox/LanguageContext.jsx'),
      },
    ],
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')],
    },
  },
  base: './',
  publicDir: 'static',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
