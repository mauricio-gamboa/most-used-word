import React, { useState } from 'react';

// CSS
import './Form.scss';

// Services
import getSentences from '../../services/api';

function Form(props) {
    const [number, setNumber] = useState('');
    const [errors, setErros] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();

        if (hasErrors()) {
            return;
        }

        setIsLoading(true);
        const video = await getSentences(number);
        setIsLoading(false);
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

        if (number && number <= 0) {
            liveErrors.push('Number must be greater than zero.');
        }

        if (number && number > 10) {
            liveErrors.push('Number must be 10 or less.');
        }

        setErros(liveErrors);

        return liveErrors.length > 0;
    };

    return (
        <form
            className='form'
            onSubmit={event => handleSubmit(event)}>
            <div className='row'>
                <input
                    className='input'
                    type='text'
                    name='number'
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    placeholder='Number' />
            </div>
            <div className='row'>
                <button className='button' type='submit' disabled={`${isLoading ? 'disable' : ''}`}>
                    {`${isLoading ? 'Loading sentences' : 'Get sentences!'}`}

                    {' '}

                    {!isLoading &&
                        <i className='far fa-file-alt' />
                    }

                    {isLoading &&
                        <i className='fas fa-spinner fa-spin' />
                    }
                </button>
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