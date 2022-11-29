import stringHash from "string-hash";

import {
    sleep,
    getModuleName,
    downloadFileAndSave,
    getFileDeps,
    getFilePath,
    getBaseUrl,
    getFileUrlPath,
    getLibUrl,
    replaceUrl
} from './common.mjs';


// console.log( getModuleName(url) );
// file downloaded parsed completed

const tasks = new Map();

async function createTask(_url) {
    const id = stringHash(_url);

    if(tasks.has(id)) {
            return;
    }

    const {
        url,
        filePath,
        fileAbsolutePath,
        originFileAbsolutePath
    } = await downloadFileAndSave(_url);
    // console.log('success!');
    // console.log(url);

    const name = getModuleName(url);
    // console.log(id);
    // console.log(name);

    // console.log(filePath);
    // console.log(fileAbsolutePath);

    const baseUrl = getBaseUrl(url);
    const deps = getFileDeps(originFileAbsolutePath, baseUrl);
    // console.log(deps);

    replaceUrl(originFileAbsolutePath, fileAbsolutePath);

    return {
        id,
        url,
        baseUrl,
        name,
        filePath,
        fileAbsolutePath,
        originFileAbsolutePath,
        deps
    }
}



async function runTask(url) {

    const task = await createTask(url);
    if(!task) return;
    tasks.set(task.id, task);

    console.log(task);
    const deps = task.deps;

    for (let i = 0;i < deps.length;i++) {
            const u = deps[i];
            await sleep(10);
            await runTask(u);
    }
}

function runLibTask(lib){
    return runTask(getLibUrl(lib, true))
}




// await runLibTask('react/jsx-runtime');
// await runLibTask('@mdx-js/react');
// await runLibTask('@mdx-js/mdx');

await runLibTask('rebass');
await runLibTask('@emotion/react');
await runLibTask('@rebass/preset');
// await runLibTask('styled-components');
// await runLibTask('@mdx-js/runtime');
// await runLibTask('vue');
// await runLibTask('@antv/g2');
// await runLibTask('style-to-object');
// await runLibTask('query-string');
// await runLibTask('react-use');
// await runLibTask('react-in-viewport');
// await runLibTask('axios');
// await runLibTask('react-router-dom');
// await runLibTask('antd');
// await runLibTask('react');
// await runLibTask('react-dom/client');

// react-dom/client






// const url = 'https://esm.sh/v99/antd@5.0.1/es2022/antd.development.js';
// const r = await createTask(url);
// console.log(r);


// const url = 'https://esm.sh/v99/async-validator@4.2.5/es2022/async-validator.development.js';
// await runTask(url);
// const r = getFileUrlPath('./node_events.js')
// const r = getFileUrlPath('/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js')
// console.log(r);
// getBaseUrl(url);
// console.log(getLibUrl('antd', true));


// replaceUrl('./cdn/v99/antd@5.0.1/es2022/antd.development.js');
// replaceUrl('./cdn/test.js');

// const r = getFileDeps('/Users/xiuliang.yang/workspace/workspace_test/clone_esm_cdn/cdn/v99/antd@5.0.1/es2022/antd.development.js', '/')
// console.log(r);


// replaceUrl('./origin/v99/node_process.js', './cdn/v99/node_process.js')