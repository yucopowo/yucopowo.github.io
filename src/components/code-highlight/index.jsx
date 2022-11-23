// import React from 'react';
// import handleLazyViewport from '/src/components/react-in-lazy-viewport/index.jsx';
//
// const fallback = (props) => {
//     const { node } = props;
//     return (
//         <pre>
//             <code>
//                 {node.value}
//             </code>
//         </pre>
//     );
// };
//
//
// export default handleLazyViewport(
//     React.lazy(() => import('/src/components/code-highlight/component.jsx')),
//     fallback
// );

import CodeHighlight from './component.jsx';
export default CodeHighlight;
