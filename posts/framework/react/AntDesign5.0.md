# AntDesign5.0.md

```jsx {demo}

import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const style = {
    container:{
        textAlign: 'center'    
    },
    header: {
        color: '#fff',
        background: '#7dbcea'
    },
    content: {
        minHeight: 120,
        color: '#fff',
        lineHeight: '120px',
        background: 'rgba(16, 142, 233, 1)'
    },
    footer: {
        color: '#fff',
        background: '#7dbcea'
    },
};

const App = () => {
    return (
        <div style={style.container}>
            <Layout>
                <Header style={style.header}>Header</Header>
                <Content style={style.content}>Content</Content>
                <Footer style={style.footer}>Footer</Footer>
            </Layout>
        </div>
    );
};

export default App;

```
