import React, {memo, useRef} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.less';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD

const Highlight = (props) => {
    const { lang, code } = props;

    // return (
    //     <pre>
    //         <code>
    //             {code}
    //         </code>
    //     </pre>
    // );
    return (
        <SyntaxHighlighter language={lang} style={okaidia} showLineNumbers wrapLongLines>
            {code}
        </SyntaxHighlighter>
    );
};

export default memo(Highlight);
