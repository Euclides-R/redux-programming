import React, { Children } from 'react';

export default function Screen({ children }) {
    return (
        <div className="screen-design">
            {children}
        </div>
    );
}