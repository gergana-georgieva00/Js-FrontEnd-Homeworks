function findSpecialWords(inputString) {
    const regex = /#([a-zA-Z]+)/g;

    const matches = inputString.match(regex);

    if (matches) {
        const validSpecialWords = matches.filter(word => /^[a-zA-Z]+$/.test(word.slice(1)));

        validSpecialWords.forEach(word => console.log(word.slice(1)));
    }
}