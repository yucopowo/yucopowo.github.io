import Handlebars from 'handlebars';
import Babel from 'babel-standalone';

Handlebars.registerHelper('react', function (node) {
    const value = node.value;
    const { code } = Babel.transform(value, {
        // 'env',
        presets: ['react'],
        plugins: [],
    });
    return code.replace(/^(\s*)export\s+default\s+/m, (s, before) => {
        return before + `\n window.__MODULE__ = `;
    });
});

const template = Handlebars.compile(`

<head>
<meta charset="utf-8">

{{>common-style}}

<script>
    (() => {
        const script = document.createElement('script');
        script.type = 'importmap';
        
        const version = {{{version}}};
        const __LIBS__ = Object.assign({}, top.window.__LIBS__);
        if (version < 18) {
            __LIBS__['react'] = "https://esm.sh/react@"+version+'?dev';
            __LIBS__['react-dom'] = "https://esm.sh/react-dom@"+version+'?dev';
            __LIBS__['react-dom/client'] = "https://esm.sh/react-dom/client@"+version+'?dev';
        }
        script.textContent = JSON.stringify({"imports": __LIBS__}, null, 2);
        document.currentScript.after(script);
    })();
</script>

</head>

<body>

<script type="module">
{{{react node}}}
</script>


{{#compare version '>=' 18}}

<script type="module">
import React from 'react';
import { createRoot  } from 'react-dom/client';
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(React.createElement(window.__MODULE__));
</script>

{{else}}

<script type="module">
import React from 'react';
import ReactDOM from 'react-dom';
const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(React.createElement(window.__MODULE__), container);
</script>

{{/compare}}


{{#unless node.attrs.height}}
{{>common-script}}
{{/unless}}

</body>
 

`);

export default template;
