function getFrequency(arr) {
    return arr.reduce((obj, value) => {
        const lowerCaseWord = value.toLowerCase();

        if (lowerCaseWord) {
            obj[lowerCaseWord] = (obj[lowerCaseWord] || 0) + 1;
        }

        return obj;
    }, {});
}

function getCount(arr) {
    const frequency = getFrequency(arr);
    const max = Math.max(...Object.values(frequency));
    const countObj = {};

    for (const value in frequency) {
        if (frequency[value] === max) {
            countObj[value] = frequency[value];
        }
    }

    return countObj;
}

function getCleanArray(string) {
    const cleanText = string
        .replace(/,/g, ' ')
        .replace(/\./g, '')
        .trim();

    return cleanText.split(' ');
}

export {
    getCount,
    getCleanArray
};