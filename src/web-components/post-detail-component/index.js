import { createShadow } from "/src/packages/react-web-component/index.jsx";
import Component from './component.jsx';
import './index.less';

const loader = (props) => {
    return <Component />;
};

createShadow('post-detail-component', loader);
