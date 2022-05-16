import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			build: { target: 'es2015' },
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};
export default config;
