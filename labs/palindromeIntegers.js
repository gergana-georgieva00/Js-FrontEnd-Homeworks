function solve(){
    function isPalindrome(num) {
        const numStr = num.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        return numStr === reversedNumStr;
    }
    
    function checkPalindromes(arr) {
        for (let num of arr) {
            const result = isPalindrome(num);
            console.log(result ? "true" : "false");
        }
    }
    
}