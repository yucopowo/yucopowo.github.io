function css(source) {
    // console.log(source);
    let link = document.createElement('style');
    link.innerHTML = source;
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    document.head.appendChild(link);
}
export default css;
