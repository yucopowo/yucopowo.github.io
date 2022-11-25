import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';


// console.log(banner.default);
export default {
    // input: 'src/main.js',
    // input: 'src/mdast.mjs',
    input: 'src/past.mjs',
    output: {
        // file: 'dist/mdast.js',
        file: 'dist/past.esm.js',
        // dir: 'dist',
        format: 'esm',
        // name: 'mdast',
        name: 'past',
        // format: 'umd',
        // preserveModules: true,
        // preserveModulesRoot: '.'
    },
    plugins: [
        // banner.default('rollup-plugin-banner v<%= pkg.version %> by<%= pkg.author %>'),
        replace({
            // preventAssignment: true,
            // "document.createElement": JSON.stringify("console.log(1)"),
            "document.createElement": ("(()=>({innerHTML:'',textContent:''}))"),
            // values: {
            // }
            // "document.createElement('i')": ("====="),
        }),
        resolve({
            preferBuiltins: false,
            browser: true,
            jsnext: true,
            main: true,
        }),
        commonjs(),
        // nodePolyfills(),
    ]
};
