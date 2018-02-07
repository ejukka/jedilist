import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/creative.css';
import Navi from './components/Navi';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Navi />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
