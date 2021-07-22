import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({ className, kind, children }) {
    return (
        <button className={classnames(`btn btn-${kind}`, className)}>
            {children} 
        </button>
        );
    }


    Button.propTypes = {
        kind: PropTypes.string
      };
      
      Button.defaultProps = {
        kind: 'design',
      };
