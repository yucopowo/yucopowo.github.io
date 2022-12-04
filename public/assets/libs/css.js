export function style(source, id) {
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

export function link(url, id) {
    if(id && document.getElementById(id)) {
        return;
    }
    let link = document.createElement('link');
    if(id) {
        link.id = id;
    }
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);
    document.head.appendChild(link);
}

// selector,
export function webComponentStyle(source, id) {

    const e = document.querySelector('.post-detail-component');
    console.log(e);
    const shadowRoot = e.shadowRoot;
    // console.log(shadowRoot.firstChild);
    // console.log(source);
    if(id && shadowRoot.getElementById(id)) {
        return;
    }
    let style = document.createElement('style');
    if(id) {
        style.id = id;
    }
    style.innerHTML = source;
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    shadowRoot.appendChild(style);
    // shadowRoot.insertBefore(shadowRoot,..fir, style);
}

// export default css;
