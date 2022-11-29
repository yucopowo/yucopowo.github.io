const loki = require('lokijs');
const markdownDescription = require('markdown-description')
const { deepListDir } = require('deep-list-dir')
const dirTree = require('dir-tree-scanner');
const fs = require('fs');
const crc32 = require('crc/crc32');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require("dayjs");
const watch = require("node-watch");
const path = require("path");
dayjs.extend(utc);
dayjs.extend(timezone);
const db = require('./db');




const filePath = path.resolve(__dirname, '../api');
const rootPath = path.resolve(__dirname, '../posts');
const rootPathLength = rootPath.length;
const postsPath = rootPath;



function save(tree) {

    db.clear();
    // db.deleteDatabase();
    db.removeCollection('posts');
    db.addCollection('posts');
    const posts = db.getCollection("posts");
    // console.log(tree);
    // console.log('posts========');
    // console.log(posts);
    function travelNodes(nodes) {
        if(!nodes) return;
        nodes.forEach((node) => {
            travelNode(node);
            if(node.children) {
                travelNodes(node.children);
            }
        });
    }
    function travelNode(node) {
        if(node.type === "directory") {
            const n = {...node};
            delete n.children;
            posts.insert(n);
        }
        if(node.type === "file") {
            if(node.ext === 'md' || node.ext === 'mdx') {
                posts.insert(node);
            }
        }
    }
    travelNodes(tree);
    // console.log('================22222');
    // console.log(posts.chain().data());
    db.saveDatabase({}, ()=> {

    });
    db.save();
    // dbsaveDatabase

}

function update() {

    dirTree.find(rootPath).then(function(result){
        // console.log(JSON.stringify(result,null, 2));
        // const data = result.data;
        // console.log(JSON.stringify(data,null, 2));


        function transformNodes(nodes, parent) {
            if(!nodes) {
                return [];
            }
            return nodes.map((node) => {
                return transformNode(node, parent);
            });
        }

        function transformNode(node, parent) {
            const newNode = {};
            const nodePath = path.parse(node.name);
            // console.log(nodePath);
            const p = node.name.substring(rootPathLength+1);
            // console.log(p);
            const id = hashCode(p);
            newNode.id = id;
            newNode.title = nodePath.name;
            if(parent) {
                newNode.pid = parent.id;
            }
            if(node.isDirectory) {
                newNode.type = 'directory';
                newNode.children = transformNodes(node.children, newNode);
            } else {

                const content = fs.readFileSync(node.name, 'utf-8');
                const summary = markdownDescription(content, { concatLines: true });

                newNode.type = 'file';
                newNode.name = nodePath.base;
                newNode.ext = nodePath.ext.substring(1);
                newNode.format = newNode.ext;
                newNode.summary = summary;
                newNode.path = p;
                newNode.crc = crc32(content).toString(16);
                // console.log(node.name);
                // const id = hashCode(mdPath);
                // const p = nodePath.dir.substring(rootPathLength+1);

                // if(p) {
                //     newNode.p = p;
                // }
                const stat = fs.statSync(node.name);
                // console.log(stat)
                newNode.ctime = dayjs(stat.birthtime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
                newNode.mtime = dayjs(stat.mtime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
            }
            return newNode;
        }

        // console.log(JSON.stringify(result, null, 2));

        // const data = result.data[0].children;
        // console.log(JSON.stringify(data, null, 2));
        const tree = transformNodes(result.data[0].children);

        console.log(JSON.stringify(tree, null, 2));

        // compress(JSON.stringify(tree))
        //     .then(arrayBuffer => {
        //         console.log(arrayBuffer);
        //     });

        // fs.writeFile(path.resolve(filePath, 'tree.json'), JSON.stringify(tree, null, 2), () => {});

        try {
            save(tree);
        } catch (e) {
            console.error(e);
        }


    }, function(err){
        console.log('err:', err);
    }, function(data){
        // console.log('progress: ', data);
    });













    //     const filepath
//     console.log('%s changed.', name);
//     const l = postsPath.length + 1;
//     deepListDir(postsPath,
//         {
//             pattern: ['*.md'], // minimatch or RegExp
//             // base: '', set parent base to something different than given directory
//             // minimatchOptions: { matchBase: true } // minimatch options
//         }
//     ).then((p) => {
//         console.log(p);
//         // const posts = p.map((x)=>{
//         //     const mdPath = x.substring(l);
//         //     const postPath = path.parse(mdPath);
//         //     const stat = fs.statSync(x);
//         //     // console.log(stat);
//         //
//         //     const content = fs.readFileSync(x, 'utf-8');
//         //     // console.log(content);
//         //     const summary = markdownDescription(content);
//         //     const id = hashCode(mdPath);
//         //
//         //     // {
//         //     //     root: '',
//         //     //         dir: 'autojs/api',
//         //     //     base: 'dsd.md',
//         //     //     ext: '.md',
//         //     //     name: 'dsd'
//         //     // }
//         //
//         //     return {
//         //         id,
//         //         title: postPath.name,
//         //         path: mdPath,
//         //         dir: postPath.dir,
//         //         mtime: dayjs(stat.mtime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
//         //         ctime: dayjs(stat.ctime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
//         //         summary
//         //     };
//         // }).sort((a, b) => {
//         //     return dayjs(b.mtime).diff(dayjs(a.mtime), 'seconds');
//         // });
//         // console.log(posts);
//         // fs.writeFile(path.resolve(root, 'posts.json'), JSON.stringify(posts,null, 2), () => {});
//     });
}

watch(postsPath, { recursive: true }, function(evt, name) {
    update();
});

update();

function hashCode(keyString){
    // return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    let hash = 0;
    for (let charIndex = 0; charIndex < keyString.length; ++charIndex)
    {
        hash += keyString.charCodeAt(charIndex);
        hash += hash << 10;
        hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    //4,294,967,295 is FFFFFFFF, the maximum 32 bit unsigned integer value, used here as a mask.
    return (((hash + (hash << 15)) & 4294967295) >>> 0).toString(16)
}
