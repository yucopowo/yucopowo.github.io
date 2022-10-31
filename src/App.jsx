import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '/src/router.jsx';
import '/src/App.less';

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
