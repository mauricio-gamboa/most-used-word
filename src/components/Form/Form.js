import React, { useState } from 'react';

// CSS
import './Form.scss';

// Services
import getSentences from '../../services/api';

function Form(props) {
    const [number, setNumber] = useState('');
    const [errors, setErros] = useState([]);

    const handleSubmit = async event => {
        event.preventDefault();

        if (hasErrors()) {
            return;
        }

        const video = await getSentences(number);
        props.callback(video);
    };

    const hasErrors = () => {
        const liveErrors = [];

        if (!number) {
            liveErrors.push('Enter a numer.');
        }

        if (number && isNaN(number)) {
            liveErrors.push('Enter a valid numer.');
        }

        setErros(liveErrors);

        return liveErrors.length > 0;
    };

    return (
        <form
            className='form'
            onSubmit={event => handleSubmit(event)}>
            <div className='row'>
                <div className='col'>
                    <input
                        className='input'
                        type='text'
                        name='number'
                        value={number}
                        onChange={event => setNumber(event.target.value)}
                        placeholder='Number' />
                </div>
                <div className='col'>
                    <button className='button' type='submit'>
                        Get sentences!
                    </button>
                </div>
            </div>
            {errors.length > 0 &&
                <div className='errors'>
                    {errors.map((error, index) => <p key={index}>{`- ${error}`}</p>)}
                </div>
            }
        </form>
    );
}

export default Form;