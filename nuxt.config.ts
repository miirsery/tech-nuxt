// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { fileURLToPath } from 'url'
import type {NuxtPage} from '@nuxt/schema'

const svgIconsConfig = createSvgIconsPlugin({
	iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
	symbolId: 'icon-[dir]-[name]',
	inject: 'body-first',
	customDomId: '__svg__icons__dom__',
})

export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	vue: {
		defineModel: true,
	},
	typescript: {
		strict: true,
	},
	alias: {
		'~~': fileURLToPath(new URL('./', import.meta.url)),
		'@@': fileURLToPath(new URL('./', import.meta.url)),
		'~': fileURLToPath(new URL('./src', import.meta.url)),
		'@': fileURLToPath(new URL('./src', import.meta.url)),
		assets: fileURLToPath(new URL('./assets', import.meta.url)),
		public: fileURLToPath(new URL('./public', import.meta.url)),
		'#shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
		'#entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
		'#features': fileURLToPath(new URL('./src/features', import.meta.url)),
		'#widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
		styles: fileURLToPath(new URL('./assets/styles', import.meta.url)),
		fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
		app: fileURLToPath(new URL('./src/app', import.meta.url)),
		pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
	},
	dir: {
		plugins: './src/app/plugins',
		layouts: './src/app/layouts',
		middleware: './src/app/middleware',
		pages: './src/pages',
	},
	imports: {
		autoImport: false,
	},
	components: {
		global: false,
		dirs: [],
	},
	modules: ['@nuxt/image', '@vueuse/nuxt'],
	css: ['assets/styles/index.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "styles/additionals/variables/index.scss" as *;
            @use "styles/additionals/mixins/index.scss" as *;
          `,
				},
			},
		},
		plugins: [svgIconsConfig],
		build: { chunkSizeWarningLimit: 1600 },
	},
	hooks: {
		'pages:extend'(pages) {
			function removePagesMatching(pathPattern: RegExp, filePattern: RegExp, pages: NuxtPage[] = []) {
				const pagesToRemove = []

				for (const page of pages) {
					if (pathPattern.test(page.path) || (page.file && filePattern.test(page.file))) {
						pagesToRemove.push(page)
					} else {
						removePagesMatching(pathPattern, filePattern, page.children)
					}
				}

				for (const page of pagesToRemove) {
					pages.splice(pages.indexOf(page), 1)
				}
			}

			removePagesMatching(/\/ui\//, /\.ts$/, pages)
		},
	},
})
