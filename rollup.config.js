import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

import pkg from './package.json' with { type: 'json' };
const { name, homepage, version, dependencies } = pkg;

const umdConf = {
  format: 'umd',
  name: 'd3',
  extend: true,
  banner: `// Version ${version} ${name} - ${homepage}`
};

export default [
  { // UMD
    input: 'src/index.js',
    output: [
      {
        ...umdConf,
        file: `dist/${name}.js`,
        sourcemap: true
      },
      { // minify
        ...umdConf,
        file: `dist/${name}.min.js`,
        plugins: [terser({
          output: { comments: '/Version/' }
        })]
      }
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve(),
      commonJs()
    ]
  },
  { // ES module
    input: 'src/geoZoom.js',
    output: [
      {
        format: 'es',
        file: `dist/${name}.mjs`
      }
    ],
    external: Object.keys(dependencies),
    plugins: [
      babel()
    ]
  }
];