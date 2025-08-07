import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x' // Vercel 런타임 명시
		}),
		alias: {
			$db: './src/db'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
