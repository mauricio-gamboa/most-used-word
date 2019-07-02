const URL = 'https://4r4x8h5ai7.execute-api.eu-central-1.amazonaws.com/dev/random-sentences/';

const getSentences = async number => {
    const res = await fetch(`${URL}${number}`);
    const data = await res.json();
    return data;
};

export default getSentences;