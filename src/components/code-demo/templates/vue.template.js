import Handlebars from 'handlebars';
// return fetch(url).then(response => response.ok ? response.text() : Promise.reject(response));
// {{#compare version '==' 2}}
// <script src="//unpkg.com/vue@2/dist/vue.runtime.min.js"></script>
// <script src="/src/assets/libs/vue-sfc-loader/vue2-sfc-loader.js"></script>
// {{else}}
// <script src="//unpkg.com/vue@next"></script>
// <script src="/src/assets/libs/vue-sfc-loader/vue3-sfc-loader.js"></script>
// {{/compare}}
// const app = new Vue({
//   components: {
//     'my-component': Vue.defineAsyncComponent(() => loadModule('./myComponent.vue', options)),
//   },
//   template: '<my-component></my-component>'
// });
//
// app.$mount('#app');
// {{#compare version '==' 2}}
//
// // const loader = window["vue2-sfc-loader"];
// // const { loadModule, version } = loader;
// console.log(version);
//
// loadModule('/app.vue', options).then((component) => {
//     console.log(component);
//     new Vue(component).$mount('#app');
// });
//
//
// {{else}}
//
//
// const loader = window["vue3-sfc-loader"];
// const { loadModule, version } = loader;
//
// loadModule('./myComponent.vue', options).then((component) => {
// console.log(component);
// });
// // const app = Vue.createApp({
// //   components: {
// //     'my-component': Vue.defineAsyncComponent(() => ),
// //   },
// //   template: '<my-component></my-component>'
// // });
// //
// // app.mount('#app');
//
// {{/compare}}



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
        // if (version < 18) {
        //     __LIBS__['react'] = "https://esm.sh/react@"+version+'?dev';
        //     __LIBS__['react-dom'] = "https://esm.sh/react-dom@"+version+'?dev';
        //     __LIBS__['react-dom/client'] = "https://esm.sh/react-dom/client@"+version+'?dev';
        // }
        script.textContent = JSON.stringify({"imports": __LIBS__}, null, 2);
        document.currentScript.after(script);
    })();
</script>


</head>

<body>

<div id="app"></div>
        
<textarea id="code" hidden>
{{{node.value}}}
</textarea>

{{#compare version '==' 2}}
{{else}}


<script type="module">
import * as Vue from 'vue';
import { loadModule } from 'vue3-sfc-loader';

const { createApp, defineComponent} = Vue;

const options = {
  
  moduleCache: {
    vue: Vue,
  },
  
  getFile() {
    return document.getElementById('code').value;
  },
  
  addStyle(styleStr) {
    const style = document.createElement('style');
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
  
  log(type, ...args) {
    console.log(type, ...args);
  }
}

loadModule('/app.vue', options).then((c) => {
    const app = createApp(c);
    app.mount('#app');
});







</script>


{{/compare}}
 










{{#unless node.attrs.height}}
{{>common-script}}
{{/unless}}

</body>
 

`);

export default template;
