import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	// .env ファイル or process.env から読み込み
	const env = loadEnv(mode, process.cwd(), '');

	return {
		base: env.VITE_BASE_PATH,
		plugins: [
			vue(),
			tailwindcss(),
			viteStaticCopy({
				targets: [{ src: 'public/past_images/*', dest: './images' }],
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			port: 3000,
		},
	};
});
