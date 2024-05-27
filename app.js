// QUESTION 1
//
var n = 7;
for (var n_1 = 1; n_1 < 100; n_1++) {
    if (n_1 % 3 === 0) {
        console.log("Fizz");
    }
    else if (n_1 % 5 === 0) {
        console.log("Buzz");
    }
    else if (n_1 % 3 === 0 && n_1 % 5 === 0) {
        console.log("FizzBuzz");
    }
}
// console.log(n);
//QUESTION 2
//fibonnaci sequence
function fibonacci(n) {
    var n1 = 0;
    var n2 = 1;
    var sum;
    if (n === 1) {
        return n1;
    }
    else if (n === 2) {
        return n2;
    }
    else {
        for (var i = 3; i <= n; i++) {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        return n2;
    }
}
//   const result: number = fibonacci(7)
//   console.log(result);
//question 3
function powerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}
//  console.log(powerOfTwo(8));
//  console.log(powerOfTwo(6));
//QUESTION 4
function capitalLetter(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
// console.log(capitalLetter("i love programming")); 
// QUESTION 5
function reverseInteger(input) {
    var reversedNumber = 0;
    var remainder;
    while (input !== 0) {
        remainder = input % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        input = Math.trunc(input / 10);
    }
    return reversedNumber;
}
console.log(reverseInteger(500));
console.log(reverseInteger(91));
//QUESTION 6
function countVowels(sentence) {
    var lowerCaseSentence = sentence.toLowerCase();
    var vowels = 'aeiou';
    var vowelCount = 0;
    for (var i = 0; i < lowerCaseSentence.length; i++) {
        if (vowels.includes(lowerCaseSentence[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("Hello World"));
