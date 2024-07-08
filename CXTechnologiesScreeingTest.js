// Q#1: Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

const unsortedArray = [3, 2, 7, 4, 6, 9];

const sortArray = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      temp = inputArr[i];
      if (inputArr[i] < inputArr[j]) {
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
      }
    }
  }
  return inputArr;
};
console.log("Question no 1");
console.log("Input");
console.log(unsortedArray);
console.log("Output");
console.log(sortArray(unsortedArray));

// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.

const string = "doctor";

const checkPalindrome = (str) => {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  if (str === newString) {
    return true;
  } else return false;
};

console.log("===========================");
console.log("Question no 2");
console.log("Input");
console.log(string);
console.log("Output");
console.log(checkPalindrome(string));

// Q#3: Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.

const inputArray = [3, 7, 1, 5, 11, 19];
const findSum = (inputArr) => {
  let largestSum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      let sum = inputArr[i] + inputArr[j];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  return largestSum;
};

console.log("===========================");
console.log("Question no 3");
console.log("Input");
console.log(inputArray);
console.log("Output");
console.log(findSum(inputArray));

// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]

const inputArray1 = [3, 4, 9, 1, 7, 3, 2, 6];
const findMissing = (inputArr) => {
  let largestNum = 0;
  let missingArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (largestNum < inputArr[i]) {
      largestNum = inputArr[i];
    }
  }
  for (let i = 0; i < largestNum; i++) {
    if (!inputArr.includes(i)) {
      missingArr.push(i);
    }
  }
  return missingArr;
};

console.log("===========================");
console.log("Question no 4");
console.log("Input");
console.log(inputArray1);
console.log("Output");
console.log(findMissing(inputArray1));

// Q#5: Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.

const inputArray2 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const findRepeatedNummber = (inputArr) => {
  let counts = {};
  let mostRepeated = inputArr[0];
  let numberofTimes = 0;
  for (const num of inputArr) {
    counts[num] = (counts[num] || 0) + 1;
    if (numberofTimes < counts[num]) {
      numberofTimes = counts[num];
      mostRepeated = num;
    }
  }
  console.log(`${mostRepeated} is repeated ${numberofTimes} times.`);
};

console.log("===========================");
console.log("Question no 5");
console.log("Input");
console.log(inputArray2);
console.log("Output");
findRepeatedNummber(inputArray2);

// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]

const inputArray3 = [3, 8, 9, 7, 6];
const rotateArray = (inputArr) => {
  let rotatedArr = new Array(inputArr.length);
  for (let i = 0; i < inputArr.length; i++) {
    if (i === 0) {
      rotatedArr[0] = inputArr[inputArr.length - 1];
    } else {
      rotatedArr[i] = inputArr[i - 1];
    }
  }
  return rotatedArr;
};

console.log("===========================");
console.log("Question no 6");
console.log("Input");
console.log(inputArray3);
console.log("Output");
console.log(rotateArray(inputArray3));
