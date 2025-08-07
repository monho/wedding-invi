import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x'
    }),
    alias: {
      $db: './src/db'
    }
  },
  preprocess: vitePreprocess()
};
