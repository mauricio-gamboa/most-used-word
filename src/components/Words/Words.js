import React, { useState, useEffect } from 'react';

// CSS
import './Words.scss';

function Words(props) {
    const [wordsWithSameCount, setWordsWithSameCount] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.counterObj) {
            setCount(Object.values(props.counterObj)[0] || {});
            setWordsWithSameCount(Object.keys(props.counterObj).length);
        }
    }, [props.counterObj]);

    if (!props.counterObj) {
        return null;
    }

    return (
        <div className='words'>
            <h2>{`The following word${wordsWithSameCount === 1 ? ' is' : "'s are"} the most used:`}</h2>
            <ul>
                {Object.keys(props.counterObj).map((word, index) => {
                    return (
                        <li key={index}>{word}</li>
                    );
                })}
            </ul>
            <p>{`Frequency: ${count} time${count === 1 ? '' : 's'}`}</p>
        </div>
    );
}

export default Words;