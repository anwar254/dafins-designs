import React from 'react';

function Main(props) {
  return (
    <div className="main-wrapper">
      {props.children}
    </div>
  );
}

export default Main;
