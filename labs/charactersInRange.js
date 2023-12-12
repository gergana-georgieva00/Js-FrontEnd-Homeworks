function printCharactersInRangeExcludingEnds(char1, char2) {
    const startCode = char1.charCodeAt(0);
    const endCode = char2.charCodeAt(0);

    for (let i = Math.min(startCode, endCode) + 1; i < Math.max(startCode, endCode); i++) {
        const currentChar = String.fromCharCode(i);
        process.stdout.write(currentChar + " ");
    }
    process.stdout.write('\n');
}