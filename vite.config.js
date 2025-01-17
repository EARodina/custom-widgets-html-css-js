import { resolve } from 'path';
import { defineConfig } from 'vite';
import pug from '@vituum/vite-plugin-pug'
import vituum from 'vituum'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { viteStaticCopy } from 'vite-plugin-static-copy'

const root = resolve(__dirname, 'developer');
const outDir = resolve(__dirname, 'public');

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    root,
    server: {
      port: 3000,
    },
    base: './',
    build: {
      outDir,
      emptyOutDir: true,
      minify: false,
      cssMinify: 'esbuild',
      assetsInlineLimit: 0,
  
      rollupOptions: {
        input: ['index.pug', 'pug/pages/**/*.pug'],
  
        output: {
          manualChunks(id) {
            if (id.endsWith('.less') || id.endsWith('.css')) {
              return id.split('/').pop().replace('.less', '');
            }
          },
  
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1]
            if (/png|jpe?g|svg|webp|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            } else if (extType === 'woff' || extType === 'woff2') {
              extType = 'fonts'
            }
            return `${extType}/[name][extname]`
          },
  
          chunkFileNames: (info) => {
            return "js/[name].js"
          }
        },
      },
    },
  
    plugins: [
      pug({
        globals: {
          pagesPath: command === 'build' ? '.' : './pug/pages',
        },
        options: {
          pretty: true,
        }
      }),
      vituum({
        pages: {
          dir: `${root}/pug/pages`,
          root,
          normalizeBasePath: true
        }
      }),
      ViteImageOptimizer({
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'js',
            dest: './'
          }
        ]
      }),
    ],

    resolve: {
      alias: {
        '@': root,
        '@script': `${root}/js`,
        '@images': `${root}/images`,
      }
    }
  }
})