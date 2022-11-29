/* esm.sh - esbuild bundle(@mdx-js/react@2.1.5) es2022 development */
// esm-build-aeafa23ef3213951853367f23e7c876be97aba95-e2792bd7/node_modules/@mdx-js/react/lib/index.js
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var MDXContext = React.createContext({});
function withMDXComponents(Component) {
  return boundMDXComponent;
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components);
    return React.createElement(Component, {
      ...props,
      allComponents
    });
  }
}
function useMDXComponents(components) {
  const contextComponents = React.useContext(MDXContext);
  return React.useMemo(() => {
    if (typeof components === 'function') {
      return components(contextComponents);
    }
    return {
      ...contextComponents,
      ...components
    };
  }, [contextComponents, components]);
}
var emptyObject = {};
function MDXProvider({ components, children, disableParentContext }) {
  let allComponents = useMDXComponents(components);
  if (disableParentContext) {
    allComponents = components || emptyObject;
  }
  return React.createElement(
    MDXContext.Provider,
    {
      value: allComponents
    },
    children
  );
}
export { MDXContext, MDXProvider, useMDXComponents, withMDXComponents };
