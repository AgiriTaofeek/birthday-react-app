import React from 'react';

function Wrapper({ children }) {
  // console.log('wrapper');
  return <section className="container">{children}</section>;
}

export default Wrapper;
