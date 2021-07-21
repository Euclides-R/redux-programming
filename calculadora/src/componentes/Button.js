import React from 'react';

export default function Button({ children, classNames, kind }) {
    return (
            <button className="btn btn-design">
                {children}
            </button>
        );
    }