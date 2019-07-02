import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

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

    test('renders without crashing (smoke test)', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Words counterObj={counterObj} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('renders the correct title', () => {
        const { container } = render(<Words counterObj={counterObj} />);
        const title = container.querySelector('h2');
        expect(title.textContent).toBe('The following words are the most used:');
    });

    test('renders the correct title', () => {
        delete counterObj.which;
        delete counterObj.became;
        const { container } = render(<Words counterObj={counterObj} />);
        const title = container.querySelector('h2');
        expect(title.textContent).toBe('The following word is the most used:');
    });

    test('renders the correct frequency', () => {
        const { container } = render(<Words counterObj={counterObj} />);
        const frequency = container.querySelector('p');
        expect(frequency.textContent).toBe('Frequency: 2 times');
    });

    test('renders the correct frequency', () => {
        counterObj.which = 1;
        counterObj.became = 1;
        counterObj.teacher = 1;
        const { container } = render(<Words counterObj={counterObj} />);
        const frequency = container.querySelector('p');
        expect(frequency.textContent).toBe('Frequency: 1 time');
    });

    test('renders the correct amount of words', () => {
        const { container } = render(<Words counterObj={counterObj} />);
        const words = container.querySelectorAll('li');
        expect(words.length).toBe(3);
    });

    test('renders the correct amount of words', () => {
        delete counterObj.which;
        delete counterObj.became;
        const { container } = render(<Words counterObj={counterObj} />);
        const words = container.querySelectorAll('li');
        expect(words.length).toBe(1);
    });
});