
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'examples/js/script.js',
  dest: 'examples/js/script.rollup.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ["es2015-rollup", "stage-0", "react"]
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/react.js': ['PropTypes', 'createElement']
      }
    }),
    // uglify({
    //   compress: {
    //     screw_ie8: true,
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // })
  ],
  format: 'iife'
}
