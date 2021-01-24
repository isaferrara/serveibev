import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import 'antd/lib/menu/style/css'
import 'antd/lib/popover/style/css'

ReactDOM.render(
      <Router />
  ,document.getElementById('root')
);

reportWebVitals();
