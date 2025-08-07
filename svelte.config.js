import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			runtime: 'nodejs18.x' // 👈 이 설정이 핵심!
		}),
		alias: {
			$db: './src/db'
		}
	},
	preprocess: vitePreprocess()
};
export default config;
