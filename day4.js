1. A.  Print odd numbers in an array 
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 
    const printOddNumbers = function() {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                console.log(numbers[i]);
            }
        }
    };

  
    printOddNumbers();
})();

1. B convert all the strings to title caps in a string array 
(function() {
    var inputArray = ["apple", "banana", "cherry", "date"];
    var titleCaseArray = inputArray.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });

    console.log(titleCaseArray);
})();

1. C  sum of all numbers in an array 
(function() {
  var numbers = [1, 2, 3, 4, 5];
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log("Sum:", sum);
})();

1. D Returns all the prime number in an array 
(function() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    function findPrimes(arr) {
        const primeNumbers = [];
        for (let i = 0; i < arr.length; i++) {
            if (isPrime(arr[i])) {
                primeNumbers.push(arr[i]);
            }
        }
        return primeNumbers;
    }

    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const primes = findPrimes(numbers);
    console.log(primes);
})();

 1. E return all the palindrome in an array 
const array = ["racecar", "apple", "level", "banana", "deified"];

(function() {
    function isPalindrome(word) {
        
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    }

    const palindromes = [];
    for (const word of array) {
        if (isPalindrome(word)) {
            palindromes.push(word);
        }
    }

   
    console.log(palindromes);
})();

1. F return median of sorted array 
(function () {
    function findMedianSortedArrays(nums1, nums2) {
        const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
        const length = mergedArray.length;

        if (length % 2 === 0) {
            const midIndex = length / 2;
            return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
        } else {
            const midIndex = Math.floor(length / 2);
            return mergedArray[midIndex];
        }
    }

    const nums1 = [1, 3];
    const nums2 = [2, 4];

    const median = findMedianSortedArrays(nums1, nums2);
    console.log("Median:", median);
})();

1. G Removes duplicates from an array 
(function() {
    var arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
    
    function removeDuplicates(inputArray) {
        var uniqueArray = [];
        
        for (var i = 0; i < inputArray.length; i++) {
            if (uniqueArray.indexOf(inputArray[i]) === -1) {
                uniqueArray.push(inputArray[i]);
            }
        }
        
        return uniqueArray;
    }
    
    var result = removeDuplicates(arr);
    console.log(result);
})();

1. H Rotate an array by k time
(function() {
 
  var arr = [1, 2, 3, 4, 5];
  var k = 2;

  
  for (var i = 0; i < k; i++) {
    var temp = arr[0];
    for (var j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = temp;
  }

 
  console.log(arr);
})();

2. A Print odd numbers in an array 
const printOddNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
printOddNumbers(10);


2. B Convert all strings to title caps in a string array

const stringArray = ["hello world", "this is a test", "javascript is fun"];

const convertToTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const titleCaseArray = stringArray.map(convertToTitleCase);

console.log(titleCaseArray);

 2. C sum of all numbers in an array 
const numbers = [1, 2, 3, 4, 5];

const sum = (arr) => arr.reduce((total, currentValue) => total + currentValue, 0);

const result = sum(numbers);

console.log(result);


2. D Returns all prime numbers in an array 

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const findPrimes = (arr) => arr.filter((num) => isPrime(num));

// Example usage:
const numbers = [2, 3, 5, 7, 9, 11, 15, 17, 19];
const primeNumbers = findPrimes(numbers);

console.log(primeNumbers);


2. E Returns all palindromes in an array 

const isPalindrome = (str) => {
  
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};

const findPalindromes = (arr) => {
 
  return arr.filter((word) => isPalindrome(word));
};

const words = ["level", "hello", "racecar", "world", "deified"];
const palindromes = findPalindromes(words);
console.log(palindromes);