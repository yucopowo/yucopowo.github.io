# nice-modal-react
React 非常舒服的Modal

## ant modal 原始写法
```jsx {demo=react showLineNumbers}
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{height: 600}}>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default App;
```


## nice-modal-react 写法
```jsx {demo type=module container=root}
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

const MyModal = NiceModal.create(({ name }) => {
    // Use a hook to manage the modal state
    const modal = useModal();
    return (
        <Modal
            title="Hello Antd"
            onOk={() => modal.hide()}
            open={modal.visible}
            onCancel={() => modal.hide()}
            afterClose={() => modal.remove()}
        >
            Hello {name}!
        </Modal>
    );
});

const App = () => {
    
    const showModal = () => {
        NiceModal.show(MyModal, { name: 'antd modal' }).then(() => {
            // do something if the task in the modal finished.
        });
    };
    
    return (
        <NiceModal.Provider>
            <div style={{height: 600}}>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
            </div>
        </NiceModal.Provider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
```



https://juejin.cn/post/7170667418795114533

https://github.com/ebay/nice-modal-react
