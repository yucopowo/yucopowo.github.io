/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/container-phrasing.js) es2022 production */import{track as g}from"/cdn/v99/mdast-util-to-markdown@1.3.0/es2022/lib/util/track.js";function k(d,n,i){let a=n.indexStack,t=d.children||[],e=[],r=-1,h=i.before;a.push(-1);let c=g(i);for(;++r<t.length;){let f=t[r],o;if(a[a.length-1]=r,r+1<t.length){let l=n.handle.handlers[t[r+1].type];l&&l.peek&&(l=l.peek),o=l?l(t[r+1],d,n,{before:"",after:"",...c.current()}).charAt(0):""}else o=i.after;e.length>0&&(h==="\r"||h===`
`)&&f.type==="html"&&(e[e.length-1]=e[e.length-1].replace(/(\r?\n|\r)$/," "),h=" ",c=g(i),c.move(e.join(""))),e.push(c.move(n.handle(f,d,n,{...c.current(),before:h,after:o}))),h=e[e.length-1].slice(-1)}return a.pop(),e.join("")}export{k as containerPhrasing};