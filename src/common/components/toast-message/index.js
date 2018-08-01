import ReactDOM from 'react-dom';
import React from 'react';
import Toast from '../toast';

const container = document.createElement('div');
document.body.appendChild(container);

export default ReactDOM.render(
  <Toast />,
  container
);
