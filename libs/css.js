function css(source, id) {
    // console.log(source);
    if(id && document.getElementById(id)) {
        return;
    }
    let link = document.createElement('style');
    if(id) {
        link.id = id;
    }
    link.innerHTML = source;
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    document.head.appendChild(link);
}
export default css;
