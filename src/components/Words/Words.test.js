import React from 'react';
import ReactDOM from 'react-dom';
import Words from './Words';

describe('Words', () => {
    let counterObj;

    beforeEach(() => {
        counterObj = {
            which: 2,
            became: 2,
            teacher: 2
        };
    })

    it('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Words counterObj={counterObj} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});