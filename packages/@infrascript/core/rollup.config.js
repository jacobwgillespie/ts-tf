import ts from '@wessberg/rollup-plugin-ts'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import externals from 'rollup-plugin-node-externals'
// import compiler from '@ampproject/rollup-plugin-closure-compiler'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/core.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['tslib'],
  plugins: [
    externals(),
    nodeResolve(),
    ts({
      browserslist: false,
    }),
    commonjs(),
    // compiler({
    //   // compilation_level: 'ADVANCED',
    //   formatting: 'PRETTY_PRINT',
    //   module_resolution: 'NODE',
    // }),
  ],
}
