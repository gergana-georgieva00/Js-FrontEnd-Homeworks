function solve(text){
    const words = text.split(/(?=[A-Z])/).join(', ');
    console.log(words);
}