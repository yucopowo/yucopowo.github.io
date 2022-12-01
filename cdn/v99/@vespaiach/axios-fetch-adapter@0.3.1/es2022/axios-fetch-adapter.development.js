/* esm.sh - esbuild bundle(@vespaiach/axios-fetch-adapter@0.3.1) es2022 development */
// esm-build-11d1a897c96cba4c35773b429d164b7fe0d3a5da-11998d8a/node_modules/@vespaiach/axios-fetch-adapter/index.js
import axios from '/cdn/v99/axios@1.2.0/es2022/axios.development.js';
import settle from '/cdn/v99/axios@1.2.0/es2022/lib/core/settle.development.js';
import buildURL from '/cdn/v99/axios@1.2.0/es2022/lib/helpers/buildURL.development.js';
import buildFullPath from '/cdn/v99/axios@1.2.0/es2022/lib/core/buildFullPath.development.js';
import { isUndefined, isStandardBrowserEnv, isFormData } from '/cdn/v99/axios@1.2.0/es2022/lib/utils.development.js';
async function fetchAdapter(config) {
  const request = createRequest(config);
  const promiseChain = [getResponse(request, config)];
  if (config.timeout && config.timeout > 0) {
    promiseChain.push(
      new Promise(res => {
        setTimeout(() => {
          const message = config.timeoutErrorMessage
            ? config.timeoutErrorMessage
            : 'timeout of ' + config.timeout + 'ms exceeded';
          res(createError(message, config, 'ECONNABORTED', request));
        }, config.timeout);
      })
    );
  }
  const data = await Promise.race(promiseChain);
  return new Promise((resolve, reject) => {
    if (data instanceof Error) {
      reject(data);
    } else {
      Object.prototype.toString.call(config.settle) === '[object Function]'
        ? config.settle(resolve, reject, data)
        : settle(resolve, reject, data);
    }
  });
}
async function getResponse(request, config) {
  let stageOne;
  try {
    stageOne = await fetch(request);
  } catch (e) {
    return createError('Network Error', config, 'ERR_NETWORK', request);
  }
  const response = {
    ok: stageOne.ok,
    status: stageOne.status,
    statusText: stageOne.statusText,
    headers: new Headers(stageOne.headers),
    config,
    request
  };
  if (stageOne.status >= 200 && stageOne.status !== 204) {
    switch (config.responseType) {
      case 'arraybuffer':
        response.data = await stageOne.arrayBuffer();
        break;
      case 'blob':
        response.data = await stageOne.blob();
        break;
      case 'json':
        response.data = await stageOne.json();
        break;
      case 'formData':
        response.data = await stageOne.formData();
        break;
      default:
        response.data = await stageOne.text();
        break;
    }
  }
  return response;
}
function createRequest(config) {
  const headers = new Headers(config.headers);
  if (config.auth) {
    const username = config.auth.username || '';
    const password = config.auth.password ? decodeURI(encodeURIComponent(config.auth.password)) : '';
    headers.set('Authorization', `Basic ${btoa(username + ':' + password)}`);
  }
  const method = config.method.toUpperCase();
  const options = {
    headers,
    method
  };
  if (method !== 'GET' && method !== 'HEAD') {
    options.body = config.data;
    if (isFormData(options.body) && isStandardBrowserEnv()) {
      headers.delete('Content-Type');
    }
  }
  if (config.mode) {
    options.mode = config.mode;
  }
  if (config.cache) {
    options.cache = config.cache;
  }
  if (config.integrity) {
    options.integrity = config.integrity;
  }
  if (config.redirect) {
    options.redirect = config.redirect;
  }
  if (config.referrer) {
    options.referrer = config.referrer;
  }
  if (!isUndefined(config.withCredentials)) {
    options.credentials = config.withCredentials ? 'include' : 'omit';
  }
  const fullPath = buildFullPath(config.baseURL, config.url);
  const url = buildURL(fullPath, config.params, config.paramsSerializer);
  return new Request(url, options);
}
function createError(message, config, code, request, response) {
  if (axios.AxiosError && typeof axios.AxiosError === 'function') {
    return new axios.AxiosError(message, axios.AxiosError[code], config, request, response);
  }
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
}
function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
}
export { fetchAdapter as default };
