import React,{ Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '/src/components/loading/index.jsx';

const SuspenseLoading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => {

        };
    }, []);
    if(loading) {
        return null;
    }
    return <Loading fullscreen />;
}

const RootLayout = () => {
    return (
        <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
        </Suspense>
    );
}

export default RootLayout;
