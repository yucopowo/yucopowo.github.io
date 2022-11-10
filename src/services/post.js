export async function getPostService(p) {
    const _p = encodeURIComponent(encodeURIComponent(p));
    return (await (fetch(`/api/post/html?path=`+_p))).text();
}

export async function getPostContentByIdService(id) {
    return (await (fetch(`/api/post/content/${id}`))).json();
}

export async function getPostsService(p) {
    return (await (fetch(`/posts.json`))).json();
}

export async function getAllPostsService(p) {
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
