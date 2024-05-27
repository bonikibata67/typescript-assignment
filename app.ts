// QUESTION 1
//
const n: number = 9

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}
// console.log(i);

//QUESTION 2
//fibonnaci sequence

function fibonacci(n: number): number {
    let n1: number = 0;
    let n2: number = 1;
    let sum: number;
  
    if (n === 1) {
      return n1

    } else if (n === 2) {

      return n2

    } else {
      for (let i: number = 3; i <= n; i++) {
        sum = n1 + n2
        n1 = n2
        n2 = sum
      }
      return n2
    }
  } 
 
//   const result: number = fibonacci(7)

//   console.log(result);

  //question 3

 function powerOfTwo(n:number):boolean{
   
        if (n <= 0) {
            return false;
        }
    
        while (n % 2 === 0) {
            n /= 2
        }   
        
        return n === 1; 

        
 }
//  console.log(powerOfTwo(8));
//  console.log(powerOfTwo(6));

//QUESTION 4

function capitalLetter(str: string): string {
    const words: string[] = str.split(" ");

    for (let i = 0; i < words.length; i++) {
      
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

// console.log(capitalLetter("i love programming")); 



// QUESTION 5
function reverseInteger(input: number): number {
    let reversedNumber: number = 0
        let remainder: number
    
    while (input !== 0) {
        remainder = input % 10

        reversedNumber = reversedNumber * 10 + remainder
        input = Math.trunc(input / 10)
    }

    return reversedNumber
}


console.log(reverseInteger(500)); 
console.log(reverseInteger(91));  


//QUESTION 6
function countVowels(sentence: string): number {
  
    const lowerCaseSentence: string = sentence.toLowerCase()    
    
    const vowels: string = 'aeiou'    
   
    let vowelCount: number = 0

  
    for (let i = 0; i < lowerCaseSentence.length; i++) {
        
        if (vowels.includes(lowerCaseSentence[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}


console.log(countVowels("Hello World")); 
