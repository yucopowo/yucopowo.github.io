import React, {useState, useEffect, memo, useRef} from 'react';
import CodeViewportRender from '../code-viewport-render/index.jsx';
import './index.less';
// import handleViewport, { useInViewport } from 'react-in-viewport';

// const handleViewportOnce = (component) => memo(React.forwardRef(component));

// const ViewportOnce = handleViewportOnce(CodeComponent);
// // const handleViewportOnce = (props) => memo(React.forwardRef(CodeComponent));
// // memo(React.forwardRef(
// // const CodeViewportComponent = handleViewport(CodeComponent);
//
// const ViewportComponent = (props) => {
//     const myRef = useRef();
//     const { inViewport, enterCount } = useInViewport(myRef);
//     // console.log(inViewport);
//     // inViewport &&
//     const inViewportOnce = enterCount >= 1;
//     return (
//         <ViewportOnce {...props} ref={myRef} inViewportOnce={inViewportOnce} />
//     );
// };

// export default CodeViewportComponent;

function renderRoot(root) {

    function renderNode(node, key) {
        switch (node.type) {
            case 'heading': {
                return React.createElement('h' + node.depth, {
                    key,
                }, renderNodes(node.children));
            }
            case 'paragraph': {
                return (
                    <p key={key}>
                        {renderNodes(node.children)}
                    </p>
                );
            }
            case 'inlineCode': {
                return (
                    <code key={key}>
                        {node.value}
                    </code>
                );
            }
            case 'code': {
                return (
                    <CodeViewportRender key={key} node={node} />
                );
                // return (
                //     <pre key={key}>
                //         <code>
                //             {node.value}
                //         </code>
                //     </pre>
                // );
            }
            case 'text': {
                return (
                    <span key={key}>
                        {node.value}
                    </span>
                );
            }
            case 'break': {
                return (
                    <br key={key} />
                );
            }
            case 'thematicBreak': {
                return (
                    <hr key={key} />
                );
            }
            case 'blockquote': {
                return (
                    <blockquote key={key}>
                        {renderNodes(node.children)}
                    </blockquote>
                );
            }
            case 'delete': {
                return (
                    <del key={key}>
                        {renderNodes(node.children)}
                    </del>
                );
            }
            case 'strong': {
                return (
                    <strong key={key}>
                        {renderNodes(node.children)}
                    </strong>
                );
            }
            case 'image': {
                return (
                    <img key={key} src={node.url} title={node.title} alt={node.alt} />
                );
            }
            case 'link': {
                return (
                    <a key={key} href={node.url} target="_blank">
                        {renderNodes(node.children)}
                    </a>
                );
            }
            case 'emphasis': {
                return (
                    <em key={key}>
                        {renderNodes(node.children)}
                    </em>
                );
            }
            case 'linkReference': {
                // <a href="https://www.google.com" target="_blank">inline link</a>
                // console.log(node);
                const identifier = root.children.find((n) => n.identifier === node.identifier);
                // console.log(identifier);
                // if(!identifier) return <span>[reference link][{node.identifier}]</span>;
                if(!identifier) return null;
                return (
                    <a key={key} href={identifier.url}>
                        {renderNodes(node.children)}
                    </a>
                );
            }
            case 'definition': {
                return null;
            }
            case 'list': {
                return (
                    <ul key={key}>
                        {renderNodes(node.children)}
                    </ul>
                );
            }
            case 'listItem': {
                return (
                    <li key={key}>
                        {renderNodes(node.children)}
                    </li>
                );
            }
            case "table": {
                return (
                    <table key={key}>
                        <tbody>
                        {renderNodes(node.children)}
                        </tbody>
                    </table>
                )
            }
            case "tableRow": {
                return (
                    <tr key={key}>
                        {renderNodes(node.children)}
                    </tr>
                )
            }
            case "tableCell": {
                return (
                    <td key={key}>
                        {renderNodes(node.children)}
                    </td>
                )
            }
            case 'html': {
                return (
                    <div key={key} dangerouslySetInnerHTML={{__html: node.value}} />
                );
            }
            case 'leafDirective': {
                if(node.name === "example") {
                    return (
                        <blog-example-previewer key={key} src={node.attributes.url} />
                    );
                }
            }
            default:
                return <span key={key} style={{color: 'red'}}>unknown</span>;
        }
    }

    function renderNodes(nodes) {
        return nodes.map((node, i) => renderNode(node, i));
    }

    return (
        <div className="markdown-body">
            {renderNodes(root.children)}
        </div>
    );
}



const MdastRender = (props) => {
    const { mdast } = props;

    return (
        <div className="mdast-render">
            {renderRoot(mdast)}
        </div>
    );
};

export default MdastRender;
