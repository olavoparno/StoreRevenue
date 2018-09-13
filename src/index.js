import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';
import './scss/style.scss';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
