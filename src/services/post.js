export async function getPostService(p) {
    const _p = encodeURIComponent(encodeURIComponent(p));
    return (await (fetch(`/api/post/html?path=`+_p))).text();
}

export async function getPostContentByIdService(id) {
    return (await (fetch(`/api/post/content/${id}`))).json();
}

export async function getPostMdastByIdService(id) {
    return (await (fetch(`/api/post/content/mdast/${id}`))).json();
}

export async function getPostsService(pagination) {
    return (await (fetch(
        `/api/posts?current=${pagination.current}&pageSize=${pagination.pageSize}`
    ))).json();
}

export async function getAllPostsService() {
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
