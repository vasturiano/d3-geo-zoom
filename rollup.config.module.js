import babel from 'rollup-plugin-babel';
import { name, dependencies } from './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            format: 'cjs',
            file: `dist/${name}.common.js`
        },
        {
            format: 'es',
            file: `dist/${name}.mjs`
        }
    ],
    external: Object.keys(dependencies),
    plugins: [
        babel()
    ]
};