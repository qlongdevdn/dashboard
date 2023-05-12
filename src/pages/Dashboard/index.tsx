import React, { FC } from 'react';

interface IProps {
    children?: React.ReactNode;
}

const DashScreen: FC<IProps> = () => {
    return (
        <div className="page">
            <h1>Hello Dashboard</h1>
        </div>
    );
};

export default DashScreen;
