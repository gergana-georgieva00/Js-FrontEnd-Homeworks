function solve(word, text) {
    text = text.toLowerCase();
    text = text.split();

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

function stringSubstring(wordToSearch, textToProcess) {
    textToProcess = textToProcess.toLowerCase()
    textToProcess = textToProcess.split(' ')

    if (textToProcess.includes(wordToSearch)) {
        console.log(wordToSearch);
    } else {
        console.log(`${wordToSearch} not found!`)
    }
}