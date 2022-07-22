import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { configDefaults } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],	
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$helpers: resolve('./src/helpers')
		}
	},
	server: {
		fs: {
			allow: ['backend']
		}
	},
	define: {
		// Eliminate in-source test code
		'import.meta.vitest': 'undefined'
	},
	test: {
		// jest like globals
		globals: true,
		environment: 'jsdom',
		// in-source testing
		includeSource: ['src/**/*.{js,ts,svelte}'],
		// Exclude files in c8
		coverage: {
			exclude: ['setupTest.js', 'src/mocks']
		},
		setupFiles: ['./setupTest.js'],
		deps: {
			// Put Svelte component here, e.g., inline: [/svelte-multiselect/, /msw/]
		},
		// Exclude playwright tests folder
		exclude: [...configDefaults.exclude, 'tests']
	}
};

export default config;
