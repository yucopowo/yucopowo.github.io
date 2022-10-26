import * as marked from 'marked';
// import highlight from 'highlight.js';
// console.log(hljs);
marked.setOptions({
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    },
});

function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

const name = decodeURI(decodeURI(getQueryString('post')));


(async () => {
    const md = await fetch('/posts/'+name).then(r=>r.text());

    // console.log(md);

    const html = marked.parse(md);

    document.getElementById('content').innerHTML = html;


    //

    setTimeout(() => {
        console.log(document.body.scrollHeight)
        // console.log(document.body.clientHeight)
        // console.log(document.body.offsetHeight)
        console.log(window.screen.availHeight);
        window.frameElement.style.height = document.documentElement.offsetHeight+'px';
    }, 0);

})();
