import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 👈 1. Importa el plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // 👈 2. Usa el plugin
});