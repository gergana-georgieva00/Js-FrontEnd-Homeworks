function solve(word, text) {
    const lowercasedWord = word.toLowerCase();
    const lowercasedText = text.toLowerCase();

    if (lowercasedText.includes(lowercasedWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}