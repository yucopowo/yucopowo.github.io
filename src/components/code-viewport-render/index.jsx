import React, {memo, useRef} from 'react';
import { useInViewport } from 'react-in-viewport';
import CodeHighlight from "../code-highlight/index.jsx";
import CodeDemo from "../code-demo/index.jsx";

const CodeViewportRender = memo((props) => {

    const { forwardedRef, hasInViewport, node } = props;


    const attrs = node.attributes || {};

    console.log(attrs.file);


    if(!hasInViewport) {
        return (
            <pre ref={forwardedRef}>
                <code>
                    {node.value}
                </code>
            </pre>
        );
    }


    // console.log(attrs);
    const demo = attrs['demo'] || 'demo' in attrs;

    if(demo) {
        return (
            <CodeDemo node={node} />
        );
    }


    return (
        <CodeHighlight node={node} />
    );
});



const LazyViewportRender = (props) => {
    const forwardedRef = useRef();
    const { inViewport, enterCount } = useInViewport(forwardedRef, {
        rootMargin: '100px'
    }, { disconnectOnLeave: true });
    const hasInViewport = inViewport || enterCount >= 1;
    return (
        <CodeViewportRender forwardedRef={forwardedRef} hasInViewport={hasInViewport} node={props.node} />
    );
};

export default LazyViewportRender;












// const ViewportComponent = memo((props) => {
//     const { render } = props;
//     const myRef = useRef();
//     const { inViewport } = useInViewport(myRef);
//     return (
//         <div ref={myRef}>
//             {render(inViewport)}
//         </div>
//     )
// });
// const CodeViewportRender = memo((props) => {
//     // const myRef = useRef();
//     // const {
//     //     inViewport,
//     // } = useInViewport(myRef);
//     //
//     // console.log(inViewport);
//     // const { inViewport, enterCount } = this.props;
//     // const { node, inViewport, forwardedRef, enterCount } = props;
//     // console.log(props);
//     //
//     // const firstInViewport = inViewport && enterCount === 1;
//     // inViewportOnce,
//     // enterCount
//     const { node, forwardedRef, hasInViewport } = props;
//
//     // const { inViewportOnce, forwardedRef } = useInViewportOnce();
//
//     //
//     // console.log(node);
//
//     // const inViewportOnce = enterCount > 0;
//     // console.log('inViewportOnce', inViewportOnce);
//     // console.log('node', node.value);
//     if (!hasInViewport) {
//         return (
//             <pre ref={forwardedRef}>
//                 <code>
//                     {node.value}
//                 </code>
//             </pre>
//         );
//     }
//
//     // return <div ref={ref}>not inViewport</div>;
//
//     // if(!inViewport) {
//     //     return (
//     //         <pre>
//     //             <code>
//     //                 {node.value}
//     //             </code>
//     //         </pre>
//     //     );
//     // }
//     // return (
//     //     <ViewportComponent render={(inViewport) => {
//     //         return inViewport?<div>inViewport</div>:<div>not inViewport</div>;
//     //     }}/>
//     // )
//     // if(!inViewport) {
//     //     return (
//     //         <pre ref={myRef}>
//     //         <code>
//     //             {node.value}
//     //         </code>
//     //     </pre>
//     //     );
//     // }
//     //
//     return (
//         <Highlight {...defaultProps} ref={forwardedRef} theme={theme} code={node.value} language={node.lang}>
//             {({ className, style, tokens, getLineProps, getTokenProps }) => (
//                 <pre className={className} style={style}>
//                         {tokens.map((line, i) => (
//                             <div {...getLineProps({ line, key: i })}>
//                                 {line.map((token, key) => (
//                                     <span {...getTokenProps({ token, key })} />
//                                 ))}
//                             </div>
//                         ))}
//                     </pre>
//             )}
//         </Highlight>
//     );
//
// });








// const LazyCodeViewportRender = () => {
//
// };

// const handleLazyViewport = (TargetComponent) => {
//     return memo(TargetComponent);
// };

// const LazyViewportRender = handleViewport(CodeViewportRender, {}, { disconnectOnLeave: true });

// const handleViewport = () => {
//
// };


// export default (props) => {
//
//     // const hasInViewport = false;
//     return <LazyViewportRender {...props} />;
// };

// export default LazyViewportRender;

// export default memo(CodeViewportRender);

// const handleViewportOnce = (component) => memo(React.forwardRef(component));
//
// const CodeViewport = handleViewportOnce(CodeComponent);
// // const handleViewportOnce = (props) => memo(React.forwardRef(CodeComponent));
// // memo(React.forwardRef(
// // const CodeViewportComponent = handleViewport(CodeComponent);
//
// const CodeViewportComponent = (props) => {
//     const myRef = useRef();
//     const { inViewport, enterCount } = useInViewport(myRef);
//     // console.log(inViewport);
//     // inViewport &&
//     const inViewportOnce = enterCount >= 1;
//     return (
//         <CodeViewport {...props} ref={myRef} inViewportOnce={inViewportOnce} />
//     );
// };
//
// export default CodeViewportComponent;
