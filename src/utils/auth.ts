type Auth = {
    set: (token: token) => void;
    get: () => UserObject;
    remove: () => void;
    getId: () => string;
    getUser: () => User;
};

type token = {
    access_token: string;
};
export type User = {
    email: string;
    full_name: string;
    permissions: string[];
    position: string;
    status: string;
    avatar?: string;
    _id: string;
};

type UserObject = {
    access_token: string;
    user: User;
};

export const auth: Auth = {
    set: (token) => {
        localStorage.setItem('user', JSON.stringify(token));
    },
    get: () => {
        const user: string | null = localStorage.getItem('user');
        if (user) return JSON.parse(user);
    },
    remove: () => {
        localStorage.removeItem('user');
    },
    getId: () => {
        const user: string | null = localStorage.getItem('user');
        if (user) return JSON.parse(user).user._id;
    },
    getUser: () => {
        const user: string | null = localStorage.getItem('user');
        if (user) return JSON.parse(user).user;
    }
};
