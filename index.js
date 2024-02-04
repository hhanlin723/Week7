
//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//c. Use a loop to iterate through the array and calculate the average age.
console.log("Question 1")
//a. create an array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//b. subtract first element from last element
let difference = ages[ages.length-1] - ages[0];

//confirmed above works
console.log(difference)

//added am element to the aarray
ages.push(59)

//confirmed element was added to array
console.log(ages);

//new formula
let newResult= ages[ages.length-1] - ages[0];

//confirmed formula still works
console.log(newResult);

//c. loop to get average
let sum = 0

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let average = sum / ages.length;

console.log(average);

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//a. Use a loop to iterate through the array and calculate the average number of letters per name.
//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log("Question 2")
//create array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

let lengthOfNames = 0

//a. create loop to determine average name length in array
for (let i = 0; i < names.length; i++) {
    lengthOfNames += names[i].length;
}
let averageLetters = lengthOfNames / names.length;
//average letters in name
console.log(averageLetters)

let concatenatedNames = ''

//b.create a loop to concatenate the names with  space
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}

console.log(concatenatedNames)

// 3. How do you access the last element of any array?
//you use arrayName.length - 1
console.log('Question 3')

let myArray = [1, 2, 3, 4, 5, 6, 7]

console.log(myArray[myArray.length-1])


//How do you access the first element of any array?
console.log('Question 4')

//call the '0' spot because 0 is the first spot in an array
console.log(myArray[0])


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

console.log('Question 5')

let nameLengths = [];

for (let i = 0; i < names.Length; i++) {
   
    nameLengths.push(names[i].length);
}

console.log(nameLengths);


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log('Question 6')

let total = 0

for (let i = 0; i < nameLengths.length; i++) {
    total += nameLengths[i];

}
console.log(total)

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

console.log('Question 7')

const job = (word, n) => {
    if(typeof n === 'number' && n > 0 && Number.isInteger(n)) {

    return Array(n + 1).join(word);

} else {
    return "error";
}
}

console.log(job('hi', 6));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

console.log('Question 8')

const fullName = (firstName, lastName) => (firstName + ' ' + lastName)

console.log(fullName('Bailey', 'Brown'))

//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

console.log('Question 9')

function isSumGreaterThan100(numbers) {
    // Using the reduce function to sum up all elements in the array
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Checking if the sum is greater than 100
    return sum > 100;
  }

  const numbersArray = [30, 40, 35]; // This array has a sum of 105
  const work = isSumGreaterThan100(numbersArray);
  console.log(work);

//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('Question 10')

//do the math to get an average
function channelAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
}
//array
let channels = [45, 55, 66, ,78, 22]

const channelAve = channelAverage(channels);
console.log(average);

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log('Question 11')

function isAverageGreaterThan(arr1, arr2) {
    // Function to calculate the average of an array
    const calculateAverage = (array) => {
      if (array.length === 0) {
        return 0; // To avoid division by zero, return 0 if the array is empty
      }
      const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return sum / array.length;
    };
  
    // Calculating averages of both arrays
    const average1 = calculateAverage(arr1);
    const average2 = calculateAverage(arr2);
  
    // Comparing the averages and returning the result
    return average1 > average2;
  }
  
  // Example usage:
  const array1 = [10, 20, 30];
  const array2 = [5, 15, 25];
  const result = isAverageGreaterThan(array1, array2);
  console.log("Average of array1 is greater than array2:", result);


  //12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

  console.log('Question 12')

// function to determine if isHotoutside is ture and moneyinpocket is over 10.50  
  let willBuyADrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;
  
  const hotWeather = false;
  const moneyInPocket = 15.00;
  const icyBeverage = willBuyADrink(hotWeather, moneyInPocket);

  console.log(icyBeverage);

  //13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
  console.log('Question 13')

  //Find the maximum element in an arry

  function findMaxElement(array) {
    if (array.length === 0) {
      return undefined;
    }
  let maxElement = array[0];

  for (let i  = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i]
        
    } 
}
    return maxElement;
  }
  
  const numbers = [12, 5, 27, 8, 15];
  const maxNumber = findMaxElement(numbers);
  console.log("The maximum element is:", maxNumber);