import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs24.x'
		})
	},
	optimizeDeps: {
		exclude: ['layercake']
	},
	preprocess: vitePreprocess()
};

export default config;
