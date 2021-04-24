//5kyu String incrementer
function incrementString(strng) {
  if (typeof strng !== "string") {
    return "";
  }

  let numbers = "",
    letters = "",
    numberLength = 0;
  let regex = /\d+/g;
  numbers = strng.match(regex);
  if (numbers === null) return strng + "1";
  numbers = numbers[0];
  letters = strng.replace(numbers, "");
  numberLength = numbers.length;
  if (Number(numbers.slice(-1)) <= 8)
    return (
      letters +
      numbers.slice(0, numberLength - 1) +
      String(Number(numbers.slice(-1)) + 1)
    );
  if (String(Number(numbers) + 1).length < numberLength) {
    let difference = numberLength - String(Number(numbers) + 1).length;
    return letters + "0".repeat(difference) + String(Number(numbers) + 1);
  }

  return letters + String(Number(numbers) + 1);
}

// 5kyu Extract the domain name from a URL
function domainName(url){
  if(typeof url !== 'string')
    return '';
  let filteredURL = url.replace(/(((http|https):\/\/)|www\.)/g, '');
  let domainName = filteredURL.split('.');
  return domainName[0];
}

// 6kyu Which are in?
function inArray(array1,array2){
  let result = [];

  if(array1.length === 0 || array2.length === 0)
    return []
  for(const wordArr1 of array1){
    for(const wordArr2 of array2){
      if(wordArr2.includes(wordArr1)){
        result.push(wordArr1);
        break;
      }
        
    }
  }
  return result.sort();
}

// 5kyu The Hashtag Generator
function generateHashtag (str) {
  let result = '';
  
  if(str.trim().length === 0 || typeof str !== 'string')
    return false;

  str = str.trim().toLowerCase();

  let wordsArr = str.split(' ');
  for(const [index, word] of wordsArr.entries()){
    if(word !== ''){
    if(index === 0){
      result = '#' + word[0].toUpperCase() + word.slice(1,word.length);
    }else{
      result += word[0].toUpperCase()  + word.slice(1,word.length);
    }
    }
  }
  if(result.length > 140)
    return false
  
    return result;
}

// 5kyu Moving Zeros to the end
var moveZeros = function (arr) {
  const zeros = [];
  const result = [];
  if(arr.length === 0)
    return [];
  for(const character of arr){
    if (character === 0){
      zeros.push(character);
    }else{
      result.push(character);
    }
  }
  return [...result, ...zeros];
}

// 6kyu Convert string to camel case
function toCamelCase(str){
  let result = '';
  let previousCharacterWasNotALetter = false;
  let startIndex = 0;

  if(typeof str !== 'string' || str ==='')
    return '';
  
  if(str[0] === str[0].toUpperCase()){
      result += str[0];
      startIndex = 1;
    }
  
  for(let i = startIndex; i < str.length; i++){
      if(str[i] === '_' || str[i] === '-'){
        result += str[i + 1].toUpperCase();
        previousCharacterWasNotALetter = true;
      }else if(previousCharacterWasNotALetter){
        previousCharacterWasNotALetter = false;
      }else{
        result += str[i].toLowerCase();
      }
  }
  return result;
}

// 6kyu Sum of Digits / Digital Root
function digital_root(n) {
  // 1. Check if paramter is a number
    // If not return 
  if(typeof n != 'number')
    return `${n} is not a number!`
  // 2. If number <= 9 return 
    if(n <= 9)
      return n
  // 3. Break number down into digits
  let digits = Array.from(n.toString(), Number);
  let sum = 0;
  let counter = 0;
  // 4. Iterate over each digit adding the sum
    // If the sum <= 9 return
    // Else store result and continue from step 3
  do{
    if(counter !== 1){
  for(let digit of digits){
    sum += digit;
  }
      ++counter;
    }else{
      digits = Array.from(sum.toString(), Number);
      sum = 0;
      for(let digit of digits){
        sum += digit;
      }
    }
    }while(!(sum <= 9));
  return sum;
}

// 6kyu Multiples of 3 or 5
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// 7kyu Find the next perfect square
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}

// 7kyu Square Every Digit
function squareDigits(num) {
  let result = '';
  num = num.toString();
  //may the code be with you
  for (let i = 0; i < num.length; i++) {
    result += Number(num.charAt(i)) ** 2;
  }
  return Number(result);
}

// 7kyu List Filtering
function filter_list(l) {
  if (l.length === 0) return `List must contain atleast one value`;
  let newArr = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) && l[i] >= 0) {
      newArr.push(l[i]);
    }
  }

  return newArr;
}

// 7kyu exes and Ohs
function XO(str) {
  let dictionary = {};
  // Check is paramter passed is a string
  if (typeof str !== 'string') {
    return `${str} is not a string!`;
  } else {
    // Parameter is a string
    // Iterate over each character in string
    for (i = 0; i < str.length; i++) {
      // If the character at the ith position is a 'x' or 'o' continue
      if (
        str.charAt(i).toLowerCase() === 'o' ||
        str.charAt(i).toLowerCase() === 'x'
      ) {
        // If the character is already in the dictionary increase seen count by 1
        if (dictionary.hasOwnProperty(str.charAt(i).toLowerCase())) {
          // Increase times seen by 1
          dictionary[str.charAt(i).toLowerCase()] += 1;
        } else {
          // else charcter hasn't been seen before add to dictionary as new key with value 1
          dictionary[str.charAt(i).toLowerCase()] = 1;
        }
      }
    }
  }
  // If the length of the dictionary is less than or equal to 1
  // there can't be equal 'x' and 'o'
  if (dictionary.length <= 1) {
    return false;
  } else if (dictionary['o'] === dictionary['x']) {
    // If values of 'x' and 'o' are equal return true
    return true;
  } else {
    return false;
  }
}

// 6kyu Duplicate Encoder
function duplicateEncode(word) {
  // Hold results
  let result = '';
  // Create empty dictionary
  let dictionary = {};
  // Take first character of string and add to dictionary as new key with value of 1
  dictionary[word.charAt(0).toLowerCase()] = 1;
  // Iterate over every character in string starting from second character
  for (var i = 1; i < word.length; i++) {
    // If the character already exists in the dictionary as a key increase value count by 1
    if (dictionary.hasOwnProperty(word.charAt(i).toLowerCase())) {
      dictionary[word.charAt(i).toLowerCase()] += 1;
    } else {
      // Else create new key
      dictionary[word.charAt(i).toLowerCase()] = 1;
    }
  }

  // Iterate over every key in dictionary
  for (var i = 0; i < word.length; i++) {
    // If key value is greater than 1 it's a duplicate append ')' to result string
    if (
      dictionary.hasOwnProperty(word.charAt(i).toLowerCase()) &&
      dictionary[word.charAt(i).toLowerCase()] > 1
    ) {
      result += ')';
    } else {
      // Else it's not a duplicate append '(' to result string
      result += '(';
    }
  }
  return result;
}

// 6kyu Who likes it?
function likes(names) {
  // Step 1: check if array is empty
  // if so return 'must be "no one likes this"'
  if (names.length === 0) {
    return 'no one likes this';
  }
  // else if names.length is one return `must be ${names[0]} likes this`
  else if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  // else if names.length is two return `must be ${names[0]} and ${names[1]} like this`
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  // else if names.length is three return `must be ${names[0]}, ${names[1]} and ${names[2]} like this`
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  // else return `must be "${names[0]}, ${names[1]} and 2 others like this"`
  else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
