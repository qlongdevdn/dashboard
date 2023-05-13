import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './path';
import { lazy } from 'react';

// Pages
//// Auth
const Login = lazy(() => import('./../pages/Auth/Login'));
//// Main
const Dashboard = lazy(() => import('./../pages/Dashboard'));

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTER_PATH.AUTH.LOGIN} element={<Login />} />

            <Route path={ROUTER_PATH.DASHBOARD} element={<Dashboard />} />
        </Routes>
    );
};
export default MainRoutes;
