import React from 'react';

export interface INotFoundProps {

};

const NotFound : React.FC<INotFoundProps> = () => {
    return (
        <div>
            <h1>Not Found 404</h1>
            <p>page not found</p>
        </div>
    );
};

export default NotFound;