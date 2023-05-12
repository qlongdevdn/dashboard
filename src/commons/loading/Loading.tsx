import React, { FC } from 'react';
import HashLoader from 'react-spinners/HashLoader';

interface Iprops {
    isloaded: boolean;
}

const Loading: FC<Iprops> = ({ isloaded }) => {
    return (
        <div className={`modal-loading ${!isloaded && ' hidden'}`}>
            <HashLoader color="#021D2E" />
        </div>
    );
};

export default Loading;
