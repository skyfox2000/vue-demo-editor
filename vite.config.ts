import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(mode, env)

  return {
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
      dts(),
      mode === "analyse" && visualizer({ open: true, brotliSize: true, filename: 'report.html' }) //  分析插件
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "/ace-builds": path.resolve(__dirname, "node_modules/ace-builds"),
      },
      extensions: [".js", ".ts", ".vue", "json"]
    },
    build: {
      sourcemap: false,
      reportCompressedSize: true,
      lib: {
        entry: path.resolve(__dirname, 'src/editor/index.ts'), // 组件库入口
        name: 'VueDemoEditor', // 输出的库名称
        fileName: "vue-demo-editor",
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['vue', 'highlight.js', 'prismjs', 'vue-live'],
        output: {
          // 全局变量名，对应 UMD 格式
          globals: {
            vue: 'Vue',
            "vue-live": 'vueLive',
          }
        },
      },
      outDir: 'lib', // 组件库的输出目录
    }
  }
})
