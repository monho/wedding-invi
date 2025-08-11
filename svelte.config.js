import adapter from '@sveltejs/adapter-vercel'; // 또는 adapter-static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: { adapter: adapter() }
};
