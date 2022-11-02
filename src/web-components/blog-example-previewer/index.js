import React from 'react';
import { createRoot } from 'react-dom/client';
import Previewer from './previewer.jsx';

class BlogExamplePreviewer extends HTMLElement {

    connectedCallback() {
        const url = this.getAttribute('src');
        // console.log(url);
        const container = document.createElement('div');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(container);

        // this.appendChild(container);

        const style = document.createElement('style');
        style.innerHTML = `
        

.browserWindow_my1Q {
  border: 3px solid #ebedf0;
  border-radius: 0.4rem 0.4rem 0 0;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  /*margin-bottom: calc(1.25*1rem);*/
}

.browserWindowHeader_jXSR {
  align-items: center;
  background: #ebedf0;;
  display: flex;
  padding: .5rem 1rem;
}

.buttons_uHc7 {
  white-space: nowrap;
}

.dot_giz1 {
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin-right: 6px;
  margin-top: 4px;
  width: 12px;
}


.browserWindowAddressBar_Pd8y {
  background-color: #ffffff;
  border-radius: 12.5px;
  color: #444950;
  flex: 1 0;
  font: 400 13px Arial,sans-serif;
  margin: 0 1rem 0 .5rem;
  padding: 5px 15px;
  -webkit-user-select: none;
  user-select: none;
}
.text--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.browserWindowMenuIcon_Vhuh, .searchContainer_AU74 {
  margin-left: auto;
}

.bar_rrRL {
  background-color: #aaa;
  display: block;
  height: 3px;
  margin: 3px 0;
  width: 17px;
}

.browserWindowBody_Idgs {
  background-color: transparent;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 1rem;
}

        `;
        shadowRoot.appendChild(style);

        const root = createRoot(container);
        root.render(React.createElement(Previewer,{url}));

    }

}

customElements.define("blog-example-previewer", BlogExamplePreviewer);
