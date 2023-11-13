function solve(fruit, weight, price){
    let result = weight / 1000 * price;

    console.log(`I need $${result.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}