import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  test('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });  
});