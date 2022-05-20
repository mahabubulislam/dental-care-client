import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default PrimaryButton;