import React from 'react';
import classnames from 'classnames';

export default function Button({children}) {
    return <button className={classnames(`btn `, className)}>{children}</button>;
}