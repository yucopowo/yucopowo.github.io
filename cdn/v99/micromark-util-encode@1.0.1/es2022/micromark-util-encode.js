/* esm.sh - esbuild bundle(micromark-util-encode@1.0.1) es2022 production */var c={"\"":"quot","&":"amp","<":"lt",">":"gt"};function n(e){return e.replace(/["&<>]/g,r);function r(t){return"&"+c[t]+";"}}export{n as encode};