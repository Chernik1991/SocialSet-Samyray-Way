import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from './State/State';

ReactDOM.render(
    <App State={State} />,
  document.getElementById('root')
);