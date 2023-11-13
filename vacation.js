function solve(group, type, day) {
    let result = 0.0;
    let initialPrice = 0.0;

    switch (day) {
        case "Friday":
            if (type == "Students") {
                initialPrice = 8.45;
                result = group * 8.45;
            } else if (type == "Business") {
                initialPrice = 10.90;
                result = group * 10.90;
            } else {
                initialPrice = 15;
                result = group * 15;
            }
            break;
        case "Saturday":
            if (type == "Students") {
                initialPrice = 9.80;
                result = group * 9.80;
            } else if (type == "Business") {
                initialPrice = 15.60;
                result = group * 15.60;
            } else {
                initialPrice = 20;
                result = group * 20;
            }
            break;
        case "Sunday":
            if (type == "Students") {
                initialPrice = 10.46;
                result = group * 10.46;
            } else if (type == "Business") {
                initialPrice = 16;
                result = group * 16;
            } else {
                initialPrice = 22.50;
                result = group * 22.50;
            }
            break;
    }

    if(type == "Students" && group >= 30){
        // reduce by 15%
        result -= result * 0.15;
    }
    if(type == "Business" && group >= 100){
        // 10 stay for free
        let discount = 10 * initialPrice;
        result -= discount;
    }
    if(type == "Regular" && group >= 10 && group <= 20){
        //reduce by 5%
        result -= result * 0.05;
    }

    console.log(`Total price: ${(Math.round(result * 100) / 100).toFixed(2)}`);
}

solve(40, "Regular", "Saturday");