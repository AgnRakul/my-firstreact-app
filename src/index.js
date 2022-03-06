import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Car() {
  return <h2>Hey Garage its me Car</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who Called Me to Use my Garage?</h1>
      <Car />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

