import { Suspense, lazy } from 'react';

// layouts
import DashboardLayout from '../layout/dashboard/index';
import MainboardLayout from '../pages/dashboard';

// config
import { DEFAULT_PATH } from '../utils/config';
import LoadingScreen from '../component/Loading';

import { useRoutes, Navigate } from 'react-router-dom';
import { NAME_ROUTE } from './path';

const Loadable = (Component: any) => (props: any) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: NAME_ROUTE.AUTH.DEFAULT_PATH,
            element: <MainboardLayout />,
            children: [{ path: NAME_ROUTE.AUTH.LOGIN, element: <Login /> }]
        },
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: NAME_ROUTE.DASHBOARD.ERROR, element: <Page404 /> }
            ]
        },
        { path: NAME_ROUTE.DASHBOARD.ALL, element: <Navigate to={`/${NAME_ROUTE.DASHBOARD.ERROR}`} replace /> }
    ]);
}

const Login = Loadable(lazy(() => import('../pages/Auth/Login').then((Login: any) => ({ default: Login }))));

const Page404 = Loadable(lazy(() => import('../pages/page404').then((Login: any) => ({ default: Login }))));
