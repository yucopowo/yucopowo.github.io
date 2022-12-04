import React from '/cdn/react.js';

const h = React.createElement;
let index = 1;
// id: '0'
const key = new Proxy({}, {
    get() {
        return String(index++);
    }
});

function pre(_props) {
    const props = _props.children.props;
    const type = props['data-type'];
    if(!type) return h('code', {}, props.children);
    const data = {};
    Object.keys(props).forEach((k) => {
        if(k.startsWith('data-')) {
            data[k] = props[k];
        }
    });
    return h('post-code-component', {
            class: 'post-code-component',
            ...data,
        },
        h('pre', {className: props.className},
            h('code',{className: props.className},props.children)
        )
    );
}

const components = {
    pre
};

const App = (props) => {
    const { Content } = props;
    return h(Content, { key: key.id, components});
};

export default App;

