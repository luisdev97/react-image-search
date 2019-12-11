import React from 'react';

const Error = ({ messagge }) => {
    return (
        <p className=",y-3 p-4 text-center text-white alert alert-danger">{ messagge }</p>
    );
};

export default Error;