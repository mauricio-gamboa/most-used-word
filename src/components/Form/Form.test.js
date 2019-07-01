import React from 'react';
import ReactDOM from 'react-dom';
import App from './Form';

describe('Form', () => {
  it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });  
});