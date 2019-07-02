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
import Words from '../Words/Words';

function App() {
	const [sentences, setSentences] = useState({ text: '' });
	const [sentencesArray, setSentencesArray] = useState([]);
	const [counterObj, setCounterObj] = useState({});

	useEffect(() => {
		setSentencesArray(getCleanArray(sentences.text));
	}, [sentences]);

	useEffect(() => {
		setCounterObj(getCount(sentencesArray));
	}, [sentencesArray]);

	const hasResults = Object.keys(counterObj).length > 0;

	return (
		<div className='app'>
			<Form callback={setSentences} />

			{sentences && sentences.text &&
				<div className='sentences'>
					<h2>Sentences:</h2>
					<div>{sentences.text}</div>
				</div>
			}

			{hasResults &&
				<Words counterObj={counterObj} />
			}
		</div>
	);
}

export default App;
