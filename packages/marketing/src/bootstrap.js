import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

console.log(React)


const mount = (root) => {
  ReactDOM.render(
    <App />,
    root
  )
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount };

