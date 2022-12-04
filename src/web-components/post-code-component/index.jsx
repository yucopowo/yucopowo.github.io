import { create } from "/src/packages/react-in-view-web-component/index.jsx";
import './index.less';

const loader = () => import('/src/web-components/post-code-component/component.jsx');

create('post-code-component', loader);
