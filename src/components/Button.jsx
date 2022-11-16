import React from 'react';

function Button({ children, onClick }) {
  // console.log('button');
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
