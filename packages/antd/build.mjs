import * as rollup from 'rollup';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import merge from 'rollup-merge-config';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
// import replace from '@rollup/plugin-replace';
import replace from "replace";

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);


const inputCommonOptions = {
    input: 'src/index.js',
    external: [
        'react', 'react-dom', 'dayjs',
        'https://esm.sh/react-dom',
        'https://esm.sh/dayjs',
        'replaced-react'
    ],
    plugins: [
        // replace({
        //     // include: ['node_modules/antd/es/**/*.js'],
        //     values: {
        //         "'react'": '`replaced-react`'
        //     }
        //     // "dayjs": "'https://esm.sh/dayjs'",
        // }),
        resolve({
            preferBuiltins: false,
            browser: true,
            jsnext: true,
            main: true,
        }),
        commonjs(),

    ]
};

const outputCommonOptions = {
    format: 'esm',
    name: 'antd',
    sourcemap: true,
};

async function buildDev() {

    // 有关选项的详细信息，请参见下文
    const inputOptions = {
        input: 'src/index.js',
        plugins: [
            injectProcessEnv({
                NODE_ENV: 'development',
            }),

        ]
    };

    const outputOptions = {
        file: 'dist/antd.esm.js',
    };


    // 创建一个 bundle
    const bundle = await rollup.rollup(merge(inputCommonOptions, inputOptions));
    // 或者将bundle写入磁盘
    await bundle.write(merge(outputCommonOptions, outputOptions));

    replace({
        regex: /['|"]react['|"]/g,
        replacement: "'https://esm.sh/react?dev'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });
    replace({
        regex: /['|"]react-dom['|"]/g,
        replacement: "'https://esm.sh/react-dom?dev'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });
    replace({
        regex: /['|"]dayjs['|"]/g,
        replacement: "'https://esm.sh/dayjs?dev'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });
}

async function buildPrd() {

    // 有关选项的详细信息，请参见下文
    const inputOptions = {
        input: 'src/index.js',
        plugins: [
            injectProcessEnv({
                NODE_ENV: 'production',
            }),
            uglify({
                compress: {
                    drop_console: true,
                }
            }),
        ]
    };

    const outputOptions = {
        file: 'dist/antd.esm.min.js',
    };

    // const bundle = await rollup.rollup(inputOptions);
    const bundle = await rollup.rollup(merge(inputCommonOptions, inputOptions));

    // await bundle.write(outputOptions);
    await bundle.write(merge(outputCommonOptions, outputOptions));


    replace({
        regex: /['|"]react['|"]/g,
        replacement: "'https://esm.sh/react'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });
    replace({
        regex: /['|"]react-dom['|"]/g,
        replacement: "'https://esm.sh/react-dom'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });
    replace({
        regex: /['|"]dayjs['|"]/g,
        replacement: "'https://esm.sh/dayjs'",
        paths: [path.resolve(__dirname, 'dist/')],
        recursive: true,
        silent: false,
    });

}

await buildDev();
await buildPrd();



