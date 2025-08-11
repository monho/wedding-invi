import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: { base: '' },                 // ✅ 사용자 페이지는 항상 빈 문자열
    prerender: { entries: ['*'] }
  }
};
