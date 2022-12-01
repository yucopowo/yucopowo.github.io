export function uuid() {
    const temp_url = URL.createObjectURL(new Blob());
    const uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf("/") + 1);
}

export function safeJSONParse(s) {
    if(!s) return s;
    try {
        return JSON.parse(s);
    } catch (e) {

    }
    return {};
}
