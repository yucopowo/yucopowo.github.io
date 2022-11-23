import React, {memo, useRef} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './index.less';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
// console.log(style);
style[`pre[class*="language-"]`]['fontFamily'] = '';
style[`code[class*="language-"]`]['fontFamily'] = '';

const customStyle = {
    fontSize: 14
};

const Highlight = (props) => {
    const { lang, code } = props;

    return (
        <SyntaxHighlighter language={lang} style={style} showLineNumbers wrapLongLines customStyle={customStyle}>
            {code}
        </SyntaxHighlighter>
    );
};

export default memo(Highlight);
