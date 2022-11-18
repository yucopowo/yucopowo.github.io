const define = (() => {
    const topWindow = window.parent || window.top || window;
    const modules = [];

    let emitter = null;
    function getArgs(func) {
        const args = func.toString().match(/\s.*?\(([^)]*)\)/)[1];
        return args.split(",").map(function (arg){
            return arg.replace(/\/\*.*\*\//,"").trim();
        }).filter(function(args) {
            return args;
        });
    }

    function define(m) {
        modules.push([m, getArgs(m)]);
    }

    function ready() {
        if(topWindow.EventEmitter && !emitter){
            emitter = new topWindow.EventEmitter();
            // emitter.addListener('scrollTo', (data) => {
            //     console.log('scrollTo==',data);
            // });
        }

        modules.forEach((m) => {
            const module = m[0];
            const args = m[1].map((a) => a==='emitter'?emitter:topWindow[a]);
            module.apply(null, args);
        });
    }

    window.addEventListener('message', (e) => {
        try {
            const data = JSON.parse(e.data);
            if(data.type === 'DOMContentLoaded') {
                ready();
            } else {
                if(emitter) {
                    emitter.emit(data.type, data);
                }
            }
        } catch (e) {
            console.error(e);
        }
    });

    return define;
})();

function random(min=1, max=99999){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getFirstNodePositionInView(container) {
    const children = container.children;
    for (let i = 0;i<children.length;i++) {
        const node = children[i];
        const clientRect = node.getBoundingClientRect();
        if(((clientRect.top + clientRect.height) > 0) || (i===children.length-1)) {
            const p = Math.abs(clientRect.top / clientRect.height);
            return {
                id: node.getAttribute('id'),
                offset: p
            };
        }
    }
}

const UUID = (() => {
    let index = 1;
    return () => index++;
})();
