import React from 'react';
import ReactDOM from 'react-dom';
import Navi from './Navi';
import Header from './Header';

it('renders Navi without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navi />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});