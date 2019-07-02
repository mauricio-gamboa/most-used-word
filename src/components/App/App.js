import React, { useState, useEffect } from 'react';

// CSS
import './App.scss';

// Services
import {
	getCount,
	getCleanArray
} from '../../services/string';

// Components
import Form from '../Form/Form';

function App() {
	const [sentences, setSentences] = useState({ text: '' });
	const [sentencesArray, setSentencesArray] = useState([]);
	const [counterObj, setCounterObj] = useState({});
	const [wordsWithSameCount, setWordsWithSameCount] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setSentencesArray(getCleanArray(sentences.text));
	}, [sentences]);

	useEffect(() => {
		setCounterObj(getCount(sentencesArray));
	}, [sentencesArray]);

	useEffect(() => {
		setCount(Object.values(counterObj)[0] || {});
		setWordsWithSameCount(Object.keys(counterObj).length);
	}, [counterObj]);

	return (
		<div className='app'>
			<Form
				callback={setSentences} />
			{sentences && sentences.text &&
				<div className='sentences'>{sentences.text}</div>
			}
			{wordsWithSameCount > 0 &&
				<div>
					<h2>{`The following word${wordsWithSameCount === 1 ? ' is' : "'s are"} the most used:`}</h2>
					<p>{`Frequency: ${count} time${count === 1 ? '' : 's'}`}</p>
					<ul>
						{Object.keys(counterObj).map((word, index) => {
							return (
								<li key='index'>{word}</li>
							);
						})}
					</ul>
				</div>
			}
		</div>
	);
}

export default App;
