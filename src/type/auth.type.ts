export interface userLoginSuccess {
    access_token: string;
}
export interface userLoginRequest {
    email?: string;
    password?: string;
}

export type InitialAuth = {
    isAuthenticated: boolean;
};
