// r = /import[ ]+[a-zA-Z ,{}]*[ ]+from[ ]+['|"]antd['|"];?/g;
const Babel = require('../src/assets/libs/babel-standalone/babel.min.js');
// console.log(Babel)
// Simple plugin that converts every identifier to "LOL"
function lolizer() {
    return {
        visitor: {
            Identifier(path) {
                path.node.name = 'LOL';
            }
        }
    }
}
Babel.registerPlugin('lolizer', lolizer);

const source = `

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, Tree, Col, Row } from 'antd';
import './index.less';

const { Header, Footer, Sider, Content } = Layout;

console.log(Button);
`;

// import antd from 'antd';
// const { Button, Layout, Menu, Tree, Col, Row } = antd;

var output = Babel.transform(
    source,
    {plugins: ['lolizer']}
);

console.log(output.code);


// s = `
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Layout, Menu, Tree, Col, Row } from 'antd';
// const { Header, Footer, Sider, Content } = Layout;
// import './index.less';
//
// console.log(Button);
// const Home = () => {
//
//     return (
//         <div className="home-page">
//             <div className="home-page-container">
//
//             </div>
//         </div>
//     );
// };
//
// export default Home;
//
//
// `;
//
// const result = s.replace(r, (a) => {
//     // console.log(a);
//     console.log('=============');
//     console.log(a);
//
//     // return a.replace('import', 'const')
//     //     .replace('import', 'const')
//     // return '===';
//     return `
//     import __antd__ from 'antd';
//
//     const ${
//         a.replace('import','')
//         .replace('from','')
//             .replace(/['|"]antd['|"];?/,'')
//     } = __antd__;
//
//     `;
// });
// console.log( result );
// console.log( s.match(reg, '$2, $1') );
// matches = r.exec(s);
// console.log(matches);


// s1=RegExp.$1;
// s2=RegExp.$2;
// s3=RegExp.$3;
//
// console.log(s1);
// console.log(s2);
// console.log(s3);

