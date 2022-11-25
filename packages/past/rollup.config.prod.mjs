import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';

export default {
    // input: 'src/main.js',
    // input: 'src/mdast.mjs',
    input: 'src/past.mjs',
    output: {
        // file: 'dist/mdast.min.js',
        file: 'dist/past.esm.min.js',
        // dir: 'dist',
        format: 'esm',
        // name: 'mdast',
        name: 'past',
        // format: 'umd',
        // preserveModules: true,
        // preserveModulesRoot: '.'
    },
    plugins: [
        replace({
            "document.createElement": ("(()=>({innerHTML:'',textContent:''}))"),
        }),
        resolve({
            preferBuiltins: false,
            browser: true,
            jsnext: true,
            main: true,
        }),
        commonjs(),
        uglify({
            compress: {
                drop_console: true,
            }
        }),
        // nodePolyfills(),
    ]
};
