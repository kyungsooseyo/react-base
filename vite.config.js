import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
    open: true,
    // openPage: '/',
    https: false,
    hot: true,
    // static: './public',
    // host:'10.246.6.189',
    proxy: {
      '/ajax': {
        //~ 是在请求的时候在前面拼上这个前缀
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/ajax/, ""),
      },
    },
  },
  css: {
    //~ 只有在开发环境下才会开启
    preprocessorOptions: {
      //~ 开启css-modules
      modules: true,
      localIdentName: '[name]_[local]_[hash:base64:5]',
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
