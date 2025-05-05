/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //@ts-expect-error
    tailwindcss()
  ],
})
