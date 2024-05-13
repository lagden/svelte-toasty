import {sveltekit} from '@sveltejs/kit/vite'
import {defineConfig} from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		threads: false,
		globals: true,
		// prettier-ignore
		coverage: {
			include: ['src/lib/**'],
			reporter: [
				'text',
				'text-summary',
				'lcovonly',
				'cobertura',
			],
		},
	},
})
