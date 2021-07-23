import React from 'react';

export default function Button(props) {
  return (
    <button className={`
        btn 
        ${props.double ? 'btn-zero' : ''}      
        ${props.triple ? 'btnac' : ''}
      `}
      onClick={e => props.click && props.click(props.label)}
      >
        {props.label}
    </button>
  );
}
