export async function getPostService(p) {
    return (await (fetch(`/posts/${p}`))).text();
}


export async function getPostsService(p) {
    return (await (fetch(`/posts.json`))).json();
}
