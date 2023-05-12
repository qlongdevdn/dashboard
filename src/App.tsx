import React, { useEffect } from 'react';
import './_dist/scss/_all.scss';
import MainRoutes from './routes/MainRoutes';
import { auth } from './utils/auth';
import { ROUTER_PATH } from './routes/path';
import { useNavigate } from 'react-router-dom';
const App = () => {
    const navigate = useNavigate();
    const authData = auth.getUser();

    useEffect(() => {
        if (location.pathname !== ROUTER_PATH.AUTH.LOGIN && authData === undefined) {
            navigate(ROUTER_PATH.AUTH.LOGIN);
        }
    }, [authData, navigate]);

    return (
        <>
            <MainRoutes />
        </>
    );
};

export default App;
