import React, {memo, useRef} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";

const CodeHighlight = (props) => {

    const {node} = props;

    return (
        <Highlight {...defaultProps} theme={theme} code={node.value} language={node.lang}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );

};

export default CodeHighlight;

