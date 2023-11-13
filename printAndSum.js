function solve(num1, num2){
    let sum = 0;
    let x = 0;
    let resultLine = '';
    for(i = num1; i <= num2; i++){
        sum += i;
        resultLine
        if(i === num1){
            resultLine += i;
        } else{
            resultLine += ' ' + i;
        }
    }

    console.log(resultLine);
    console.log(`Sum: ${sum}`);
}