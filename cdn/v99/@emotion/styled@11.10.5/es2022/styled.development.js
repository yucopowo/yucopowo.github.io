/* esm.sh - esbuild bundle(@emotion/styled@11.10.5) es2022 development */ // esm-build-9eb44f1d85d15df7147da5a2b548dcd152550aa3-88fd0c62/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
import"/cdn/v99/@babel/runtime@7.20.6/es2022/helpers/extends.development.js";import"/cdn/stable/react@18.2.0/es2022/react.development.js";import"/cdn/v99/@emotion/is-prop-valid@1.2.0/es2022/is-prop-valid.development.js";// esm-build-9eb44f1d85d15df7147da5a2b548dcd152550aa3-88fd0c62/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
import _extends from"/cdn/v99/@babel/runtime@7.20.6/es2022/helpers/esm/extends.development.js";import{useContext,createElement,Fragment}from"/cdn/stable/react@18.2.0/es2022/react.development.js";import isPropValid from"/cdn/v99/@emotion/is-prop-valid@1.2.0/es2022/is-prop-valid.development.js";import{withEmotionCache,ThemeContext}from"/cdn/v99/@emotion/react@11.10.5/es2022/react.development.js";import{getRegisteredStyles,registerStyles,insertStyles}from"/cdn/v99/@emotion/utils@1.2.0/es2022/utils.development.js";import{serializeStyles}from"/cdn/v99/@emotion/serialize@1.1.1/es2022/serialize.development.js";import{useInsertionEffectAlwaysWithSyncFallback}from"/cdn/v99/@emotion/use-insertion-effect-with-fallbacks@1.0.0/es2022/use-insertion-effect-with-fallbacks.development.js";var testOmitPropsOnStringTag=isPropValid;var testOmitPropsOnComponent=function testOmitPropsOnComponent2(key){return key!=="theme"};var getDefaultShouldForwardProp=function getDefaultShouldForwardProp2(tag){return typeof tag==="string"&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent};var composeShouldForwardProps=function composeShouldForwardProps2(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}if(typeof shouldForwardProp!=="function"&&isReal){shouldForwardProp=tag.__emotion_forwardProp}return shouldForwardProp};var ILLEGAL_ESCAPE_SEQUENCE_ERROR=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;var Insertion=function Insertion2(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;registerStyles(cache,serialized,isStringTag);var rules=useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(cache,serialized,isStringTag)});return null};var createStyled=function createStyled2(tag,options){if(true){if(tag===void 0){throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.")}}var isReal=tag.__emotion_real===tag;var baseTag=isReal&&tag.__emotion_base||tag;var identifierName;var targetClassName;if(options!==void 0){identifierName=options.label;targetClassName=options.target}var shouldForwardProp=composeShouldForwardProps(tag,options,isReal);var defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag);var shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments;var styles=isReal&&tag.__emotion_styles!==void 0?tag.__emotion_styles.slice(0):[];if(identifierName!==void 0){styles.push("label:"+identifierName+";")}if(args[0]==null||args[0].raw===void 0){styles.push.apply(styles,args)}else{if(args[0][0]===void 0){console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)}styles.push(args[0][0]);var len=args.length;var i=1;for(;i<len;i++){if(args[0][i]===void 0){console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)}styles.push(args[i],args[0][i])}}var Styled=withEmotionCache(function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag;var className="";var classInterpolations=[];var mergedProps=props;if(props.theme==null){mergedProps={};for(var key in props){mergedProps[key]=props[key]}mergedProps.theme=useContext(ThemeContext)}if(typeof props.className==="string"){className=getRegisteredStyles(cache.registered,classInterpolations,props.className)}else if(props.className!=null){className=props.className+" "}var serialized=serializeStyles(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name;if(targetClassName!==void 0){className+=" "+targetClassName}var finalShouldForwardProp=shouldUseAs&&shouldForwardProp===void 0?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp;var newProps={};for(var _key in props){if(shouldUseAs&&_key==="as")continue;if(finalShouldForwardProp(_key)){newProps[_key]=props[_key]}}newProps.className=className;newProps.ref=ref;return/* @__PURE__ */createElement(Fragment,null,/* @__PURE__ */createElement(Insertion,{cache,serialized,isStringTag:typeof FinalTag==="string"}),/* @__PURE__ */createElement(FinalTag,newProps))});Styled.displayName=identifierName!==void 0?identifierName:"Styled("+(typeof baseTag==="string"?baseTag:baseTag.displayName||baseTag.name||"Component")+")";Styled.defaultProps=tag.defaultProps;Styled.__emotion_real=Styled;Styled.__emotion_base=baseTag;Styled.__emotion_styles=styles;Styled.__emotion_forwardProp=shouldForwardProp;Object.defineProperty(Styled,"toString",{value:function value(){if(targetClassName===void 0&&true){return"NO_COMPONENT_SELECTOR"}return"."+targetClassName}});Styled.withComponent=function(nextTag,nextOptions){return createStyled2(nextTag,_extends({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,true)})).apply(void 0,styles)};return Styled}};var emotion_styled_base_browser_esm_default=createStyled;// esm-build-9eb44f1d85d15df7147da5a2b548dcd152550aa3-88fd0c62/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
import"/cdn/v99/@emotion/react@11.10.5/es2022/react.development.js";import"/cdn/v99/@emotion/utils@1.2.0/es2022/utils.development.js";import"/cdn/v99/@emotion/serialize@1.1.1/es2022/serialize.development.js";import"/cdn/v99/@emotion/use-insertion-effect-with-fallbacks@1.0.0/es2022/use-insertion-effect-with-fallbacks.development.js";var tags=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];var newStyled=emotion_styled_base_browser_esm_default.bind();tags.forEach(function(tagName){newStyled[tagName]=newStyled(tagName)});var emotion_styled_browser_esm_default=newStyled;export{emotion_styled_browser_esm_default as default};
//# sourceMappingURL=styled.map