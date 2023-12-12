function solve(array, num){
    let returnArr = [];
    for (let index = 0; index < array.length; index+=num) {
        returnArr.push(array[index])
    }

    return returnArr;
}