// const path = require('path');
// const dirTree = require('dir-tree-scanner');
// const WebCompressor = require('web-compressor');
//
// const {compress, decompress} = new WebCompressor('gzip');
//
// const rootPath = '../posts';
// const rootPathLength = rootPath.length;
// dirTree.find(rootPath)
//     .then(function(result){
//         // console.log(JSON.stringify(result,null, 2));
//
//         // const data = result.data;
//         // console.log(JSON.stringify(data,null, 2));
//
//         function transformNodes(nodes) {
//             if(!nodes) {
//                 return [];
//             }
//             return nodes.map((node) => {
//                 return transformNode(node);
//             });
//         }
//
//         function transformNode(node) {
//             const newNode = {};
//             const nodePath = path.parse(node.name);
//             // console.log(nodePath);
//             if(node.isDirectory) {
//                 newNode.d = nodePath.name;
//                 newNode.c = transformNodes(node.children);
//             } else {
//                 newNode.t = nodePath.name;
//                 const p = nodePath.dir.substring(rootPathLength+1);
//                 if(p) {
//                     newNode.p = p;
//                 }
//             }
//             return newNode;
//         }
//
//         const tree = transformNodes(result.data[0].children);
//
//         console.log(JSON.stringify(tree, null, 2));
//
//         // compress(JSON.stringify(tree))
//         //     .then(arrayBuffer => {
//         //         console.log(arrayBuffer);
//         //     });
//
//     }, function(err){
//         console.log('err:', err);
//     }, function(data){
//         // console.log('progress: ', data);
//     });
//
//
// // import { fs } from 'memfs';
// //
// // fs.writeFileSync('/hello.txt', 'World!');
// // const data = fs.readFileSync('/hello.txt', 'utf8'); // World!
// // const stat = fs.statSync('/hello.txt');
// //
// // console.log(data);
// // console.log(stat);
// // fs.t
//
// // var loki = require('lokijs')
// //
// // class PostsAdapter {
// //     loadDatabase(dbname, callback) {
// //         // using dbname, load the database from wherever your adapter expects it
// //         var serializedDb = localStorage[dbname];
// //
// //         var success = true; // make your own determinations
// //
// //         if (success) {
// //             callback(serializedDb);
// //         }
// //         else {
// //             callback(new Error("There was a problem loading the database"));
// //         }
// //     }
// //     saveDatabase(dbname, dbstring, callback) {
// //
// //         console.log('saveDatabase============');
// //         console.log(dbstring);
// //
// //         // store the database, for this example to localstorage
// //         localStorage[dbname] = dbstring;
// //
// //         var success = true;  // make your own determinations
// //         if (success) {
// //             callback(null);
// //         }
// //         else {
// //             callback(new Error("An error was encountered loading " + dbname + " database."));
// //         }
// //     }
// // }
// // // function MyCustomAdapter() {
// // //
// // // }
// // //
// // // const localStorage = {
// // //     'example.json': '{"filename":"example.json","collections":[{"name":"users","data":[],"idIndex":null,"binaryIndices":{"email":{"name":"email","dirty":false,"values":[]}},"constraints":null,"uniqueNames":[],"transforms":{},"objType":"users","dirty":false,"cachedIndex":null,"cachedBinaryIndex":null,"cachedData":null,"adaptiveBinaryIndices":true,"transactional":false,"cloneObjects":false,"cloneMethod":"parse-stringify","asyncListeners":false,"disableMeta":false,"disableChangesApi":true,"disableDeltaChangesApi":true,"autoupdate":false,"serializableIndices":true,"disableFreeze":true,"ttl":null,"maxId":0,"DynamicViews":[],"events":{"insert":[],"update":[],"pre-insert":[],"pre-update":[],"close":[],"flushbuffer":[],"error":[],"delete":[null],"warning":[null]},"changes":[],"dirtyIds":[],"isIncremental":false}],"databaseVersion":1.5,"engineVersion":1.5,"autosave":true,"autosaveInterval":7000,"autosaveHandle":null,"throttledSaves":true,"options":{"adapter":null,"autoload":true,"autosave":true,"autosaveInterval":7000,"serializationMethod":"normal","destructureDelimiter":"$<\\n","recursiveWait":true,"recursiveWaitLimit":false,"recursiveWaitLimitDuration":2000,"started":1667891297844},"persistenceMethod":"adapter","persistenceAdapter":null,"verbose":false,"events":{"init":[null],"loaded":[],"flushChanges":[],"close":[],"changes":[],"warning":[]},"ENV":"NODEJS","isIncremental":false}'
// // // };
// // //
// // // MyCustomAdapter.prototype.loadDatabase = function(dbname, callback) {
// // //     // using dbname, load the database from wherever your adapter expects it
// // //     var serializedDb = localStorage[dbname];
// // //
// // //     var success = true; // make your own determinations
// // //
// // //     if (success) {
// // //         callback(serializedDb);
// // //     }
// // //     else {
// // //         callback(new Error("There was a problem loading the database"));
// // //     }
// // // }
// // //
// // // MyCustomAdapter.prototype.saveDatabase = function(dbname, dbstring, callback) {
// // //
// // //     console.log('saveDatabase============');
// // //     console.log(dbstring);
// // //
// // //     // store the database, for this example to localstorage
// // //     localStorage[dbname] = dbstring;
// // //
// // //     var success = true;  // make your own determinations
// // //     if (success) {
// // //         callback(null);
// // //     }
// // //     else {
// // //         callback(new Error("An error was encountered loading " + dbname + " database."));
// // //     }
// // // }
// // //
// // // const adapter = new MyCustomAdapter();
// // var db = new loki('example.json', {
// //     adapter: new PostsAdapter(),
// //     autoload: true,
// //     autoloadCallback : databaseInitialize,
// //     autosave: true,
// //     autosaveInterval: 3 * 1000
// // });
// //
// //
// // function databaseInitialize() {
// //     console.log('databaseInitialize');
// //     // var log = db.getCollection("log");
// //     //
// //     // if (log === null) {
// //     //     db.addCollection("log");
// //     // }
// //     //
// //     // // log some random event data as part of our example
// //     // log.insert({ event: 'dbinit', dt: (new Date()).getTime() });
// //
// //
// //
// //
// //     var users = db.getCollection('users');
// //
// //     users.insert({name: new Date().getTime()});
// //     users.insert({name: new Date().getTime()});
// //     users.insert({name: new Date().getTime()});
// //
// //     setInterval(() => {
// //         // users.insert({nane: new Date().getTime()});
// //         //
// //         users.insert({name: new Date().getTime()});
// //         users.insert({name: new Date().getTime()});
// //         users.insert({name: new Date().getTime()});
// //         db.saveDatabase();
// //
// //         console.log(localStorage);
// //         console.log(users.chain().data());
// //
// //     }, 10 * 1000);
// //
// //
// // }
//
