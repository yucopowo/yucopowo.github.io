/* esm.sh - esbuild bundle(periscopic@3.0.4) es2022 development */
// esm-build-7d82663e2602a13051e9edf838d0b8f2b4aea2fd-68725f67/node_modules/periscopic/src/index.js
import { walk } from '/cdn/v99/estree-walker@3.0.1/es2022/estree-walker.development.js';
import is_reference from '/cdn/v99/is-reference@3.0.0/es2022/is-reference.development.js';
function analyze(expression) {
  const map = /* @__PURE__ */ new WeakMap();
  const globals = /* @__PURE__ */ new Map();
  const scope = new Scope(null, false);
  const references = [];
  let current_scope = scope;
  walk(expression, {
    enter(node, parent) {
      switch (node.type) {
        case 'Identifier':
          if (is_reference(node, parent)) {
            references.push([current_scope, node]);
          }
          break;
        case 'ImportDeclaration':
          node.specifiers.forEach(specifier => {
            current_scope.declarations.set(specifier.local.name, specifier);
          });
          break;
        case 'FunctionExpression':
        case 'FunctionDeclaration':
        case 'ArrowFunctionExpression':
          if (node.type === 'FunctionDeclaration') {
            if (node.id) {
              current_scope.declarations.set(node.id.name, node);
            }
            map.set(node, (current_scope = new Scope(current_scope, false)));
          } else {
            map.set(node, (current_scope = new Scope(current_scope, false)));
            if (node.type === 'FunctionExpression' && node.id) {
              current_scope.declarations.set(node.id.name, node);
            }
          }
          node.params.forEach(param => {
            extract_names(param).forEach(name => {
              current_scope.declarations.set(name, node);
            });
          });
          break;
        case 'ForStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
          map.set(node, (current_scope = new Scope(current_scope, true)));
          break;
        case 'BlockStatement':
          map.set(node, (current_scope = new Scope(current_scope, true)));
          break;
        case 'ClassDeclaration':
        case 'VariableDeclaration':
          current_scope.add_declaration(node);
          break;
        case 'CatchClause':
          map.set(node, (current_scope = new Scope(current_scope, true)));
          if (node.param) {
            extract_names(node.param).forEach(name => {
              current_scope.declarations.set(name, node.param);
            });
          }
          break;
      }
    },
    leave(node) {
      if (map.has(node)) {
        current_scope = current_scope.parent;
      }
    }
  });
  for (let i = references.length - 1; i >= 0; --i) {
    const [scope2, reference] = references[i];
    if (!scope2.references.has(reference.name)) {
      add_reference(scope2, reference.name);
    }
    if (!scope2.find_owner(reference.name)) {
      globals.set(reference.name, reference);
    }
  }
  return {
    map,
    scope,
    globals
  };
}
function add_reference(scope, name) {
  scope.references.add(name);
  if (scope.parent) add_reference(scope.parent, name);
}
var Scope = class {
  constructor(parent, block) {
    this.parent = parent;
    this.block = block;
    this.declarations = /* @__PURE__ */ new Map();
    this.initialised_declarations = /* @__PURE__ */ new Set();
    this.references = /* @__PURE__ */ new Set();
  }
  add_declaration(node) {
    if (node.type === 'VariableDeclaration') {
      if (node.kind === 'var' && this.block && this.parent) {
        this.parent.add_declaration(node);
      } else {
        const handle_declarator = declarator => {
          extract_names(declarator.id).forEach(name => {
            this.declarations.set(name, node);
            if (declarator.init) this.initialised_declarations.add(name);
          });
        };
        node.declarations.forEach(handle_declarator);
      }
    } else if (node.id) {
      this.declarations.set(node.id.name, node);
    }
  }
  find_owner(name) {
    if (this.declarations.has(name)) return this;
    return this.parent && this.parent.find_owner(name);
  }
  has(name) {
    return this.declarations.has(name) || (!!this.parent && this.parent.has(name));
  }
};
function extract_names(param) {
  return extract_identifiers(param).map(node => node.name);
}
function extract_identifiers(param, nodes = []) {
  switch (param.type) {
    case 'Identifier':
      nodes.push(param);
      break;
    case 'MemberExpression':
      let object = param;
      while (object.type === 'MemberExpression') {
        object = object.object;
      }
      nodes.push(object);
      break;
    case 'ObjectPattern':
      const handle_prop = prop => {
        if (prop.type === 'RestElement') {
          extract_identifiers(prop.argument, nodes);
        } else {
          extract_identifiers(prop.value, nodes);
        }
      };
      param.properties.forEach(handle_prop);
      break;
    case 'ArrayPattern':
      const handle_element = element => {
        if (element) extract_identifiers(element, nodes);
      };
      param.elements.forEach(handle_element);
      break;
    case 'RestElement':
      extract_identifiers(param.argument, nodes);
      break;
    case 'AssignmentPattern':
      extract_identifiers(param.left, nodes);
      break;
  }
  return nodes;
}
export { Scope, analyze, extract_identifiers, extract_names };
