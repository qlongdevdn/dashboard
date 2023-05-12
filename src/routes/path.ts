function path(root: string, sublink: string) {
    return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    general: {
        app: path(ROOTS_DASHBOARD, 'app')
    }
};

export const NAME_ROUTE = {
    AUTH: {
        DEFAULT_PATH: '/auth',
        LOGIN: 'login'
    },
    DASHBOARD: {
        DEFAULT_PATH: '/',
        ERROR: '404',
        ALL: '*'
    }
};

export const ROUTER_PATH = {
    DASHBOARD: '/',
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
        FORGOT_PASSWORD: '/forgot-password',
        RESET_PASSWORD: '/reset-password'
    },
    SETTINGS: '/system-settings'
};
