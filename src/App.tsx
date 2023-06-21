import React, { useEffect } from 'react';
import './_dist/scss/_all.scss';
import MainRoutes from './routes/MainRoutes';
import { auth } from './utils/auth';
import { ROUTER_PATH } from './routes/path';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer limit={3} draggablePercent={60} />
        </>
    );
};

export default App;
