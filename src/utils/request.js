export async function get(url, params) {
    return (await (fetch(`/api/posts`))).json();
}
