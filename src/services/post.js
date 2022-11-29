import axios from 'axios';

export async function getPostService(p) {
    const _p = encodeURIComponent(encodeURIComponent(p));
    return (await (fetch(`/api/post/html?path=`+_p))).text();
}

export async function getPostContentByIdService(id) {
    return axios.get(`/api/post/content/${id}`);
}

export async function getPostMdastByIdService(id) {
    return (await (fetch(`/api/post/content/mdast/${id}`))).json();
}

export async function getPostPastByIdService(id) {
    return (await (fetch(`/api/post/content/past/${id}`))).json();
}

export async function getPostsService(params) {
    return axios.get('/api/posts', {
        params
    });
}

export async function getAllPostsService(keyword) {
    return (await (fetch(`/api/posts`))).json();
}

export async function getPostTreeService(p) {
    return (await (fetch(`/api/tree.json`))).json();
}

export async function getPostFoldersTreeService() {
    return (await (fetch(`/api/posts/folders/tree`))).json();
}

export async function getPostsByDirectoryService(id) {
    return (await (fetch(`/api/posts/directory/${id}`))).json();
}
//
