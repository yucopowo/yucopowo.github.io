import fs from 'fs';
import path from 'path';
import request from 'request';
import {fileURLToPath} from 'url';
import mkdirp from 'mkdirp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const cache = new Map();

export function download(lib){
    const url = `https://cdn.jsdelivr.net/npm/${lib}/+esm`;

    console.log('======', lib, url);

    return new Promise((resolve, reject) => {
        if(cache.has(url)) {
            resolve();
            return;
        }
        cache.set(url, true);
        request({
            url: url,
            method: 'GET', // 根据实际情况改变请求方式
            encoding: 'utf-8'
        }, (err, response, body) => {
            if (!err && response.statusCode === 200) {
                const content = replaceLib(body);

                const libPath = getPath(lib);

                const filePath = path.resolve(rootPath, libPath.dir, libPath.lib, libPath.lib+'.esm.js');
                mkdirp.sync(path.resolve(rootPath, libPath.dir));
                mkdirp.sync(path.parse(filePath).dir);

                fs.writeFileSync(filePath, content, {encoding: "utf-8"})
                resolve()
            } else {
                reject(err)
            }
        })
    });
}
// console.log(__dirname);

const rootPath = path.resolve(__dirname, '../../temp');
// const filePath = path.resolve(rootPath, 'react-router-dom.esm.js');

// console.log(filePath);

function getPath(lib) {

    // const lib = url.substring(29, url.length-5);
    // console.log(lib);
    let filename = path.parse(lib);
    // const filename = '';
    return {
        lib,
        dir: filename.dir,
        name: filename.name
    }
}

function replaceLib(content) {
    if(!content) return content;
    let newContent = content;
    const result = content.match(/(from|import)"\/npm\/[a-zA-Z_@.0-9\-/]+\/\+esm\"/g);
    if(!result) return newContent;
    result.forEach(async (x, i) => {

        let lib = '';
        if(x.includes('import')) {
            lib = x.substring(12, x.length-6);
        } else {
            lib = x.substring(10, x.length-6);
        }
        if(lib.includes('@')) {
            lib = lib.substring(0, lib.indexOf('@', 1));
        }

        let filename = path.parse(lib);
        // filename = filename.substring(0, filename.indexOf('@'));
        console.log(lib, filename.dir, filename.name);
        if(x.includes('import')) {
            newContent = newContent.replace(x, `import "${lib}"`);
        } else {
            newContent = newContent.replace(x, `from "${lib}"`);
        }
        // download(
        //     `https://cdn.jsdelivr.net/npm/${l}/+esm`,
        //     path.resolve(rootPath, filename+'.esm.js')
        // );
        try {
            await download(lib);
        } catch (e) {
            console.error(e);
        }

    });

    return newContent;
}

await download('style-to-object');

// const r = getPath('https://cdn.jsdelivr.net/npm/@remix/react-router/+esm')
// console.log(r);

// await download(
//     'https://cdn.jsdelivr.net/npm/react-router-dom/+esm',
//     filePath
// );

// const content = fs.readFileSync(filePath, "utf-8");
// // console.log(content);
//
// const result = content.match(/from"\/npm\/[a-zA-Z_@.0-9\-/]+\/\+esm\"/g);
// console.log(result);
//
//
// result.forEach((x, i) => {
//
//
//     let lib = x.substring(10, x.length-6);
//     // console.log(l);
//     if(lib.includes('@')) {
//         lib = lib.substring(0, lib.indexOf('@', 1));
//     }
//
//     let filename = path.parse(lib);
//     // filename = filename.substring(0, filename.indexOf('@'));
//     console.log(lib, filename.dir, filename.name);
//
//     // download(
//     //     `https://cdn.jsdelivr.net/npm/${l}/+esm`,
//     //     path.resolve(rootPath, filename+'.esm.js')
//     // );
//
// });
