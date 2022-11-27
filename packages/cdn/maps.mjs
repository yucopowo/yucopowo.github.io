import path from 'path';
import { readdirSync, statSync } from 'fs';
import mkdirp from 'mkdirp';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const rootPath = path.resolve(__dirname, '../../cdn');

const rootPathLength = rootPath.length;
console.log(rootPath);

function getFiles(dir) {
    return readdirSync(dir);
}

const maps = {};

function scanDir(dir) {
    const files = getFiles(dir)
    files.forEach((f) => {
        const nf = path.resolve(dir, f);
        const stat = statSync(nf);
        if(stat.isDirectory()) {
            scanDir(nf);
        } else if(nf.endsWith('.esm.js')) {
            // maps.push([name, nf.substring(rootPathLength+1)]);
            const l = nf.substring(rootPathLength+1);
            const name =  l.substring(l.indexOf('/')+1).replace('.esm.js', '');
            maps[name] = l;
            // maps.push([name, nf.substring(rootPathLength+1)]);
        }
    });
}
scanDir(rootPath);

console.log(maps);



