function solve(num){
    const numCopy = num;
    let sum = 0;
    let result = true;

    while(num){
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    let digit = numCopy.toString()[0];
    for(i = 1;i < numCopy.toString().length; i++){
        if(digit != numCopy.toString()[i]){
            result = false;
            break;
        }

        digit = numCopy.toString()[i];
    }

    console.log(result);
    console.log(sum);
}

solve(1234);