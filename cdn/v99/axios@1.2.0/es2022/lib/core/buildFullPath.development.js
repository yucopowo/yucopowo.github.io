/* esm.sh - esbuild bundle(axios@1.2.0/lib/core/buildFullPath) es2022 development */
// esm-build-753f2022d04cd96f898dc039acdd162d84a3f196-01a2ad5a/node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// esm-build-753f2022d04cd96f898dc039acdd162d84a3f196-01a2ad5a/node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

// esm-build-753f2022d04cd96f898dc039acdd162d84a3f196-01a2ad5a/node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
export { buildFullPath as default };
