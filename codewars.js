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
