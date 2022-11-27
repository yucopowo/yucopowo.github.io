/* esm.sh - esbuild bundle(rc-upload@4.3.4) es2022 development */
// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/Upload.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React2, { Component as Component2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/AjaxUploader.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _regeneratorRuntime from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/regeneratorRuntime.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _asyncToGenerator from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/asyncToGenerator.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React, { Component } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/request.js
function getError(option, xhr) {
  var msg = 'cannot '
    .concat(option.method, ' ')
    .concat(option.action, ' ')
    .concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}
function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  var xhr = new XMLHttpRequest();
  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    };
  }
  var formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach(function(key) {
      var value = option.data[key];
      if (Array.isArray(value)) {
        value.forEach(function(item) {
          formData.append(''.concat(key, '[]'), item);
        });
        return;
      }
      formData.append(key, value);
    });
  }
  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr), xhr);
  };
  xhr.open(option.method, option.action, true);
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  var headers = option.headers || {};
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }
  Object.keys(headers).forEach(function(h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/uid.js
var now = +new Date();
var index = 0;
function uid() {
  return 'rc-upload-'.concat(now, '-').concat(++index);
}

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/attr-accept.js
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var attr_accept_default = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim();
      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      }
      if (validType.charAt(0) === '.') {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];
        if (lowerType === '.jpg' || lowerType === '.jpeg') {
          affixList = ['.jpg', '.jpeg'];
        }
        return affixList.some(function(affix) {
          return lowerFileName.endsWith(affix);
        });
      }
      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      if (mimeType === validType) {
        return true;
      }
      if (/^\w+$/.test(validType)) {
        warning(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
        return true;
      }
      return false;
    });
  }
  return true;
};

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/traverseFileTree.js
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];
  function sequence() {
    dirReader.readEntries(function(entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);
      var isFinished = !entryList.length;
      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }
  sequence();
}
var traverseFileTree = function traverseFileTree2(files, callback, isAccepted) {
  var _traverseFileTree = function _traverseFileTree2(item, path) {
    item.path = path || '';
    if (item.isFile) {
      item.file(function(file) {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function(entries) {
        entries.forEach(function(entryItem) {
          _traverseFileTree2(entryItem, ''.concat(path).concat(item.name, '/'));
        });
      });
    }
  };
  files.forEach(function(file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};
var traverseFileTree_default = traverseFileTree;

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/AjaxUploader.js
var _excluded = [
  'component',
  'prefixCls',
  'className',
  'disabled',
  'id',
  'style',
  'multiple',
  'accept',
  'capture',
  'children',
  'directory',
  'openFileDialogOnClick',
  'onMouseEnter',
  'onMouseLeave'
];
var AjaxUploader = /* @__PURE__ */ (function(_Component) {
  _inherits(AjaxUploader2, _Component);
  var _super = _createSuper(AjaxUploader2);
  function AjaxUploader2() {
    var _this;
    _classCallCheck(this, AjaxUploader2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      uid: uid()
    };
    _this.reqs = {};
    _this.fileInput = void 0;
    _this._isMounted = void 0;
    _this.onChange = function(e) {
      var _this$props = _this.props,
        accept = _this$props.accept,
        directory = _this$props.directory;
      var files = e.target.files;
      var acceptedFiles = _toConsumableArray(files).filter(function(file) {
        return !directory || attr_accept_default(file, accept);
      });
      _this.uploadFiles(acceptedFiles);
      _this.reset();
    };
    _this.onClick = function(e) {
      var el = _this.fileInput;
      if (!el) {
        return;
      }
      var _this$props2 = _this.props,
        children = _this$props2.children,
        onClick = _this$props2.onClick;
      if (children && children.type === 'button') {
        var parent = el.parentNode;
        parent.focus();
        parent.querySelector('button').blur();
      }
      el.click();
      if (onClick) {
        onClick(e);
      }
    };
    _this.onKeyDown = function(e) {
      if (e.key === 'Enter') {
        _this.onClick(e);
      }
    };
    _this.onFileDrop = function(e) {
      var multiple = _this.props.multiple;
      e.preventDefault();
      if (e.type === 'dragover') {
        return;
      }
      if (_this.props.directory) {
        traverseFileTree_default(Array.prototype.slice.call(e.dataTransfer.items), _this.uploadFiles, function(_file) {
          return attr_accept_default(_file, _this.props.accept);
        });
      } else {
        var files = _toConsumableArray(e.dataTransfer.files).filter(function(file) {
          return attr_accept_default(file, _this.props.accept);
        });
        if (multiple === false) {
          files = files.slice(0, 1);
        }
        _this.uploadFiles(files);
      }
    };
    _this.uploadFiles = function(files) {
      var originFiles = _toConsumableArray(files);
      var postFiles = originFiles.map(function(file) {
        file.uid = uid();
        return _this.processFile(file, originFiles);
      });
      Promise.all(postFiles).then(function(fileList) {
        var onBatchStart = _this.props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0
          ? void 0
          : onBatchStart(
              fileList.map(function(_ref) {
                var origin = _ref.origin,
                  parsedFile = _ref.parsedFile;
                return {
                  file: origin,
                  parsedFile
                };
              })
            );
        fileList
          .filter(function(file) {
            return file.parsedFile !== null;
          })
          .forEach(function(file) {
            _this.post(file);
          });
      });
    };
    _this.processFile = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(
        /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(file, fileList) {
          var beforeUpload,
            transformedFile,
            action,
            mergedAction,
            data,
            mergedData,
            parsedData,
            parsedFile,
            mergedParsedFile;
          return _regeneratorRuntime().wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    beforeUpload = _this.props.beforeUpload;
                    transformedFile = file;
                    if (!beforeUpload) {
                      _context.next = 14;
                      break;
                    }
                    _context.prev = 3;
                    _context.next = 6;
                    return beforeUpload(file, fileList);
                  case 6:
                    transformedFile = _context.sent;
                    _context.next = 12;
                    break;
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](3);
                    transformedFile = false;
                  case 12:
                    if (!(transformedFile === false)) {
                      _context.next = 14;
                      break;
                    }
                    return _context.abrupt('return', {
                      origin: file,
                      parsedFile: null,
                      action: null,
                      data: null
                    });
                  case 14:
                    action = _this.props.action;
                    if (!(typeof action === 'function')) {
                      _context.next = 21;
                      break;
                    }
                    _context.next = 18;
                    return action(file);
                  case 18:
                    mergedAction = _context.sent;
                    _context.next = 22;
                    break;
                  case 21:
                    mergedAction = action;
                  case 22:
                    data = _this.props.data;
                    if (!(typeof data === 'function')) {
                      _context.next = 29;
                      break;
                    }
                    _context.next = 26;
                    return data(file);
                  case 26:
                    mergedData = _context.sent;
                    _context.next = 30;
                    break;
                  case 29:
                    mergedData = data;
                  case 30:
                    parsedData =
                      (_typeof(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile
                        ? transformedFile
                        : file;
                    if (parsedData instanceof File) {
                      parsedFile = parsedData;
                    } else {
                      parsedFile = new File([parsedData], file.name, {
                        type: file.type
                      });
                    }
                    mergedParsedFile = parsedFile;
                    mergedParsedFile.uid = file.uid;
                    return _context.abrupt('return', {
                      origin: file,
                      data: mergedData,
                      parsedFile: mergedParsedFile,
                      action: mergedAction
                    });
                  case 35:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[3, 9]]
          );
        })
      );
      return function(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    })();
    _this.saveFileInput = function(node) {
      _this.fileInput = node;
    };
    return _this;
  }
  _createClass(AjaxUploader2, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._isMounted = true;
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._isMounted = false;
        this.abort();
      }
    },
    {
      key: 'post',
      value: function post(_ref3) {
        var _this2 = this;
        var data = _ref3.data,
          origin = _ref3.origin,
          action = _ref3.action,
          parsedFile = _ref3.parsedFile;
        if (!this._isMounted) {
          return;
        }
        var _this$props3 = this.props,
          onStart = _this$props3.onStart,
          customRequest = _this$props3.customRequest,
          name = _this$props3.name,
          headers = _this$props3.headers,
          withCredentials = _this$props3.withCredentials,
          method = _this$props3.method;
        var uid2 = origin.uid;
        var request = customRequest || upload;
        var requestOption = {
          action,
          filename: name,
          data,
          file: parsedFile,
          headers,
          withCredentials,
          method: method || 'post',
          onProgress: function onProgress(e) {
            var onProgress2 = _this2.props.onProgress;
            onProgress2 === null || onProgress2 === void 0 ? void 0 : onProgress2(e, parsedFile);
          },
          onSuccess: function onSuccess(ret, xhr) {
            var onSuccess2 = _this2.props.onSuccess;
            onSuccess2 === null || onSuccess2 === void 0 ? void 0 : onSuccess2(ret, parsedFile, xhr);
            delete _this2.reqs[uid2];
          },
          onError: function onError(err, ret) {
            var onError2 = _this2.props.onError;
            onError2 === null || onError2 === void 0 ? void 0 : onError2(err, ret, parsedFile);
            delete _this2.reqs[uid2];
          }
        };
        onStart(origin);
        this.reqs[uid2] = request(requestOption);
      }
    },
    {
      key: 'reset',
      value: function reset() {
        this.setState({
          uid: uid()
        });
      }
    },
    {
      key: 'abort',
      value: function abort(file) {
        var reqs = this.reqs;
        if (file) {
          var uid2 = file.uid ? file.uid : file;
          if (reqs[uid2] && reqs[uid2].abort) {
            reqs[uid2].abort();
          }
          delete reqs[uid2];
        } else {
          Object.keys(reqs).forEach(function(uid3) {
            if (reqs[uid3] && reqs[uid3].abort) {
              reqs[uid3].abort();
            }
            delete reqs[uid3];
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _classNames;
        var _this$props4 = this.props,
          Tag = _this$props4.component,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          id = _this$props4.id,
          style = _this$props4.style,
          multiple = _this$props4.multiple,
          accept = _this$props4.accept,
          capture = _this$props4.capture,
          children = _this$props4.children,
          directory = _this$props4.directory,
          openFileDialogOnClick = _this$props4.openFileDialogOnClick,
          onMouseEnter = _this$props4.onMouseEnter,
          onMouseLeave = _this$props4.onMouseLeave,
          otherProps = _objectWithoutProperties(_this$props4, _excluded);
        var cls = classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, prefixCls, true),
          _defineProperty(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
          _defineProperty(_classNames, className, className),
          _classNames)
        );
        var dirProps = directory
          ? {
              directory: 'directory',
              webkitdirectory: 'webkitdirectory'
            }
          : {};
        var events = disabled
          ? {}
          : {
              onClick: openFileDialogOnClick ? this.onClick : function() {},
              onKeyDown: openFileDialogOnClick ? this.onKeyDown : function() {},
              onMouseEnter,
              onMouseLeave,
              onDrop: this.onFileDrop,
              onDragOver: this.onFileDrop,
              tabIndex: '0'
            };
        return /* @__PURE__ */ React.createElement(
          Tag,
          _extends({}, events, {
            className: cls,
            role: 'button',
            style
          }),
          /* @__PURE__ */ React.createElement(
            'input',
            _extends(
              {},
              pickAttrs(otherProps, {
                aria: true,
                data: true
              }),
              {
                id,
                type: 'file',
                ref: this.saveFileInput,
                onClick: function onClick(e) {
                  return e.stopPropagation();
                },
                key: this.state.uid,
                style: {
                  display: 'none'
                },
                accept
              },
              dirProps,
              {
                multiple,
                onChange: this.onChange
              },
              capture != null
                ? {
                    capture
                  }
                : {}
            )
          ),
          children
        );
      }
    }
  ]);
  return AjaxUploader2;
})(Component);
var AjaxUploader_default = AjaxUploader;

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/Upload.js
function empty() {}
var Upload = /* @__PURE__ */ (function(_Component) {
  _inherits2(Upload2, _Component);
  var _super = _createSuper2(Upload2);
  function Upload2() {
    var _this;
    _classCallCheck2(this, Upload2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.uploader = void 0;
    _this.saveUploader = function(node) {
      _this.uploader = node;
    };
    return _this;
  }
  _createClass2(Upload2, [
    {
      key: 'abort',
      value: function abort(file) {
        this.uploader.abort(file);
      }
    },
    {
      key: 'render',
      value: function render() {
        return /* @__PURE__ */ React2.createElement(
          AjaxUploader_default,
          _extends2({}, this.props, {
            ref: this.saveUploader
          })
        );
      }
    }
  ]);
  return Upload2;
})(Component2);
Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
var Upload_default = Upload;

// esm-build-2278d4b39d3d395896fb6beb6ee3bd76fa30395a-864e2fc7/node_modules/rc-upload/es/index.js
var es_default = Upload_default;
export { es_default as default };
