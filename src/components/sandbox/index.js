import Babel from 'https://esm.sh/@babel/standalone';

class BlogSandbox extends HTMLElement {

    constructor() {
        super();



        const source = decodeURIComponent(this.innerHTML);
        // const container = shadowRoot.querySelector('#tabsSlot');
        this.innerHTML = '';
        const { code } = Babel.transform(source, {
            // 'env',
            presets: ['react'],
            plugins: [],
        });
        //
        // console.log('code====');

        // console.log(code);



        const blob = new Blob([code],{type:"text/javascript"});
        //
        const url = URL.createObjectURL(blob);
        //
        //
        const uuid = url.substring(url.lastIndexOf('/')+1);
        this.id=uuid;

        const shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `
<div style="border: 1px solid white;">
<slot id="${uuid}">loading...</slot>
</div>
        `;

        const root = document.createElement('script');
        root.type = 'module';
        root.innerHTML = `
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from '${url}';
        const host = document.getElementById('${uuid}');
        const container = host.shadowRoot.getElementById('${uuid}');
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(App));
        `;
        shadowRoot.appendChild(root);



        // this.id = uuid;
        // const container = document.createElement('div');

        // console.log(tabsSlot);


    }
//     connectedCallback() {
//         const shadow = this.attachShadow({mode: 'open'});
//         shadow.innerHTML = `<p>
//           Hello, ============
//         </p>
//
//         <script>
//         console.log(111);
//         </script>
// `;
//     }

//     constructor() {
//         // 必须首先调用 super 方法
//         super();
//         // console.log(this);
//         const source = decodeURIComponent(this.innerHTML);
//         this.innerHTML = '';
//
//         const shadowNode = this.attachShadow({ mode: "closed" });
//         shadowNode.innerHTML = `
//
//         <script>
//         console.log(this);
// </script>
//         `;
//         // const root = document.createElement('div');
//         // root.id = '123';
//         //
//         // let content = `<script> console.log(this);console.log(this.querySelector('#123')); <\/script>`;
//         // let fragment = document.createRange().createContextualFragment(content);
//         // shadowNode.append(document.importNode(fragment, true));
//         // shadowNode.appendChild(root);
//
//
//         // const root = document.createElement('div');
//         // const { code } = Babel.transform(source, {
//         //     // 'env',
//         //     presets: ['react'],
//         //     plugins: [],
//         // });
//         //
//         // const blob = new Blob([code],{type:"text/javascript"});
//         //
//         // const url = URL.createObjectURL(blob);
//         //
//         //
//         // const uuid = url.substring(url.lastIndexOf('/')+1);
//         // this.id = uuid;
//         // const container = document.createElement('div');
//         // container.id = uuid;
//         // root.appendChild(container);
//         //
//         // const shadowNode = this.attachShadow({ mode: "closed" });
//         // shadowNode.appendChild(root);
//         //
//         //
//         // const script = document.createElement('script');
//         // script.type = 'module';
//         //
//         //
//         //
//         //
//         // script.innerHTML = `
//         //
//         // import React from 'react';
//         // import ReactDOM from 'react-dom';
//         // import App from '${url}';
//         // console.log('=========');
//         // console.log(this);
//         // // debugger
//         // // this.querySelector('#test');
//         // // const shadowRoot = document.getElementById('${uuid}').shadowRoot;
//         // // const container = document.shadowRoot.getElementById('${uuid}');
//         // // const root = ReactDOM.createRoot(container);
//         // // root.render(React.createElement(App));
//         //
//         // `;
//         // root.appendChild(script);
//
// //         root.innerHTML = `
// // <style>
// // html,body {
// //     background-color: #fff;
// // }
// // </style>
// // <script type="importmap">
// // {
// //     "imports": {
// //         "react": "https://esm.sh/react",
// //         "react-dom": "https://esm.sh/react-dom",
// //         "react-router-dom": "https://esm.sh/react-router-dom",
// //         "react-router": "https://esm.sh/react-router"
// //     }
// // }
// // </script>
// // <script src="/libs/babel.js"></script>
// // <script type="text/babel" data-type="module" data-presets="react">
// // ${code}
// // </script>
// // `;
//
//
//
//
//
//
//
//
//
//         // console.log(code);
//         // this.innerHTML = '';
// //         this.style.display = 'none';
// //         // const container = document.createElement('div');
// //         // this.after(container);
// //         // this.style.display = 'block';
// //
// //
// //         const iframe = document.createElement('iframe');
// //         iframe.frameBorder = '0';
// //         iframe.scrolling = 'no';
// //         iframe.width = '100%';
// //         // iframe.setAttribute('data-code ', code);
// //         iframe.srcdoc;
// //
// //         const html = `
// // <head>
// // <style>
// // html,body {
// // background-color: #fff;
// // }
// // </style>
// // <script type="importmap">
// // {
// //     "imports": {
// //         "react": "https://esm.sh/react",
// //         "react-dom": "https://esm.sh/react-dom",
// //         "react-router-dom": "https://esm.sh/react-router-dom",
// //         "react-router": "https://esm.sh/react-router"
// //     }
// // }
// // </script>
// // <script src="/libs/babel.js"></script>
// // <script>
// // // window.addEventListener('resize', () => {
// // //
// // // }, false);
// // function resize() {
// //     if(window.frameElement) {
// //         const iframeHeight = document.documentElement.offsetHeight;
// //         window.frameElement.style.height = (iframeHeight+100) +'px';
// //     }
// // }
// // window.addEventListener('load', () => {
// //     resize();
// // });
// // setTimeout(() => {
// //
// // }, 200);
// // </script>
// // </head>
// // <body>
// // <script type="text/babel" data-type="module" data-presets="react">
// // ${code}
// // </script>
// // </body>
// //         `;
// //         // this.appendChild(iframe);
// //         this.after(iframe);
// //
// //         iframe.contentWindow.document.open();
// //
// //         iframe.contentWindow.document.write(html);
// //
// //         iframe.contentWindow.document.close();
//
//         // this.innerHTML =  `<iframe width="300" height="200" srcdoc=\`<script>console.log(1);</script>\`</iframe>`;
//     }
}

customElements.define("blog-sandbox", BlogSandbox);

