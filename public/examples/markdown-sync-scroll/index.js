const editor = document.getElementById('editor');
const editorContentWindow = editor.contentWindow;

const previewer = document.getElementById('previewer');
const previewerContentWindow = previewer.contentWindow;
window.addEventListener('message', (e) => {
    try {
        const data = JSON.parse(e.data);
        if(data.type === 'scrollTo') {
            if(data.to === 'previewer') {
                previewerContentWindow.postMessage(e.data);
            } else if(data.to === 'editor') {
                editorContentWindow.postMessage(e.data);
            }
        }
    } catch (e) {

    }
});

document.addEventListener('DOMContentLoaded', () => {
    editor.onload = () => {
        editorContentWindow.postMessage(JSON.stringify({
            type: 'DOMContentLoaded'
        }));
    };
    previewer.onload = () => {
        previewerContentWindow.postMessage(JSON.stringify({
            type: 'DOMContentLoaded'
        }));
    };
});
