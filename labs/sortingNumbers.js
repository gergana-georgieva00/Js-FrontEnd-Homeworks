function solve(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    const resultArray = [];

    for (let i = 0, j = sortedArray.length - 1; i <= j; i++, j--) {
        resultArray.push(sortedArray[i]);

        if (i !== j) {
            resultArray.push(sortedArray[j]);
        }
    }

    return resultArray;
}