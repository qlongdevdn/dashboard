import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: Number(process.env.PORT)
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/_dist/scss/abstracts/_variables.scss";'
            }
        }
    }
});
