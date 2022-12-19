import fs from 'fs';
import path from 'path';
import request from 'request';
import { parse } from '@babel/parser';
import { transformSync } from '@babel/core';
import * as Babel from '@babel/standalone';
import babelPluginGeneratorPrettier from 'babel-plugin-generator-prettier';
import mkdirp from 'mkdirp';
import _traverse from "@babel/traverse";
import {re} from "@babel/core/lib/vendor/import-meta-resolve.js";

export function sleep(time = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

const cache = new Map();
const traverse = _traverse.default;
// console.log(traverse);

const originPath = path.resolve('./origin/');
const rootPath = path.resolve('./cdn/');

mkdirp.sync(originPath);
mkdirp.sync(rootPath);

export function getBaseUrl(url) {
    const p = path.parse(url);
    return p.dir;
}

async function parseCode(code, url) {
    if(cache.has(url)) {
        return Promise.resolve();
    }

    console.log('parseCode=================');
    const urls = [];
    try {
        const ast = parse(code, {
            sourceType: "module",
        });

        traverse(ast, {
            ImportDeclaration(path) {
                // console.log('path=====');
                // console.log(path.node.source.value);
                const url = path.node.source.value;
                const fileUrl = getFileUrlPath(url);
                // downloadAndSaveAndParse(fileUrl);
                urls.push(fileUrl);
            },
            ExportAllDeclaration(path) {
                // console.log('path=====');
                // console.log(path.node.source.value);
                const url = path.node.source.value;
                const fileUrl = getFileUrlPath(url);
                // downloadAndSaveAndParse(fileUrl);
                urls.push(fileUrl);
            }
        });

    } catch (e) {
        console.log('parseCode error=================');
        console.log(url);
        // console.log(code);
        console.error(e);
        throw e;
    }

    try {
        console.log('urls=================');
        console.log(urls);
        // Promise.resolve()
        const serialPromises = function (promises) {
            promises.reduce((prev, next) => prev.then(next), new Promise((resolve) => {
                sleep().then(() => {
                    resolve();
                });
            }));
        }
        const promises = urls.map((url) => downloadAndSaveAndParse(url));
        await serialPromises(promises);

        cache.set(url, true);

    } catch (e) {
        console.log('parseCode request deps error=================');
        console.log(url);
        console.error(e);
        throw e;
    }

    return Promise.resolve();
    // console.log(JSON.stringify(ast, null, 2));
}

export function getFileDeps(f, baseUrl) {
    const urls = new Map();
    try {
        const content = fs.readFileSync(f, 'utf-8');

        const ast = parse(content, {
            sourceType: "module",
        });

        function common(path) {
            if(!path.node.source) return;
            try {
                const url = path.node.source.value;
                const fileUrl = getFileUrlPath(url, baseUrl);
                urls.set(fileUrl, true);
            }catch (e) {
                console.log('getFileDeps error]]]]]===========');

                console.log(f);

                console.log(path.node);
                throw e;
            }

        }
        traverse(ast, {
            ImportDeclaration(path) {
                // console.log('path=====');
                // console.log(path.node.source.value);
                // const url = path.node.source.value;
                // const fileUrl = getFileUrlPath(url, baseUrl);
                // downloadAndSaveAndParse(fileUrl);
                // urls.push(fileUrl);
                // urls.set(fileUrl, true);
                common(path);
            },
            ExportAllDeclaration(path) {
                // console.log('path=====');
                // console.log(path.node.source.value);
                // const url = path.node.source.value;
                // const fileUrl = getFileUrlPath(url, baseUrl);
                // // downloadAndSaveAndParse(fileUrl);
                // // urls.push(fileUrl);
                // urls.set(fileUrl, true);
                common(path);
            },
            ExportNamedDeclaration(path) {
                common(path);
            },
        });

    } catch (e) {
        console.log('parseCode error=================');
        // console.log(url);
        // console.log(code);
        console.error(e);
        throw e;
    }

    const _urls = [];
    for (let k of urls.keys()) {
        _urls.push(k);
    }
    return _urls;
}

export function getFilePath(url) {
    let filePath = url.replace('https://esm.sh/', '').replace('?dev', '');
    if(filePath.endsWith('.js')) return filePath;
    return filePath + '.js';
}

function getFileAbsolutePath(url) {
    const filePath = getFilePath(url);
    const fileAbsolutePath = path.resolve(rootPath, filePath);
    return fileAbsolutePath;
}

function getOriginFileAbsolutePath(url) {
    const filePath = getFilePath(url);
    const fileAbsolutePath = path.resolve(originPath, filePath);
    return fileAbsolutePath;
}

function isFileExists(url) {
    // let filePath = url.replace('https://esm.sh/', '');
    // if(filePath.endsWith('.js')) return filePath;
    // return filePath + '.js';
    const filePath = getFilePath(url);
    const fileAbsolutePath = path.resolve(originPath, filePath);
    return fs.existsSync(fileAbsolutePath);
}

export function getFileUrlPath(url, baseUrl= 'https://esm.sh') {
    if(url.startsWith('http')) return url;
    // return 'https://esm.sh' + url;
    // console.log(path.parse(url));

    if(path.isAbsolute(url)) {
        return 'https://esm.sh' + url;
    }
    const p = path.parse(url);
    const r = path.join('/', p.dir, p.base);
    return baseUrl + r;
}

export function getLibUrl(lib, dev=false) {
    return getFileUrlPath(lib)+(dev?'?dev':'');
}

function saveFile(url, code) {

    // const u = Url.parse(url);
    // console.log(u);
    const filePath = getFilePath(url);
    const fileAbsolutePath = path.resolve(rootPath, filePath);
    const originFileAbsolutePath = getOriginFileAbsolutePath(url);

    // console.log(fileAbsolutePath);
    // console.log(path.parse(fileAbsolutePath).dir);

    const dir = path.parse(originFileAbsolutePath).dir;
    if(dir) {
        mkdirp.sync(dir);
    }

    try {
        fs.writeFileSync(originFileAbsolutePath, code);
    } catch (e) {
        console.log('writeFileSync error===========');
        console.log(url);
        // console.log(code);
        throw e;
    }
    return {filePath, fileAbsolutePath, originFileAbsolutePath};
}

async function downloadAndSaveAndParse(url) {
    console.log('url=============');
    console.log(url);

    if(cache.has(url)) {
        return Promise.resolve();
    }

    const exists = isFileExists(url);

    console.log('exists=', exists);
    if(exists) {
        const absolutePath = getFileAbsolutePath(url);
        const content = fs.readFileSync(absolutePath, 'utf-8');
        await parseCode(content, url);
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {

        request({
            url,
            method: 'GET',
            encoding: 'utf-8',
            headers: {
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            }
        }, async (err, response, body) => {
            // console.log(body);

            if(err) {
                console.log('request error=============');
                console.log(url);
                reject(err);
                return;
            }

            save(url, body);

            await sleep();
            await parseCode(body, url);


            resolve();

        });


    });



}

export async function downloadFileAndSave(url) {
    return new Promise((resolve, reject) => {

        if(isFileExists(url)) {
            console.log('isFileExists', url);
            const filePath = getFilePath(url);
            const fileAbsolutePath = getFileAbsolutePath(url);
            const originFileAbsolutePath = getOriginFileAbsolutePath(url);
            resolve({
                url,
                filePath,
                fileAbsolutePath,
                originFileAbsolutePath
            });
            return;
        }


        request({
            url,
            method: 'GET',
            encoding: 'utf-8',
            headers: {
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            }
        }, async (err, response, body) => {
            if(err) {
                reject(err);
                return;
            }
            const {filePath, fileAbsolutePath, originFileAbsolutePath} = saveFile(url, body);
            // const originFileAbsolutePath = getOriginFileAbsolutePath(url);

            resolve({
                url,
                filePath,
                fileAbsolutePath,
                originFileAbsolutePath
            });

        });
    });



}

export function replaceUrl(name, originFileAbsolutePath, fileAbsolutePath, dev = false) {

    const content = fs.readFileSync(originFileAbsolutePath, 'utf-8');

    function common(_path) {
        // console.log(_path.node)
        if(!_path.node.source) {
            return;
        }

        const url = _path.node.source.value;
        // || !path.isAbsolute(url)
        if(url.startsWith('/cdn/') ) {
            return;
        }
        let fixedUrl = '';
        if(url.startsWith('https://')) {
            fixedUrl = url.replace('https://esm.sh/', '/cdn/');
        }
        else if(path.isAbsolute(url)) {
            fixedUrl = '/cdn'+url;
        }
        else if(url.startsWith('./')) {
            return;
        }
        _path.node.source.value = fixedUrl
    }
    const plugin = function() {
        return {
            visitor: {
                ImportDeclaration(path) {
                    // console.log('ImportDeclaration path=====');
                    // console.log(path);
                    // const url = path.node.source.value;
                    // path.node.source.value = '====ImportDeclaration';
                    common(path);
                },
                ExportAllDeclaration(path) {
                    // console.log('ExportAllDeclaration path=====');
                    // console.log(path);
                    // path.node.source.value = '====ExportAllDeclaration';
                    common(path);
                },
                ExportNamedDeclaration(path) {
                    // console.log('ExportNamedDeclaration path=====');
                    // console.log(path);
                    // path.node.source.value = '====ExportNamedDeclaration';
                    common(path);
                },
            },
        };
    };

    const { code } = transformSync(content, {
        plugins: [
            plugin,
        ],
    });

    const { code: code1, map } = transformSync(code, {

        ...(dev?{
            plugins: [
                babelPluginGeneratorPrettier,
            ],
            generatorOpts: {
                "printWidth": 120,
                "semi": true,
                "singleQuote": true
            }
        }:{
            sourceMaps: true,
            // sourceRoot: originFileAbsolutePath,
            // sourceFileName: originFileAbsolutePath,
            minified: true,
        }),



    });
    let code2 = '';
    // if(map && !dev) {
    //     code2 = code1 + '\n' + `//# sourceMappingURL=${name}.map`;
    // } else {
    //     code2 = code1;
    // }
    code2 = code1;
    // console.log(code);

    // fs.writeFileSync(f+'.cdn.js', code1);

    // const bak = fileAbsolutePath.replace('.js','.bak.js');
    // if(!fs.existsSync(bak)) {
    //     fs.writeFileSync(bak, content);
    // }
    const p = path.parse(fileAbsolutePath);
    mkdirp.sync(p.dir);

    fs.writeFileSync(fileAbsolutePath, code2);
    // if(map && !dev) {
    //     // console.log(map);
    //     //
    //     fs.writeFileSync(fileAbsolutePath+'.map', JSON.stringify(map));
    // }
}

async function downloadLib(lib, dev = false) {
    return downloadAndSaveAndParse(`https://esm.sh/${lib}?dev`);
}

export function getModuleName(url) {
    return url.substring( url.lastIndexOf('/') + 1 ).replace('.development.js', '').replace('?dev', '');
}

// const e = isFileExists('https://esm.sh/v99/@ant-design/icons-svg@4.2.1/es2022/es/asn/CloseOutlined.development.js');
//
// console.log(e);

// await downloadAndSaveAndParse('https://esm.sh/v99/antd@5.0.1/es2022/antd.development.js');
// await downloadLib('react-dom/client', true);
// await downloadLib('antd', true);
// await downloadAndSaveAndParse('https://esm.sh/stable/react@18.2.0/es2022/react.development.js');



















// const code = await downloadAndSave('https://esm.sh/v99/react-use@17.4.0/es2015/react-use.js');

// parseCode(code);

// parseCode(`/* esm.sh - react-use@17.4.0 */
// export * from "https://esm.sh/v99/react-use@17.4.0/es2015/react-use.development.js";
//
// `);

// save(
// 'https://esm.sh/react-use',
//     `
//     /* esm.sh - react-use@17.4.0 */
//     export * from "https://esm.sh/v99/react-use@17.4.0/es2015/react-use.development.js";
//     `
// )
