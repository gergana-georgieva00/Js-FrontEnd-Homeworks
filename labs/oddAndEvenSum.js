function sumOfEvenAndOddDigits(number) {
    let evenSum = 0;
    let oddSum = 0;

    const numString = Math.abs(number).toString();

    for (let digit of numString) {
        const digitValue = parseInt(digit);

        if (isNaN(digitValue)) {
            continue;
        }

        if (digitValue % 2 === 0) {
            evenSum += digitValue;
        } else {
            oddSum += digitValue;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}