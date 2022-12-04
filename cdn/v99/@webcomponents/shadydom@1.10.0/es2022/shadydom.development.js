/* esm.sh - esbuild bundle(@webcomponents/shadydom@1.10.0) es2022 development */
var __global$ = globalThis || (typeof window !== 'undefined' ? window : self);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-8d60da9f5b3c8ad747986022d9a241e7d5b18b24-4cbb7f35/node_modules/@webcomponents/shadydom/shadydom.min.js
var require_shadydom_min = __commonJS({
  'esm-build-8d60da9f5b3c8ad747986022d9a241e7d5b18b24-4cbb7f35/node_modules/@webcomponents/shadydom/shadydom.min.js'(
    exports
  ) {
    (function() {
      'use strict';

      var n;
      function aa(a) {
        var b = 0;
        return function() {
          return b < a.length
            ? {
                done: false,
                value: a[b++]
              }
            : {
                done: true
              };
        };
      }
      function p(a) {
        var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b
          ? b.call(a)
          : {
              next: aa(a)
            };
      }
      function q(a) {
        if (!(a instanceof Array)) {
          a = p(a);
          for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
          a = c;
        }
        return a;
      }
      function ba(a) {
        a = [
          'object' == typeof globalThis && globalThis,
          a,
          'object' == typeof window && window,
          'object' == typeof self && self,
          'object' == typeof __global$ && __global$
        ];
        for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          if (c && c.Math == Math) return c;
        }
        throw Error('Cannot find global object');
      }
      var ca = ba(this);
      function da() {}
      da.prototype.toJSON = function() {
        return {};
      };
      function t(a) {
        a.__shady || (a.__shady = new da());
        return a.__shady;
      }
      function u(a) {
        return a && a.__shady;
      }
      var v = window.ShadyDOM || {};
      v.da = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
      var ea = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
      v.i = !!(ea && ea.configurable && ea.get);
      v.N = v.force || !v.da;
      v.l = v.noPatch || false;
      v.C = v.preferPerformance;
      v.O = 'on-demand' === v.l;
      var fa;
      var ha = v.querySelectorImplementation;
      fa = -1 < ['native', 'selectorEngine'].indexOf(ha) ? ha : void 0;
      v.ga = fa;
      v.V = navigator.userAgent.match('Trident');
      function ia() {
        return Document.prototype.msElementsFromPoint ? 'msElementsFromPoint' : 'elementsFromPoint';
      }
      function w(a) {
        return (a = u(a)) && void 0 !== a.firstChild;
      }
      function x(a) {
        return a instanceof ShadowRoot;
      }
      function ja(a) {
        return (a = (a = u(a)) && a.root) && ka(a);
      }
      var y = Element.prototype,
        la =
          y.matches ||
          y.matchesSelector ||
          y.mozMatchesSelector ||
          y.msMatchesSelector ||
          y.oMatchesSelector ||
          y.webkitMatchesSelector,
        ma = document.createTextNode(''),
        na = 0,
        oa = [];
      new MutationObserver(function() {
        for (; oa.length; )
          try {
            oa.shift()();
          } catch (a) {
            throw ((ma.textContent = na++), a);
          }
      }).observe(ma, {
        characterData: true
      });
      function pa(a) {
        oa.push(a);
        ma.textContent = na++;
      }
      var qa = document.contains
        ? function(a, b) {
            return a.__shady_native_contains(b);
          }
        : function(a, b) {
            return a === b || (a.documentElement && a.documentElement.__shady_native_contains(b));
          };
      function ra(a, b) {
        for (; b; ) {
          if (b == a) return true;
          b = b.__shady_parentNode;
        }
        return false;
      }
      function z(a) {
        for (var b = a.length - 1; 0 <= b; b--) {
          var c = a[b],
            d = c.getAttribute('id') || c.getAttribute('name');
          d && 'length' !== d && isNaN(d) && (a[d] = c);
        }
        a.item = function(e) {
          return a[e];
        };
        a.namedItem = function(e) {
          if ('length' !== e && isNaN(e) && a[e]) return a[e];
          for (var f = p(a), g = f.next(); !g.done; g = f.next())
            if (((g = g.value), (g.getAttribute('id') || g.getAttribute('name')) == e)) return g;
          return null;
        };
        return a;
      }
      function sa(a) {
        var b = [];
        for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);
        return b;
      }
      function ta(a) {
        var b = [];
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);
        return b;
      }
      function ua(a, b, c) {
        c.configurable = true;
        if (c.value) a[b] = c.value;
        else
          try {
            Object.defineProperty(a, b, c);
          } catch (d) {}
      }
      function A(a, b, c, d) {
        c = void 0 === c ? '' : c;
        for (var e in b) (d && 0 <= d.indexOf(e)) || ua(a, c + e, b[e]);
      }
      function va(a, b) {
        for (var c in b) c in a && ua(a, c, b[c]);
      }
      function B(a) {
        var b = {};
        Object.getOwnPropertyNames(a).forEach(function(c) {
          b[c] = Object.getOwnPropertyDescriptor(a, c);
        });
        return b;
      }
      function wa(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) (e = c[d]), (a[e] = b[e]);
      }
      function xa(a) {
        return a instanceof Node ? a : document.createTextNode('' + a);
      }
      function D(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        if (1 === b.length) return xa(b[0]);
        c = document.createDocumentFragment();
        b = p(b);
        for (var d = b.next(); !d.done; d = b.next()) c.appendChild(xa(d.value));
        return c;
      }
      function ya(a) {
        var b;
        for (b = void 0 === b ? 1 : b; 0 < b; b--)
          a = a.reduce(function(c, d) {
            Array.isArray(d) ? c.push.apply(c, q(d)) : c.push(d);
            return c;
          }, []);
        return a;
      }
      function za(a) {
        var b = [],
          c = /* @__PURE__ */ new Set();
        a = p(a);
        for (var d = a.next(); !d.done; d = a.next()) (d = d.value), c.has(d) || (b.push(d), c.add(d));
        return b;
      }
      var E = [],
        Aa;
      function Ba(a) {
        Aa || ((Aa = true), pa(F));
        E.push(a);
      }
      function F() {
        Aa = false;
        for (var a = !!E.length; E.length; ) E.shift()();
        return a;
      }
      F.list = E;
      function Ca() {
        this.g = false;
        this.addedNodes = [];
        this.removedNodes = [];
        this.H = /* @__PURE__ */ new Set();
      }
      function Da(a) {
        a.g ||
          ((a.g = true),
          pa(function() {
            a.flush();
          }));
      }
      Ca.prototype.flush = function() {
        if (this.g) {
          this.g = false;
          var a = this.takeRecords();
          a.length &&
            this.H.forEach(function(b) {
              b(a);
            });
        }
      };
      Ca.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
          var a = [
            {
              addedNodes: this.addedNodes,
              removedNodes: this.removedNodes
            }
          ];
          this.addedNodes = [];
          this.removedNodes = [];
          return a;
        }
        return [];
      };
      function Ea(a, b) {
        var c = t(a);
        c.B || (c.B = new Ca());
        c.B.H.add(b);
        var d = c.B;
        return {
          Z: b,
          ba: d,
          aa: a,
          takeRecords: function() {
            return d.takeRecords();
          }
        };
      }
      function Fa(a) {
        var b = a && a.ba;
        b && (b.H.delete(a.Z), b.H.size || (t(a.aa).B = null));
      }
      function Ga(a, b) {
        var c = b.getRootNode();
        return a
          .map(function(d) {
            var e = c === d.target.getRootNode();
            if (e && d.addedNodes) {
              if (
                ((e = [].slice.call(d.addedNodes).filter(function(f) {
                  return c === f.getRootNode();
                })),
                e.length)
              )
                return (
                  (d = Object.create(d)),
                  Object.defineProperty(d, 'addedNodes', {
                    value: e,
                    configurable: true
                  }),
                  d
                );
            } else if (e) return d;
          })
          .filter(function(d) {
            return d;
          });
      }
      var Ha = /[&\u00A0"]/g,
        Ia = /[&\u00A0<>]/g;
      function Ja(a) {
        switch (a) {
          case '&':
            return '&amp;';
          case '<':
            return '&lt;';
          case '>':
            return '&gt;';
          case '"':
            return '&quot;';
          case '\xA0':
            return '&nbsp;';
        }
      }
      function Ka(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = true;
        return b;
      }
      var La = Ka('area base br col command embed hr img input keygen link meta param source track wbr'.split(' ')),
        Ma = Ka('style script xmp iframe noembed noframes plaintext noscript'.split(' '));
      function Na(a, b) {
        'template' === a.localName && (a = a.content);
        for (var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
          a: {
            var h = g;
            var k = a,
              l = b;
            switch (h.nodeType) {
              case Node.ELEMENT_NODE:
                k = h.localName;
                for (var m = '<' + k, r = h.attributes, C = 0, S; (S = r[C]); C++)
                  m += ' ' + S.name + '="' + S.value.replace(Ha, Ja) + '"';
                m += '>';
                h = La[k] ? m : m + Na(h, l) + '</' + k + '>';
                break a;
              case Node.TEXT_NODE:
                h = h.data;
                h = k && Ma[k.localName] ? h : h.replace(Ia, Ja);
                break a;
              case Node.COMMENT_NODE:
                h = '<!--' + h.data + '-->';
                break a;
              default:
                throw (window.console.error(h), Error('not implemented'));
            }
          }
          c += h;
        }
        return c;
      }
      var G = v.i,
        Oa = {
          querySelector: function(a) {
            return this.__shady_native_querySelector(a);
          },
          querySelectorAll: function(a) {
            return this.__shady_native_querySelectorAll(a);
          }
        },
        Pa = {};
      function Qa(a) {
        Pa[a] = function(b) {
          return b['__shady_native_' + a];
        };
      }
      function H(a, b) {
        A(a, b, '__shady_native_');
        for (var c in b) Qa(c);
      }
      function I(a, b) {
        b = void 0 === b ? [] : b;
        for (var c = 0; c < b.length; c++) {
          var d = b[c],
            e = Object.getOwnPropertyDescriptor(a, d);
          e && (Object.defineProperty(a, '__shady_native_' + d, e), e.value ? Oa[d] || (Oa[d] = e.value) : Qa(d));
        }
      }
      var J = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false),
        K = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false),
        Ra = document.implementation.createHTMLDocument('inert');
      function Sa(a) {
        for (var b; (b = a.__shady_native_firstChild); ) a.__shady_native_removeChild(b);
      }
      var Ta = ['firstElementChild', 'lastElementChild', 'children', 'childElementCount'],
        Ua = ['querySelector', 'querySelectorAll', 'append', 'prepend', 'replaceChildren'];
      function Va() {
        var a = ['dispatchEvent', 'addEventListener', 'removeEventListener'];
        window.EventTarget
          ? (I(window.EventTarget.prototype, a),
            void 0 === window.__shady_native_addEventListener && I(Window.prototype, a))
          : (I(Node.prototype, a), I(Window.prototype, a), I(XMLHttpRequest.prototype, a));
        G
          ? I(
              Node.prototype,
              'parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent'.split(
                ' '
              )
            )
          : H(Node.prototype, {
              parentNode: {
                get: function() {
                  J.currentNode = this;
                  return J.parentNode();
                }
              },
              firstChild: {
                get: function() {
                  J.currentNode = this;
                  return J.firstChild();
                }
              },
              lastChild: {
                get: function() {
                  J.currentNode = this;
                  return J.lastChild();
                }
              },
              previousSibling: {
                get: function() {
                  J.currentNode = this;
                  return J.previousSibling();
                }
              },
              nextSibling: {
                get: function() {
                  J.currentNode = this;
                  return J.nextSibling();
                }
              },
              childNodes: {
                get: function() {
                  var b = [];
                  J.currentNode = this;
                  for (var c = J.firstChild(); c; ) b.push(c), (c = J.nextSibling());
                  return b;
                }
              },
              parentElement: {
                get: function() {
                  K.currentNode = this;
                  return K.parentNode();
                }
              },
              textContent: {
                get: function() {
                  switch (this.nodeType) {
                    case Node.ELEMENT_NODE:
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      for (
                        var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false), c = '', d;
                        (d = b.nextNode());

                      )
                        c += d.nodeValue;
                      return c;
                    default:
                      return this.nodeValue;
                  }
                },
                set: function(b) {
                  if ('undefined' === typeof b || null === b) b = '';
                  switch (this.nodeType) {
                    case Node.ELEMENT_NODE:
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      Sa(this);
                      (0 < b.length || this.nodeType === Node.ELEMENT_NODE) &&
                        this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                      break;
                    default:
                      this.nodeValue = b;
                  }
                }
              }
            });
        I(Node.prototype, 'appendChild insertBefore removeChild replaceChild cloneNode contains'.split(' '));
        I(HTMLElement.prototype, ['parentElement', 'contains']);
        a = {
          firstElementChild: {
            get: function() {
              K.currentNode = this;
              return K.firstChild();
            }
          },
          lastElementChild: {
            get: function() {
              K.currentNode = this;
              return K.lastChild();
            }
          },
          children: {
            get: function() {
              var b = [];
              K.currentNode = this;
              for (var c = K.firstChild(); c; ) b.push(c), (c = K.nextSibling());
              return z(b);
            }
          },
          childElementCount: {
            get: function() {
              return this.children ? this.children.length : 0;
            }
          }
        };
        G
          ? (I(Element.prototype, Ta),
            I(Element.prototype, ['previousElementSibling', 'nextElementSibling', 'innerHTML', 'className']),
            I(HTMLElement.prototype, ['children', 'innerHTML', 'className']))
          : (H(Element.prototype, a),
            H(Element.prototype, {
              previousElementSibling: {
                get: function() {
                  K.currentNode = this;
                  return K.previousSibling();
                }
              },
              nextElementSibling: {
                get: function() {
                  K.currentNode = this;
                  return K.nextSibling();
                }
              },
              innerHTML: {
                get: function() {
                  return Na(this, sa);
                },
                set: function(b) {
                  var c = 'template' === this.localName ? this.content : this;
                  Sa(c);
                  var d = this.localName || 'div';
                  d =
                    this.namespaceURI && this.namespaceURI !== Ra.namespaceURI
                      ? Ra.createElementNS(this.namespaceURI, d)
                      : Ra.createElement(d);
                  d.innerHTML = b;
                  for (b = 'template' === this.localName ? d.content : d; (d = b.__shady_native_firstChild); )
                    c.__shady_native_insertBefore(d, void 0);
                }
              },
              className: {
                get: function() {
                  return this.getAttribute('class') || '';
                },
                set: function(b) {
                  this.setAttribute('class', b);
                }
              }
            }));
        I(Element.prototype, 'setAttribute getAttribute hasAttribute removeAttribute focus blur'.split(' '));
        I(Element.prototype, Ua);
        I(HTMLElement.prototype, ['focus', 'blur']);
        window.HTMLTemplateElement && I(window.HTMLTemplateElement.prototype, ['innerHTML']);
        G ? I(DocumentFragment.prototype, Ta) : H(DocumentFragment.prototype, a);
        I(DocumentFragment.prototype, Ua);
        G ? (I(Document.prototype, Ta), I(Document.prototype, ['activeElement'])) : H(Document.prototype, a);
        I(Document.prototype, ['importNode', 'getElementById', 'elementFromPoint', ia()]);
        I(Document.prototype, Ua);
      }
      var Wa = B({
          get childNodes() {
            return this.__shady_childNodes;
          },
          get firstChild() {
            return this.__shady_firstChild;
          },
          get lastChild() {
            return this.__shady_lastChild;
          },
          get childElementCount() {
            return this.__shady_childElementCount;
          },
          get children() {
            return this.__shady_children;
          },
          get firstElementChild() {
            return this.__shady_firstElementChild;
          },
          get lastElementChild() {
            return this.__shady_lastElementChild;
          },
          get shadowRoot() {
            return this.__shady_shadowRoot;
          }
        }),
        Xa = B({
          get textContent() {
            return this.__shady_textContent;
          },
          set textContent(a) {
            this.__shady_textContent = a;
          },
          get innerHTML() {
            return this.__shady_innerHTML;
          },
          set innerHTML(a) {
            this.__shady_innerHTML = a;
          }
        }),
        Ya = B({
          get parentElement() {
            return this.__shady_parentElement;
          },
          get parentNode() {
            return this.__shady_parentNode;
          },
          get nextSibling() {
            return this.__shady_nextSibling;
          },
          get previousSibling() {
            return this.__shady_previousSibling;
          },
          get nextElementSibling() {
            return this.__shady_nextElementSibling;
          },
          get previousElementSibling() {
            return this.__shady_previousElementSibling;
          },
          get className() {
            return this.__shady_className;
          },
          set className(a) {
            this.__shady_className = a;
          }
        });
      function Za(a) {
        for (var b in a) {
          var c = a[b];
          c && (c.enumerable = false);
        }
      }
      Za(Wa);
      Za(Xa);
      Za(Ya);
      var $a = v.i || true === v.l,
        ab = $a
          ? function() {}
          : function(a) {
              var b = t(a);
              b.X || ((b.X = true), va(a, Ya));
            },
        bb = $a
          ? function() {}
          : function(a) {
              var b = t(a);
              b.W ||
                ((b.W = true),
                va(a, Wa),
                (window.customElements && window.customElements.polyfillWrapFlushCallback && !v.l) || va(a, Xa));
            };
      var L = '__eventWrappers' + Date.now(),
        cb = (function() {
          var a = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
          return a
            ? function(b) {
                return a.get.call(b);
              }
            : null;
        })(),
        db = (function() {
          function a() {}
          var b = false,
            c = {
              get capture() {
                b = true;
                return false;
              }
            };
          window.addEventListener('test', a, c);
          window.removeEventListener('test', a, c);
          return b;
        })();
      function eb(a) {
        if (null === a || ('object' !== typeof a && 'function' !== typeof a)) {
          var b = !!a;
          var c = false;
        } else {
          b = !!a.capture;
          c = !!a.once;
          var d = a.o;
        }
        return {
          U: d,
          capture: b,
          once: c,
          T: db ? a : b
        };
      }
      var fb = {
          blur: true,
          focus: true,
          focusin: true,
          focusout: true,
          click: true,
          dblclick: true,
          mousedown: true,
          mouseenter: true,
          mouseleave: true,
          mousemove: true,
          mouseout: true,
          mouseover: true,
          mouseup: true,
          wheel: true,
          beforeinput: true,
          input: true,
          keydown: true,
          keyup: true,
          compositionstart: true,
          compositionupdate: true,
          compositionend: true,
          touchstart: true,
          touchend: true,
          touchmove: true,
          touchcancel: true,
          pointerover: true,
          pointerenter: true,
          pointerdown: true,
          pointermove: true,
          pointerup: true,
          pointercancel: true,
          pointerout: true,
          pointerleave: true,
          gotpointercapture: true,
          lostpointercapture: true,
          dragstart: true,
          drag: true,
          dragenter: true,
          dragleave: true,
          dragover: true,
          drop: true,
          dragend: true,
          DOMActivate: true,
          DOMFocusIn: true,
          DOMFocusOut: true,
          keypress: true
        },
        gb = {
          DOMAttrModified: true,
          DOMAttributeNameChanged: true,
          DOMCharacterDataModified: true,
          DOMElementNameChanged: true,
          DOMNodeInserted: true,
          DOMNodeInsertedIntoDocument: true,
          DOMNodeRemoved: true,
          DOMNodeRemovedFromDocument: true,
          DOMSubtreeModified: true
        };
      function hb(a) {
        return a instanceof Node ? a.__shady_getRootNode() : a;
      }
      function M(a, b) {
        var c = [],
          d = a;
        for (a = hb(a); d; )
          c.push(d),
            (d = d.__shady_assignedSlot
              ? d.__shady_assignedSlot
              : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a)
              ? d.host
              : d.__shady_parentNode);
        c[c.length - 1] === document && c.push(window);
        return c;
      }
      function ib(a) {
        a.__composedPath || (a.__composedPath = M(a.target, true));
        return a.__composedPath;
      }
      function jb(a, b) {
        if (!x) return a;
        a = M(a, true);
        for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)
          if (((d = b[c]), (f = hb(d)), f !== e && ((g = a.indexOf(f)), (e = f)), !x(f) || -1 < g)) return d;
      }
      var kb = {
          get composed() {
            void 0 === this.__composed &&
              (cb
                ? (this.__composed = 'focusin' === this.type || 'focusout' === this.type || cb(this))
                : false !== this.isTrusted && (this.__composed = fb[this.type]));
            return this.__composed || false;
          },
          composedPath: function() {
            this.__composedPath || (this.__composedPath = M(this.__target, this.composed));
            return this.__composedPath;
          },
          get target() {
            return jb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
          },
          get relatedTarget() {
            if (!this.__relatedTarget) return null;
            this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = M(this.__relatedTarget, true));
            return jb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
          },
          stopPropagation: function() {
            Event.prototype.stopPropagation.call(this);
            this.K = true;
          },
          stopImmediatePropagation: function() {
            Event.prototype.stopImmediatePropagation.call(this);
            this.K = this.__immediatePropagationStopped = true;
          }
        },
        lb = v.i && Object.getOwnPropertyDescriptor(Event.prototype, 'eventPhase');
      lb &&
        (Object.defineProperty(kb, 'eventPhase', {
          get: function() {
            return this.currentTarget === this.target ? Event.AT_TARGET : this.__shady_native_eventPhase;
          },
          enumerable: true,
          configurable: true
        }),
        Object.defineProperty(kb, '__shady_native_eventPhase', lb));
      function mb(a) {
        function b(c, d) {
          c = new a(c, d);
          c.__composed = d && !!d.composed;
          return c;
        }
        b.__proto__ = a;
        b.prototype = a.prototype;
        return b;
      }
      var nb = {
        focus: true,
        blur: true
      };
      function ob(a) {
        return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
      }
      function pb(a, b, c) {
        if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
          for (
            var d = 0, e;
            (e = c[d]) && (!ob(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped);
            d++
          );
      }
      var qb = new Event('e').hasOwnProperty('currentTarget');
      function rb(a) {
        a = qb ? Object.create(a) : a;
        var b = a.composedPath(),
          c = b.map(function(m) {
            return jb(m, b);
          }),
          d = a.bubbles,
          e = Object.getOwnPropertyDescriptor(a, 'currentTarget');
        Object.defineProperty(a, 'currentTarget', {
          configurable: true,
          enumerable: true,
          get: function() {
            return k;
          }
        });
        var f = Event.CAPTURING_PHASE,
          g = Object.getOwnPropertyDescriptor(a, 'eventPhase');
        Object.defineProperty(a, 'eventPhase', {
          configurable: true,
          enumerable: true,
          get: function() {
            return f;
          }
        });
        try {
          for (var h = b.length - 1; 0 <= h; h--) {
            var k = b[h];
            f = k === c[h] ? Event.AT_TARGET : Event.CAPTURING_PHASE;
            pb(a, k, 'capture');
            if (a.K) return;
          }
          for (h = 0; h < b.length; h++) {
            k = b[h];
            var l = k === c[h];
            if (l || d) {
              if (((f = l ? Event.AT_TARGET : Event.BUBBLING_PHASE), pb(a, k, 'bubble'), a.K)) break;
            }
          }
        } finally {
          qb ||
            (e ? Object.defineProperty(a, 'currentTarget', e) : delete a.currentTarget,
            g ? Object.defineProperty(a, 'eventPhase', g) : delete a.eventPhase);
        }
      }
      function sb(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
          var f = a[e],
            g = f.type,
            h = f.capture;
          if (b === f.node && c === g && d === h) return e;
        }
        return -1;
      }
      function tb(a) {
        F();
        return !v.C && this instanceof Node && !qa(document, this)
          ? (a.__target || ub(a, this), rb(a))
          : this.__shady_native_dispatchEvent(a);
      }
      function vb(a, b, c) {
        var d = this,
          e = eb(c),
          f = e.capture,
          g = e.once,
          h = e.U;
        e = e.T;
        if (b) {
          var k = typeof b;
          if ('function' === k || 'object' === k) {
            if ('object' !== k || (b.handleEvent && 'function' === typeof b.handleEvent)) {
              if (gb[a]) return this.__shady_native_addEventListener(a, b, e);
              var l = h || this;
              if ((h = b[L])) {
                if (-1 < sb(h, l, a, f)) return;
              } else b[L] = [];
              h = function(m) {
                g && d.__shady_removeEventListener(a, b, c);
                m.__target || ub(m);
                if (l !== d) {
                  var r = Object.getOwnPropertyDescriptor(m, 'currentTarget');
                  Object.defineProperty(m, 'currentTarget', {
                    get: function() {
                      return l;
                    },
                    configurable: true
                  });
                  var C = Object.getOwnPropertyDescriptor(m, 'eventPhase');
                  Object.defineProperty(m, 'eventPhase', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                      return f ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                    }
                  });
                }
                m.__previousCurrentTarget = m.currentTarget;
                if ((!x(l) && 'slot' !== l.localName) || -1 != m.composedPath().indexOf(l)) {
                  if (m.composed || -1 < m.composedPath().indexOf(l)) {
                    if (ob(m) && m.target === m.relatedTarget)
                      m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();
                    else if (
                      m.eventPhase === Event.CAPTURING_PHASE ||
                      m.bubbles ||
                      m.target === l ||
                      l instanceof Window
                    ) {
                      var S = 'function' === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);
                      l !== d &&
                        (r ? (Object.defineProperty(m, 'currentTarget', r), (r = null)) : delete m.currentTarget,
                        C ? (Object.defineProperty(m, 'eventPhase', C), (C = null)) : delete m.eventPhase);
                      return S;
                    }
                  }
                }
              };
              b[L].push({
                node: l,
                type: a,
                capture: f,
                fa: h
              });
              this.__handlers = this.__handlers || {};
              this.__handlers[a] = this.__handlers[a] || {
                capture: [],
                bubble: []
              };
              this.__handlers[a][f ? 'capture' : 'bubble'].push(h);
              nb[a] || this.__shady_native_addEventListener(a, h, e);
            }
          }
        }
      }
      function wb(a, b, c) {
        if (b) {
          var d = eb(c);
          c = d.capture;
          var e = d.U;
          d = d.T;
          if (gb[a]) return this.__shady_native_removeEventListener(a, b, d);
          var f = e || this;
          e = void 0;
          var g = null;
          try {
            g = b[L];
          } catch (h) {}
          g && ((f = sb(g, f, a, c)), -1 < f && ((e = g.splice(f, 1)[0].fa), g.length || (b[L] = void 0)));
          this.__shady_native_removeEventListener(a, e || b, d);
          e &&
            this.__handlers &&
            this.__handlers[a] &&
            ((a = this.__handlers[a][c ? 'capture' : 'bubble']), (b = a.indexOf(e)), -1 < b && a.splice(b, 1));
        }
      }
      function xb() {
        for (var a in nb)
          window.__shady_native_addEventListener(
            a,
            function(b) {
              b.__target || (ub(b), rb(b));
            },
            true
          );
      }
      var yb = B(kb);
      function ub(a, b) {
        b = void 0 === b ? a.target : b;
        a.__target = b;
        a.__relatedTarget = a.relatedTarget;
        if (v.i) {
          b = Object.getPrototypeOf(a);
          if (!b.hasOwnProperty('__shady_patchedProto')) {
            var c = Object.create(b);
            c.__shady_sourceProto = b;
            A(c, yb);
            b.__shady_patchedProto = c;
          }
          a.__proto__ = b.__shady_patchedProto;
        } else A(a, yb);
      }
      var zb = mb(Event),
        Ab = mb(CustomEvent),
        Bb = mb(MouseEvent);
      function Cb() {
        if (!cb && Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')) {
          var a = function() {
            var b = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              composed: true
            });
            this.__shady_dispatchEvent(b);
          };
          Element.prototype.click
            ? (Element.prototype.click = a)
            : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
        }
      }
      var Db = Object.getOwnPropertyNames(Element.prototype).filter(function(a) {
          return 'on' === a.substring(0, 2);
        }),
        Eb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a) {
          return 'on' === a.substring(0, 2);
        });
      function Fb(a) {
        return {
          set: function(b) {
            var c = t(this),
              d = a.substring(2);
            c.m || (c.m = {});
            c.m[a] && this.removeEventListener(d, c.m[a]);
            this.__shady_addEventListener(d, b);
            c.m[a] = b;
          },
          get: function() {
            var b = u(this);
            return b && b.m && b.m[a];
          },
          configurable: true
        };
      }
      function N(a, b) {
        return {
          index: a,
          D: [],
          G: b
        };
      }
      function Gb(a, b, c, d) {
        var e = 0,
          f = 0,
          g = 0,
          h = 0,
          k = Math.min(b - e, d - f);
        if (0 == e && 0 == f)
          a: {
            for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
            g = k;
          }
        if (b == a.length && d == c.length) {
          h = a.length;
          for (var l = c.length, m = 0; m < k - g && Hb(a[--h], c[--l]); ) m++;
          h = m;
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
          for (b = N(e, 0); f < d; ) b.D.push(c[f++]);
          return [b];
        }
        if (f == d) return [N(e, b - e)];
        k = e;
        g = f;
        d = d - g + 1;
        h = b - k + 1;
        b = Array(d);
        for (l = 0; l < d; l++) (b[l] = Array(h)), (b[l][0] = l);
        for (l = 0; l < h; l++) b[0][l] = l;
        for (l = 1; l < d; l++)
          for (m = 1; m < h; m++)
            if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];
            else {
              var r = b[l - 1][m] + 1,
                C = b[l][m - 1] + 1;
              b[l][m] = r < C ? r : C;
            }
        k = b.length - 1;
        g = b[0].length - 1;
        d = b[k][g];
        for (a = []; 0 < k || 0 < g; )
          0 == k
            ? (a.push(2), g--)
            : 0 == g
            ? (a.push(3), k--)
            : ((h = b[k - 1][g - 1]),
              (l = b[k - 1][g]),
              (m = b[k][g - 1]),
              (r = l < m ? (l < h ? l : h) : m < h ? m : h),
              r == h
                ? (h == d ? a.push(0) : (a.push(1), (d = h)), k--, g--)
                : r == l
                ? (a.push(3), k--, (d = l))
                : (a.push(2), g--, (d = m)));
        a.reverse();
        b = void 0;
        k = [];
        for (g = 0; g < a.length; g++)
          switch (a[g]) {
            case 0:
              b && (k.push(b), (b = void 0));
              e++;
              f++;
              break;
            case 1:
              b || (b = N(e, 0));
              b.G++;
              e++;
              b.D.push(c[f]);
              f++;
              break;
            case 2:
              b || (b = N(e, 0));
              b.G++;
              e++;
              break;
            case 3:
              b || (b = N(e, 0)), b.D.push(c[f]), f++;
          }
        b && k.push(b);
        return k;
      }
      function Hb(a, b) {
        return a === b;
      }
      var Ib = B({
        dispatchEvent: tb,
        addEventListener: vb,
        removeEventListener: wb
      });
      var Jb = null;
      function O() {
        Jb || (Jb = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        return Jb || null;
      }
      function Kb(a, b, c) {
        var d = O();
        return d && 'class' === b ? (d.setElementClass(a, c), true) : false;
      }
      function Lb(a, b) {
        var c = O();
        c && c.unscopeNode(a, b);
      }
      function Mb(a, b) {
        var c = O();
        if (!c) return true;
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          c = true;
          for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Mb(a, b);
          return c;
        }
        return a.nodeType !== Node.ELEMENT_NODE ? true : c.currentScopeForNode(a) === b;
      }
      function Nb(a) {
        if (a.nodeType !== Node.ELEMENT_NODE) return '';
        var b = O();
        return b ? b.currentScopeForNode(a) : '';
      }
      function Ob(a, b) {
        if (a)
          for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling)
            a.nodeType === Node.ELEMENT_NODE && Ob(a, b);
      }
      var Pb = window.document,
        Qb = v.C,
        Rb = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
        Sb = Rb && Rb.get;
      function Tb(a) {
        for (var b; (b = a.__shady_firstChild); ) a.__shady_removeChild(b);
      }
      function Ub(a) {
        var b = u(a);
        if (b && void 0 !== b.J) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Ub(b);
        if ((a = u(a))) a.J = void 0;
      }
      function Vb(a) {
        var b = a;
        if (a && 'slot' === a.localName) {
          var c = u(a);
          (c = c && c.u) && (b = c.length ? c[0] : Vb(a.__shady_nextSibling));
        }
        return b;
      }
      function Wb(a, b, c) {
        if ((a = (a = u(a)) && a.B)) {
          if (b)
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
              for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);
            else a.addedNodes.push(b);
          c && a.removedNodes.push(c);
          Da(a);
        }
      }
      var ac = B({
        get parentNode() {
          var a = u(this);
          a = a && a.parentNode;
          return void 0 !== a ? a : this.__shady_native_parentNode;
        },
        get firstChild() {
          var a = u(this);
          a = a && a.firstChild;
          return void 0 !== a ? a : this.__shady_native_firstChild;
        },
        get lastChild() {
          var a = u(this);
          a = a && a.lastChild;
          return void 0 !== a ? a : this.__shady_native_lastChild;
        },
        get nextSibling() {
          var a = u(this);
          a = a && a.nextSibling;
          return void 0 !== a ? a : this.__shady_native_nextSibling;
        },
        get previousSibling() {
          var a = u(this);
          a = a && a.previousSibling;
          return void 0 !== a ? a : this.__shady_native_previousSibling;
        },
        get childNodes() {
          if (w(this)) {
            var a = u(this);
            if (!a.childNodes) {
              a.childNodes = [];
              for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
            }
            var c = a.childNodes;
          } else c = this.__shady_native_childNodes;
          c.item = function(d) {
            return c[d];
          };
          return c;
        },
        get parentElement() {
          var a = u(this);
          (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
          return void 0 !== a ? a : this.__shady_native_parentElement;
        },
        get isConnected() {
          if (Sb && Sb.call(this)) return true;
          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return false;
          var a = this.ownerDocument;
          if (null === a || qa(a, this)) return true;
          for (a = this; a && !(a instanceof Document); ) a = a.__shady_parentNode || (x(a) ? a.host : void 0);
          return !!(a && a instanceof Document);
        },
        get textContent() {
          if (w(this)) {
            for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling)
              b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);
            return a.join('');
          }
          return this.__shady_native_textContent;
        },
        set textContent(a) {
          if ('undefined' === typeof a || null === a) a = '';
          switch (this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!w(this) && v.i) {
                var b = this.__shady_firstChild;
                (b != this.__shady_lastChild || (b && b.nodeType != Node.TEXT_NODE)) && Tb(this);
                this.__shady_native_textContent = a;
              } else
                Tb(this),
                  (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.__shady_insertBefore(document.createTextNode(a));
              break;
            default:
              this.nodeValue = a;
          }
        },
        insertBefore: function(a, b) {
          if (this.ownerDocument !== Pb && a.ownerDocument !== Pb) return this.__shady_native_insertBefore(a, b), a;
          if (a === this)
            throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
          if (b) {
            var c = u(b);
            c = c && c.parentNode;
            if ((void 0 !== c && c !== this) || (void 0 === c && b.__shady_native_parentNode !== this))
              throw Error(
                "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
              );
          }
          if (b === a) return a;
          Wb(this, a);
          var d = [],
            e = (c = P(this)) ? c.host.localName : Nb(this),
            f = a.__shady_parentNode;
          if (f) {
            var g = Nb(a);
            var h = !!c || !P(a) || (Qb && void 0 !== this.__noInsertionPoint);
            f.__shady_removeChild(a, h);
          }
          f = true;
          var k = (!Qb || (void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint)) && !Mb(a, e),
            l = c && !a.__noInsertionPoint && (!Qb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          if (l || k)
            k && (g = g || Nb(a)),
              Ob(a, function(m) {
                l && 'slot' === m.localName && d.push(m);
                if (k) {
                  var r = g;
                  O() && (r && Lb(m, r), (r = O()) && r.scopeNode(m, e));
                }
              });
          d.length && (Xb(c), c.j.push.apply(c.j, q(d)), Q(c));
          w(this) &&
            (Yb(a, this, b),
            (h = u(this)),
            h.root ? ((f = false), ja(this) && Q(h.root)) : c && 'slot' === this.localName && ((f = false), Q(c)));
          f
            ? ((c = x(this) ? this.host : this),
              b ? ((b = Vb(b)), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a))
            : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
          return a;
        },
        appendChild: function(a) {
          if (this != a || !x(a)) return this.__shady_insertBefore(a);
        },
        removeChild: function(a, b) {
          b = void 0 === b ? false : b;
          if (this.ownerDocument !== Pb) return this.__shady_native_removeChild(a);
          if (a.__shady_parentNode !== this) throw Error('The node to be removed is not a child of this node: ' + a);
          Wb(this, null, a);
          var c = P(a),
            d = c && Zb(c, a),
            e = u(this);
          if (w(this) && ($b(a, this), ja(this))) {
            Q(e.root);
            var f = true;
          }
          if (O() && !b && c && a.nodeType !== Node.TEXT_NODE) {
            var g = Nb(a);
            Ob(a, function(h) {
              Lb(h, g);
            });
          }
          Ub(a);
          c && ((b = 'slot' === this.localName) && (f = true), (d || b) && Q(c));
          f ||
            ((f = x(this) ? this.host : this),
            ((!e.root && 'slot' !== a.localName) || f === a.__shady_native_parentNode) &&
              f.__shady_native_removeChild(a));
          return a;
        },
        replaceChild: function(a, b) {
          this.__shady_insertBefore(a, b);
          this.__shady_removeChild(b);
          return a;
        },
        cloneNode: function(a) {
          if ('template' == this.localName) return this.__shady_native_cloneNode(a);
          var b = this.__shady_native_cloneNode(false);
          if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
            a = this.__shady_firstChild;
            for (var c; a; a = a.__shady_nextSibling) (c = a.__shady_cloneNode(true)), b.__shady_appendChild(c);
          }
          return b;
        },
        getRootNode: function(a) {
          if (this && this.nodeType) {
            var b = t(this),
              c = b.J;
            void 0 === c &&
              (x(this)
                ? ((c = this), (b.J = c))
                : ((c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this),
                  document.documentElement.__shady_native_contains(this) && (b.J = c)));
            return c;
          }
        },
        contains: function(a) {
          return ra(this, a);
        }
      });
      var R = B({
        get assignedSlot() {
          var a = this.__shady_parentNode;
          (a = a && a.__shady_shadowRoot) && bc(a);
          return ((a = u(this)) && a.assignedSlot) || null;
        }
      });
      var cc = /* @__PURE__ */ new Map();
      [
        [
          '(',
          {
            end: ')',
            I: true
          }
        ],
        [
          '[',
          {
            end: ']',
            I: true
          }
        ],
        [
          '"',
          {
            end: '"',
            I: false
          }
        ],
        [
          "'",
          {
            end: "'",
            I: false
          }
        ]
      ].forEach(function(a) {
        var b = p(a);
        a = b.next().value;
        b = b.next().value;
        cc.set(a, b);
      });
      function dc(a, b, c, d) {
        for (d = void 0 === d ? true : d; b < a.length; b++)
          if ('\\' === a[b] && b < a.length - 1 && '\n' !== a[b + 1]) b++;
          else {
            if (-1 !== c.indexOf(a[b])) return b;
            if (d && cc.has(a[b])) {
              var e = cc.get(a[b]);
              b = dc(a, b + 1, [e.end], e.I);
            }
          }
        return a.length;
      }
      function ec(a) {
        function b() {
          if (0 < d.length) {
            for (; ' ' === d[d.length - 1]; ) d.pop();
            c.push({
              S: d.filter(function(k, l) {
                return 0 === l % 2;
              }),
              ca: d.filter(function(k, l) {
                return 1 === l % 2;
              })
            });
            d.length = 0;
          }
        }
        for (var c = [], d = [], e = 0; e < a.length; ) {
          var f = d[d.length - 1],
            g = dc(a, e, [',', ' ', '>', '+', '~']),
            h = g === e ? a[e] : a.substring(e, g);
          if (',' === h) b();
          else if (-1 === [void 0, ' ', '>', '+', '~'].indexOf(f) || ' ' !== h)
            ' ' === f && -1 !== ['>', '+', '~'].indexOf(h) ? (d[d.length - 1] = h) : d.push(h);
          e = g + (g === e ? 1 : 0);
        }
        b();
        return c;
      }
      function fc(a, b, c) {
        var d = [];
        gc(a, b, c, d);
        return d;
      }
      function gc(a, b, c, d) {
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
          var e;
          if ((e = a.nodeType === Node.ELEMENT_NODE)) {
            e = a;
            var f = b,
              g = c,
              h = d,
              k = f(e);
            k && h.push(e);
            g && g(k) ? (e = k) : (gc(e, f, g, h), (e = void 0));
          }
          if (e) break;
        }
      }
      var hc = {
          get firstElementChild() {
            var a = u(this);
            if (a && void 0 !== a.firstChild) {
              for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_nextSibling;
              return a;
            }
            return this.__shady_native_firstElementChild;
          },
          get lastElementChild() {
            var a = u(this);
            if (a && void 0 !== a.lastChild) {
              for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_previousSibling;
              return a;
            }
            return this.__shady_native_lastElementChild;
          },
          get children() {
            return w(this)
              ? z(
                  Array.prototype.filter.call(ta(this), function(a) {
                    return a.nodeType === Node.ELEMENT_NODE;
                  })
                )
              : this.__shady_native_children;
          },
          get childElementCount() {
            var a = this.__shady_children;
            return a ? a.length : 0;
          }
        },
        T = B(
          ((hc.append = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            this.__shady_insertBefore(D.apply(null, q(b)), null);
          }),
          (hc.prepend = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            this.__shady_insertBefore(D.apply(null, q(b)), this.__shady_firstChild);
          }),
          (hc.replaceChildren = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            for (; null !== (c = this.__shady_firstChild); ) this.__shady_removeChild(c);
            this.__shady_insertBefore(D.apply(null, q(b)), null);
          }),
          hc)
        );
      function ic(a, b) {
        function c(e, f) {
          return (e === a || -1 === f.indexOf(':scope')) && la.call(e, f);
        }
        var d = ec(b);
        if (1 > d.length) return [];
        for (
          b = ya(
            fc(a, function() {
              return true;
            }).map(function(e) {
              return ya(
                d.map(function(f) {
                  var g = f.S,
                    h = g.length - 1;
                  return c(e, g[h])
                    ? {
                        target: e,
                        v: f,
                        A: e,
                        index: h
                      }
                    : [];
                })
              );
            })
          );
          b.some(function(e) {
            return 0 < e.index;
          });

        )
          b = ya(
            b.map(function(e) {
              if (0 >= e.index) return e;
              var f = e.target,
                g = e.A,
                h = e.v;
              e = e.index - 1;
              var k = h.ca[e],
                l = h.S[e];
              if (' ' === k) {
                k = [];
                for (g = g.__shady_parentElement; g; g = g.__shady_parentElement)
                  c(g, l) &&
                    k.push({
                      target: f,
                      v: h,
                      A: g,
                      index: e
                    });
                return k;
              }
              if ('>' === k)
                return (
                  (g = g.__shady_parentElement),
                  c(g, l)
                    ? {
                        target: f,
                        v: h,
                        A: g,
                        index: e
                      }
                    : []
                );
              if ('+' === k)
                return (g = g.__shady_previousElementSibling) && c(g, l)
                  ? {
                      target: f,
                      v: h,
                      A: g,
                      index: e
                    }
                  : [];
              if ('~' === k) {
                k = [];
                for (g = g.__shady_previousElementSibling; g; g = g.__shady_previousElementSibling)
                  c(g, l) &&
                    k.push({
                      target: f,
                      v: h,
                      A: g,
                      index: e
                    });
                return k;
              }
              throw Error("Unrecognized combinator: '" + k + "'.");
            })
          );
        return za(
          b.map(function(e) {
            return e.target;
          })
        );
      }
      var U = v.querySelectorImplementation,
        jc = B({
          querySelector: function(a) {
            if ('native' === U) {
              var b = Array.prototype.slice.call(
                  (this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a)
                ),
                c = this.__shady_getRootNode();
              b = p(b);
              for (var d = b.next(); !d.done; d = b.next()) if (((d = d.value), d.__shady_getRootNode() == c)) return d;
              return null;
            }
            if ('selectorEngine' === U) return ic(this, a)[0] || null;
            if (void 0 === U)
              return (
                fc(
                  this,
                  function(e) {
                    return la.call(e, a);
                  },
                  function(e) {
                    return !!e;
                  }
                )[0] || null
              );
            throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (U + "'"));
          },
          querySelectorAll: function(a, b) {
            if (b || 'native' === U) {
              b = Array.prototype.slice.call(
                (this instanceof ShadowRoot ? this.host : this).__shady_native_querySelectorAll(a)
              );
              var c = this.__shady_getRootNode();
              return z(
                b.filter(function(d) {
                  return d.__shady_getRootNode() == c;
                })
              );
            }
            if ('selectorEngine' === U) return z(ic(this, a));
            if (void 0 === U)
              return z(
                fc(this, function(d) {
                  return la.call(d, a);
                })
              );
            throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '" + (U + "'"));
          }
        }),
        kc = v.C && !v.l ? wa({}, T) : T;
      wa(T, jc);
      var lc = B({
        after: function(a) {
          for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
          c = this.__shady_parentNode;
          if (null !== c) {
            var d = this.__shady_nextSibling;
            c.__shady_insertBefore(D.apply(null, q(b)), d);
          }
        },
        before: function(a) {
          for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
          c = this.__shady_parentNode;
          null !== c && c.__shady_insertBefore(D.apply(null, q(b)), this);
        },
        remove: function() {
          var a = this.__shady_parentNode;
          null !== a && a.__shady_removeChild(this);
        },
        replaceWith: function(a) {
          for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
          c = this.__shady_parentNode;
          if (null !== c) {
            var d = this.__shady_nextSibling;
            c.__shady_removeChild(this);
            c.__shady_insertBefore(D.apply(null, q(b)), d);
          }
        }
      });
      var mc = window.document;
      function nc(a, b) {
        if ('slot' === b) (a = a.__shady_parentNode), ja(a) && Q(u(a).root);
        else if ('slot' === a.localName && 'name' === b && (b = P(a))) {
          if (b.g) {
            oc(b);
            var c = a.Y,
              d = pc(a);
            if (d !== c) {
              c = b.h[c];
              var e = c.indexOf(a);
              0 <= e && c.splice(e, 1);
              c = b.h[d] || (b.h[d] = []);
              c.push(a);
              1 < c.length && (b.h[d] = qc(c));
            }
          }
          Q(b);
        }
      }
      var rc = B({
        get previousElementSibling() {
          var a = u(this);
          if (a && void 0 !== a.previousSibling) {
            for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE; )
              a = a.__shady_previousSibling;
            return a;
          }
          return this.__shady_native_previousElementSibling;
        },
        get nextElementSibling() {
          var a = u(this);
          if (a && void 0 !== a.nextSibling) {
            for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.__shady_nextSibling;
            return a;
          }
          return this.__shady_native_nextElementSibling;
        },
        get slot() {
          return this.getAttribute('slot');
        },
        set slot(a) {
          this.__shady_setAttribute('slot', a);
        },
        get className() {
          return this.getAttribute('class') || '';
        },
        set className(a) {
          this.__shady_setAttribute('class', a);
        },
        setAttribute: function(a, b) {
          this.ownerDocument !== mc
            ? this.__shady_native_setAttribute(a, b)
            : Kb(this, a, b) || (this.__shady_native_setAttribute(a, b), nc(this, a));
        },
        removeAttribute: function(a) {
          this.ownerDocument !== mc
            ? this.__shady_native_removeAttribute(a)
            : Kb(this, a, '')
            ? '' === this.getAttribute(a) && this.__shady_native_removeAttribute(a)
            : (this.__shady_native_removeAttribute(a), nc(this, a));
        }
      });
      v.C ||
        Db.forEach(function(a) {
          rc[a] = Fb(a);
        });
      var wc = B({
        attachShadow: function(a) {
          if (!this) throw Error('Must provide a host.');
          if (!a) throw Error('Not enough arguments.');
          if (a.shadyUpgradeFragment && !v.V) {
            var b = a.shadyUpgradeFragment;
            b.__proto__ = ShadowRoot.prototype;
            sc(b, this, a);
            tc(b, b);
            a = b.__noInsertionPoint ? null : b.querySelectorAll('slot');
            b.__noInsertionPoint = void 0;
            if (a && a.length) {
              var c = b;
              Xb(c);
              c.j.push.apply(c.j, q(a));
              Q(b);
            }
            b.host.__shady_native_appendChild(b);
          } else b = new uc(vc, this, a);
          return (this.__CE_shadowRoot = b);
        },
        get shadowRoot() {
          var a = u(this);
          return (a && a.ea) || null;
        }
      });
      wa(rc, wc);
      var xc = document.implementation.createHTMLDocument('inert'),
        yc = B({
          get innerHTML() {
            return w(this)
              ? Na('template' === this.localName ? this.content : this, ta)
              : this.__shady_native_innerHTML;
          },
          set innerHTML(a) {
            if ('template' === this.localName) this.__shady_native_innerHTML = a;
            else {
              Tb(this);
              var b = this.localName || 'div';
              b =
                this.namespaceURI && this.namespaceURI !== xc.namespaceURI
                  ? xc.createElementNS(this.namespaceURI, b)
                  : xc.createElement(b);
              for (v.i ? (b.__shady_native_innerHTML = a) : (b.innerHTML = a); (a = b.__shady_firstChild); )
                this.__shady_insertBefore(a);
            }
          }
        });
      var zc = B({
        blur: function() {
          var a = u(this);
          (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
        }
      });
      v.C ||
        Eb.forEach(function(a) {
          zc[a] = Fb(a);
        });
      var Ac = B({
        assignedNodes: function(a) {
          if ('slot' === this.localName) {
            var b = this.__shady_getRootNode();
            b && x(b) && bc(b);
            return (b = u(this)) ? (a && a.flatten ? b.u : b.assignedNodes) || [] : [];
          }
        },
        addEventListener: function(a, b, c) {
          if ('slot' !== this.localName || 'slotchange' === a) vb.call(this, a, b, c);
          else {
            'object' !== typeof c &&
              (c = {
                capture: !!c
              });
            var d = this.__shady_parentNode;
            if (!d) throw Error('ShadyDOM cannot attach event to slot unless it has a `parentNode`');
            c.o = this;
            d.__shady_addEventListener(a, b, c);
          }
        },
        removeEventListener: function(a, b, c) {
          if ('slot' !== this.localName || 'slotchange' === a) wb.call(this, a, b, c);
          else {
            'object' !== typeof c &&
              (c = {
                capture: !!c
              });
            var d = this.__shady_parentNode;
            if (!d) throw Error('ShadyDOM cannot attach event to slot unless it has a `parentNode`');
            c.o = this;
            d.__shady_removeEventListener(a, b, c);
          }
        }
      });
      var Bc = B({
        getElementById: function(a) {
          return '' === a
            ? null
            : fc(
                this,
                function(b) {
                  return b.id == a;
                },
                function(b) {
                  return !!b;
                }
              )[0] || null;
        }
      });
      function Cc(a, b) {
        for (var c; b && !a.has((c = b.__shady_getRootNode())); ) b = c.host;
        return b;
      }
      function Dc(a) {
        var b = /* @__PURE__ */ new Set();
        for (b.add(a); x(a) && a.host; ) (a = a.host.__shady_getRootNode()), b.add(a);
        return b;
      }
      var Ec = '__shady_native_' + ia(),
        Fc = B({
          get activeElement() {
            var a = v.i ? document.__shady_native_activeElement : document.activeElement;
            if (!a || !a.nodeType) return null;
            var b = !!x(this);
            if (!(this === document || (b && this.host !== a && this.host.__shady_native_contains(a)))) return null;
            for (b = P(a); b && b !== this; ) (a = b.host), (b = P(a));
            return this === document ? (b ? null : a) : b === this ? a : null;
          },
          elementsFromPoint: function(a, b) {
            a = document[Ec](a, b);
            if (this === document && v.useNativeDocumentEFP) return a;
            a = [].slice.call(a);
            b = Dc(this);
            for (var c = /* @__PURE__ */ new Set(), d = 0; d < a.length; d++) c.add(Cc(b, a[d]));
            var e = [];
            c.forEach(function(f) {
              return e.push(f);
            });
            return e;
          },
          elementFromPoint: function(a, b) {
            return this === document && v.useNativeDocumentEFP
              ? this.__shady_native_elementFromPoint(a, b)
              : this.__shady_elementsFromPoint(a, b)[0] || null;
          }
        });
      var Gc = window.document,
        Hc = B({
          importNode: function(a, b) {
            if (a.ownerDocument !== Gc || 'template' === a.localName) return this.__shady_native_importNode(a, b);
            var c = this.__shady_native_importNode(a, false);
            if (b)
              for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling)
                (b = this.__shady_importNode(a, true)), c.__shady_appendChild(b);
            return c;
          }
        });
      var Ic = B({
        dispatchEvent: tb,
        addEventListener: vb.bind(window),
        removeEventListener: wb.bind(window)
      });
      var V = {};
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement') && (V.parentElement = ac.parentElement);
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'contains') && (V.contains = ac.contains);
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') && (V.children = T.children);
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') && (V.innerHTML = yc.innerHTML);
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'className') && (V.className = rc.className);
      var W = {
          EventTarget: [Ib],
          Node: [ac, window.EventTarget ? null : Ib],
          Text: [R],
          Comment: [R],
          CDATASection: [R],
          ProcessingInstruction: [R],
          Element: [
            rc,
            T,
            lc,
            R,
            !v.i || 'innerHTML' in Element.prototype ? yc : null,
            window.HTMLSlotElement ? null : Ac
          ],
          HTMLElement: [zc, V],
          HTMLSlotElement: [Ac],
          DocumentFragment: [kc, Bc],
          Document: [Hc, kc, Bc, Fc],
          Window: [Ic],
          CharacterData: [lc],
          XMLHttpRequest: [window.EventTarget ? null : Ib]
        },
        Jc = v.i ? null : ['innerHTML', 'textContent'];
      function X(a, b, c, d) {
        b.forEach(function(e) {
          return a && e && A(a, e, c, d);
        });
      }
      function Kc(a) {
        var b = a ? null : Jc,
          c;
        for (c in W) X(window[c] && window[c].prototype, W[c], a, b);
      }
      ['Text', 'Comment', 'CDATASection', 'ProcessingInstruction'].forEach(function(a) {
        var b = window[a],
          c = Object.create(b.prototype);
        c.__shady_protoIsPatched = true;
        X(c, W.EventTarget);
        X(c, W.Node);
        W[a] && X(c, W[a]);
        b.prototype.__shady_patchedProto = c;
      });
      function Lc(a) {
        a.__shady_protoIsPatched = true;
        X(a, W.EventTarget);
        X(a, W.Node);
        X(a, W.Element);
        X(a, W.HTMLElement);
        X(a, W.HTMLSlotElement);
        return a;
      }
      var Mc = v.O,
        Nc = v.i;
      function Oc(a, b) {
        if (Mc && !a.__shady_protoIsPatched && !x(a)) {
          var c = Object.getPrototypeOf(a),
            d = c.hasOwnProperty('__shady_patchedProto') && c.__shady_patchedProto;
          d || ((d = Object.create(c)), Lc(d), (c.__shady_patchedProto = d));
          Object.setPrototypeOf(a, d);
        }
        Nc || (1 === b ? ab(a) : 2 === b && bb(a));
      }
      function Pc(a, b, c, d) {
        Oc(a, 1);
        d = d || null;
        var e = t(a),
          f = d ? t(d) : null;
        e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
        if ((f = u(e.previousSibling))) f.nextSibling = a;
        if ((f = u((e.nextSibling = d)))) f.previousSibling = a;
        e.parentNode = b;
        d ? d === c.firstChild && (c.firstChild = a) : ((c.lastChild = a), c.firstChild || (c.firstChild = a));
        c.childNodes = null;
      }
      function Yb(a, b, c) {
        Oc(b, 2);
        var d = t(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
          for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Pc(a, b, d, c);
        else Pc(a, b, d, c);
      }
      function $b(a, b) {
        var c = t(a);
        b = t(b);
        a === b.firstChild && (b.firstChild = c.nextSibling);
        a === b.lastChild && (b.lastChild = c.previousSibling);
        a = c.previousSibling;
        var d = c.nextSibling;
        a && (t(a).nextSibling = d);
        d && (t(d).previousSibling = a);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null);
      }
      function tc(a, b) {
        var c = t(a);
        if (b || void 0 === c.firstChild) {
          c.childNodes = null;
          var d = (c.firstChild = a.__shady_native_firstChild);
          c.lastChild = a.__shady_native_lastChild;
          Oc(a, 2);
          c = d;
          for (d = void 0; c; c = c.__shady_native_nextSibling) {
            var e = t(c);
            e.parentNode = b || a;
            e.nextSibling = c.__shady_native_nextSibling;
            e.previousSibling = d || null;
            d = c;
            Oc(c, 1);
          }
        }
      }
      var Qc = B({
        addEventListener: function(a, b, c) {
          'object' !== typeof c &&
            (c = {
              capture: !!c
            });
          c.o = c.o || this;
          this.host.__shady_addEventListener(a, b, c);
        },
        removeEventListener: function(a, b, c) {
          'object' !== typeof c &&
            (c = {
              capture: !!c
            });
          c.o = c.o || this;
          this.host.__shady_removeEventListener(a, b, c);
        }
      });
      function Rc(a, b) {
        A(a, Qc, b);
        A(a, Fc, b);
        A(a, yc, b);
        A(a, T, b);
        v.l && !b ? (A(a, ac, b), A(a, Bc, b)) : v.i || (A(a, Ya), A(a, Wa), A(a, Xa));
      }
      var vc = {},
        Y = v.deferConnectionCallbacks && 'loading' === document.readyState,
        Sc;
      function Tc(a) {
        var b = [];
        do b.unshift(a);
        while ((a = a.__shady_parentNode));
        return b;
      }
      function uc(a, b, c) {
        if (a !== vc) throw new TypeError('Illegal constructor');
        this.g = null;
        sc(this, b, c);
      }
      function sc(a, b, c) {
        a.host = b;
        a.mode = c && c.mode;
        tc(a.host);
        b = t(a.host);
        b.root = a;
        b.ea = 'closed' !== a.mode ? a : null;
        b = t(a);
        b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
        if (v.preferPerformance) for (; (b = a.host.__shady_native_firstChild); ) a.host.__shady_native_removeChild(b);
        else Q(a);
      }
      function Q(a) {
        a.s ||
          ((a.s = true),
          Ba(function() {
            return bc(a);
          }));
      }
      function bc(a) {
        var b;
        if ((b = a.s)) {
          for (var c; a; )
            a: {
              a.s && (c = a), (b = a);
              a = b.host.__shady_getRootNode();
              if (x(a) && (b = u(b.host)) && 0 < b.F) break a;
              a = void 0;
            }
          b = c;
        }
        (c = b) && c._renderSelf();
      }
      uc.prototype._renderSelf = function() {
        var a = Y;
        Y = true;
        this.s = false;
        if (this.g) {
          oc(this);
          for (var b = 0, c; b < this.g.length; b++) {
            c = this.g[b];
            var d = u(c),
              e = d.assignedNodes;
            d.assignedNodes = [];
            d.u = [];
            if ((d.R = e))
              for (d = 0; d < e.length; d++) {
                var f = u(e[d]);
                f.L = f.assignedSlot;
                f.assignedSlot === c && (f.assignedSlot = null);
              }
          }
          for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Uc(this, b);
          for (b = 0; b < this.g.length; b++) {
            c = this.g[b];
            e = u(c);
            if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Uc(this, d, c);
            (d = (d = u(c.__shady_parentNode)) && d.root) && (ka(d) || d.s) && d._renderSelf();
            Vc(this, e.u, e.assignedNodes);
            if ((d = e.R)) {
              for (f = 0; f < d.length; f++) u(d[f]).L = null;
              e.R = null;
              d.length > e.assignedNodes.length && (e.M = true);
            }
            e.M && ((e.M = false), Wc(this, c));
          }
          c = this.g;
          b = [];
          for (e = 0; e < c.length; e++)
            (d = c[e].__shady_parentNode), ((f = u(d)) && f.root) || !(0 > b.indexOf(d)) || b.push(d);
          for (c = 0; c < b.length; c++) {
            f = b[c];
            e = f === this ? this.host : f;
            d = [];
            for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling)
              if ('slot' == f.localName) for (var g = u(f).u, h = 0; h < g.length; h++) d.push(g[h]);
              else d.push(f);
            f = sa(e);
            g = Gb(d, d.length, f, f.length);
            for (var k = (h = 0), l = void 0; h < g.length && (l = g[h]); h++) {
              for (var m = 0, r = void 0; m < l.D.length && (r = l.D[m]); m++)
                r.__shady_native_parentNode === e && e.__shady_native_removeChild(r), f.splice(l.index + k, 1);
              k -= l.G;
            }
            k = 0;
            for (l = void 0; k < g.length && (l = g[k]); k++)
              for (h = f[l.index], m = l.index; m < l.index + l.G; m++)
                (r = d[m]), e.__shady_native_insertBefore(r, h), f.splice(m, 0, r);
          }
        }
        if (!v.preferPerformance && !this.P)
          for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)
            (c = u(b)),
              b.__shady_native_parentNode !== this.host ||
                ('slot' !== b.localName && c.assignedSlot) ||
                this.host.__shady_native_removeChild(b);
        this.P = true;
        Y = a;
        Sc && Sc();
      };
      function Uc(a, b, c) {
        var d = t(b),
          e = d.L;
        d.L = null;
        c || (c = (a = a.h[b.__shady_slot || '__catchall']) && a[0]);
        c ? (t(c).assignedNodes.push(b), (d.assignedSlot = c)) : (d.assignedSlot = void 0);
        e !== d.assignedSlot && d.assignedSlot && (t(d.assignedSlot).M = true);
      }
      function Vc(a, b, c) {
        for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++)
          if ('slot' == e.localName) {
            var f = u(e).assignedNodes;
            f && f.length && Vc(a, b, f);
          } else b.push(c[d]);
      }
      function Wc(a, b) {
        b.__shady_native_dispatchEvent(new Event('slotchange'));
        b = u(b);
        b.assignedSlot && Wc(a, b.assignedSlot);
      }
      function Xb(a) {
        a.j = a.j || [];
        a.g = a.g || [];
        a.h = a.h || {};
      }
      function oc(a) {
        if (a.j && a.j.length) {
          for (var b = a.j, c, d = 0; d < b.length; d++) {
            var e = b[d];
            tc(e);
            var f = e.__shady_parentNode;
            tc(f);
            f = u(f);
            f.F = (f.F || 0) + 1;
            f = pc(e);
            a.h[f] ? ((c = c || {}), (c[f] = true), a.h[f].push(e)) : (a.h[f] = [e]);
            a.g.push(e);
          }
          if (c) for (var g in c) a.h[g] = qc(a.h[g]);
          a.j = [];
        }
      }
      function pc(a) {
        var b = a.name || a.getAttribute('name') || '__catchall';
        return (a.Y = b);
      }
      function qc(a) {
        return a.sort(function(b, c) {
          b = Tc(b);
          for (var d = Tc(c), e = 0; e < b.length; e++) {
            c = b[e];
            var f = d[e];
            if (c !== f) return (b = ta(c.__shady_parentNode)), b.indexOf(c) - b.indexOf(f);
          }
        });
      }
      function Zb(a, b) {
        if (a.g) {
          oc(a);
          var c = a.h,
            d;
          for (d in c)
            for (var e = c[d], f = 0; f < e.length; f++) {
              var g = e[f];
              if (ra(b, g)) {
                e.splice(f, 1);
                var h = a.g.indexOf(g);
                0 <= h && (a.g.splice(h, 1), (h = u(g.__shady_parentNode)) && h.F && h.F--);
                f--;
                g = u(g);
                if ((h = g.u))
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k],
                      m = l.__shady_native_parentNode;
                    m && m.__shady_native_removeChild(l);
                  }
                g.u = [];
                g.assignedNodes = [];
                h = true;
              }
            }
          return h;
        }
      }
      function ka(a) {
        oc(a);
        return !(!a.g || !a.g.length);
      }
      (function(a) {
        a.__proto__ = DocumentFragment.prototype;
        Rc(a, '__shady_');
        Rc(a);
        Object.defineProperties(a, {
          nodeType: {
            value: Node.DOCUMENT_FRAGMENT_NODE,
            configurable: true
          },
          nodeName: {
            value: '#document-fragment',
            configurable: true
          },
          nodeValue: {
            value: null,
            configurable: true
          }
        });
        ['localName', 'namespaceURI', 'prefix'].forEach(function(b) {
          Object.defineProperty(a, b, {
            value: void 0,
            configurable: true
          });
        });
        ['ownerDocument', 'baseURI', 'isConnected'].forEach(function(b) {
          Object.defineProperty(a, b, {
            get: function() {
              return this.host[b];
            },
            configurable: true
          });
        });
      })(uc.prototype);
      if (window.customElements && window.customElements.define && v.N && !v.preferPerformance) {
        var Xc = /* @__PURE__ */ new Map();
        Sc = function() {
          var a = [];
          Xc.forEach(function(d, e) {
            a.push([e, d]);
          });
          Xc.clear();
          for (var b = 0; b < a.length; b++) {
            var c = a[b][0];
            a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
          }
        };
        Y &&
          document.addEventListener(
            'readystatechange',
            function() {
              Y = false;
              Sc();
            },
            {
              once: true
            }
          );
        var Yc = function(a, b, c) {
            var d = 0,
              e = '__isConnected' + d++;
            if (b || c)
              (a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function() {
                Y ? Xc.set(this, true) : this[e] || ((this[e] = true), b && b.call(this));
              }),
                (a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function() {
                  Y ? this.isConnected || Xc.set(this, false) : this[e] && ((this[e] = false), c && c.call(this));
                });
            return a;
          },
          Zc = window.customElements.define,
          $c = function(a, b) {
            var c = b.prototype.connectedCallback,
              d = b.prototype.disconnectedCallback;
            Zc.call(window.customElements, a, Yc(b, c, d));
            b.prototype.connectedCallback = c;
            b.prototype.disconnectedCallback = d;
          };
        window.customElements.define = $c;
        Object.defineProperty(window.CustomElementRegistry.prototype, 'define', {
          value: $c,
          configurable: true
        });
      }
      function P(a) {
        a = a.__shady_getRootNode();
        if (x(a)) return a;
      }
      function Z(a) {
        this.node = a;
      }
      n = Z.prototype;
      n.addEventListener = function(a, b, c) {
        return this.node.__shady_addEventListener(a, b, c);
      };
      n.removeEventListener = function(a, b, c) {
        return this.node.__shady_removeEventListener(a, b, c);
      };
      n.appendChild = function(a) {
        return this.node.__shady_appendChild(a);
      };
      n.insertBefore = function(a, b) {
        return this.node.__shady_insertBefore(a, b);
      };
      n.removeChild = function(a) {
        return this.node.__shady_removeChild(a);
      };
      n.replaceChild = function(a, b) {
        return this.node.__shady_replaceChild(a, b);
      };
      n.cloneNode = function(a) {
        return this.node.__shady_cloneNode(a);
      };
      n.getRootNode = function(a) {
        return this.node.__shady_getRootNode(a);
      };
      n.contains = function(a) {
        return this.node.__shady_contains(a);
      };
      n.dispatchEvent = function(a) {
        return this.node.__shady_dispatchEvent(a);
      };
      n.setAttribute = function(a, b) {
        this.node.__shady_setAttribute(a, b);
      };
      n.getAttribute = function(a) {
        return this.node.__shady_native_getAttribute(a);
      };
      n.removeAttribute = function(a) {
        this.node.__shady_removeAttribute(a);
      };
      n.attachShadow = function(a) {
        return this.node.__shady_attachShadow(a);
      };
      n.focus = function() {
        this.node.__shady_native_focus();
      };
      n.blur = function() {
        this.node.__shady_blur();
      };
      n.importNode = function(a, b) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
      };
      n.getElementById = function(a) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
      };
      n.elementsFromPoint = function(a, b) {
        return this.node.__shady_elementsFromPoint(a, b);
      };
      n.elementFromPoint = function(a, b) {
        return this.node.__shady_elementFromPoint(a, b);
      };
      n.querySelector = function(a) {
        return this.node.__shady_querySelector(a);
      };
      n.querySelectorAll = function(a, b) {
        return this.node.__shady_querySelectorAll(a, b);
      };
      n.assignedNodes = function(a) {
        if ('slot' === this.node.localName) return this.node.__shady_assignedNodes(a);
      };
      n.append = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_append.apply(this.node, q(b));
      };
      n.prepend = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_prepend.apply(this.node, q(b));
      };
      n.after = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_after.apply(this.node, q(b));
      };
      n.before = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_before.apply(this.node, q(b));
      };
      n.remove = function() {
        return this.node.__shady_remove();
      };
      n.replaceWith = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return this.node.__shady_replaceWith.apply(this.node, q(b));
      };
      ca.Object.defineProperties(Z.prototype, {
        activeElement: {
          configurable: true,
          enumerable: true,
          get: function() {
            if (x(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
          }
        },
        _activeElement: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.activeElement;
          }
        },
        host: {
          configurable: true,
          enumerable: true,
          get: function() {
            if (x(this.node)) return this.node.host;
          }
        },
        parentNode: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_parentNode;
          }
        },
        firstChild: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_firstChild;
          }
        },
        lastChild: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_lastChild;
          }
        },
        nextSibling: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_nextSibling;
          }
        },
        previousSibling: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_previousSibling;
          }
        },
        childNodes: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_childNodes;
          }
        },
        parentElement: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_parentElement;
          }
        },
        firstElementChild: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_firstElementChild;
          }
        },
        lastElementChild: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_lastElementChild;
          }
        },
        nextElementSibling: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_nextElementSibling;
          }
        },
        previousElementSibling: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_previousElementSibling;
          }
        },
        children: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_children;
          }
        },
        childElementCount: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_childElementCount;
          }
        },
        shadowRoot: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_shadowRoot;
          }
        },
        assignedSlot: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_assignedSlot;
          }
        },
        isConnected: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_isConnected;
          }
        },
        innerHTML: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_innerHTML;
          },
          set: function(a) {
            this.node.__shady_innerHTML = a;
          }
        },
        textContent: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_textContent;
          },
          set: function(a) {
            this.node.__shady_textContent = a;
          }
        },
        slot: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_slot;
          },
          set: function(a) {
            this.node.__shady_slot = a;
          }
        },
        className: {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.node.__shady_className;
          },
          set: function(a) {
            this.node.__shady_className = a;
          }
        }
      });
      function ad(a) {
        Object.defineProperty(Z.prototype, a, {
          get: function() {
            return this.node['__shady_' + a];
          },
          set: function(b) {
            this.node['__shady_' + a] = b;
          },
          configurable: true
        });
      }
      Db.forEach(function(a) {
        return ad(a);
      });
      Eb.forEach(function(a) {
        return ad(a);
      });
      var bd = /* @__PURE__ */ new WeakMap();
      function cd(a) {
        if (x(a) || a instanceof Z) return a;
        var b = bd.get(a);
        b || ((b = new Z(a)), bd.set(a, b));
        return b;
      }
      if (v.N) {
        var dd = v.i
          ? function(a) {
              return a;
            }
          : function(a) {
              bb(a);
              ab(a);
              return a;
            };
        window.ShadyDOM = {
          inUse: v.N,
          patch: dd,
          isShadyRoot: x,
          enqueue: Ba,
          flush: F,
          flushInitial: function(a) {
            !a.P && a.s && bc(a);
          },
          settings: v,
          filterMutations: Ga,
          observeChildren: Ea,
          unobserveChildren: Fa,
          deferConnectionCallbacks: v.deferConnectionCallbacks,
          preferPerformance: v.preferPerformance,
          handlesDynamicScoping: true,
          wrap: v.l ? cd : dd,
          wrapIfNeeded:
            true === v.l
              ? cd
              : function(a) {
                  return a;
                },
          Wrapper: Z,
          composedPath: ib,
          noPatch: v.l,
          patchOnDemand: v.O,
          nativeMethods: Oa,
          nativeTree: Pa,
          patchElementProto: Lc,
          querySelectorImplementation: v.querySelectorImplementation
        };
        Va();
        Kc('__shady_');
        Object.defineProperty(document, '_activeElement', Fc.activeElement);
        A(Window.prototype, Ic, '__shady_');
        v.l ? v.O && A(Element.prototype, wc) : (Kc(), Cb());
        xb();
        window.Event = zb;
        window.CustomEvent = Ab;
        window.MouseEvent = Bb;
        window.ShadowRoot = uc;
      }
    }.call(exports));
  }
});

// esm-build-8d60da9f5b3c8ad747986022d9a241e7d5b18b24-4cbb7f35/mod.js
var __module = __toESM(require_shadydom_min());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
