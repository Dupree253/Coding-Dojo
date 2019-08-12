//Create a function that accepts a number as an input. Return a new array that counts down by one, from
//the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array? 

var arr = countdown(3);

function countdown(num) {
  var arr = [];
  for (var x = num; x >= 0; x--) {
    arr.push(x);
  }
  return arr;
}

console.log(arr.length);

//Your function will receive an array with two numbers. Print the first value, and return the second.
var arr = [4, 8];

function printReturn(arr){
	console.log(arr[0]);
	return arr[1];
}

printReturn(arr);

//Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
//the array’s first value is not a number, but a string (like "what?") or a boolean (like false). 
var a = [2, 4, 6];
var b = ["what", "is", "it", 8];
var c = [true, true, true, true, false];

function firstlength(arr) {
  return arr[0]+arr.length;
}

console.log(firstlength(a));
console.log(firstlength(b));
console.log(firstlength(c));

//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is. 
var a = [1, 3, 5, 7, 9, 13];
var count = 0;

function greaterSecond(arr) {
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] > arr[1]) {
      console.log(arr[x]);
      count++
    }
  }
  return count;
}

console.log(greaterSecond(a));

//Write a function that accepts any array, and returns a new array with the array values that are greater
//than its 2nd value. Print how many values this is. What will you do if the array is only one element long? 
var a = [2, 4, 6, 7, -1];
var b = [1];

function valuable(arr) {
  if (arr.length <= 1) {
    console.log("ERROR: There's only one element in this array");
    return -1;
  } else {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] > arr[1]) {
        newarr.push(arr[x]);
      }
    }
    return newarr;
  }
}

console.log(valuable(a));
console.log(valuable(a).length);
console.log(valuable(b));

//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
var a = 8;
var b = 10;
var c = 8;

function makearray(num1, num2) {
  if (num1 === num2) {
    console.log("Jinx!");
    return 0;
  } else {
    var arr = [];
    for (var x = 0; x < num1; x++) {
      arr.push(num2);
    }
    return arr;
  }
}

console.log(makearray(a, b));
console.log(makearray(a, c));

//Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
//if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!". 
var arr = [2,4,6,8,10];

function firstValue(arr){
	if(arr[0] > arr.length){
		console.log("Too big!");
	}
	if(arr[0] < arr.length){
		console.log("Too small!");
	} else {
		console.log("Just right!");
	}
}
firstValue(arr);

//Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees)
//that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed
//in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function ftoc(f) {
  var c;
  c = (f-32)*(5/9);
  return c;
}

console.log(ftoc(100));

//Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
//the equivalent temperature expressed in Fahrenheit degrees.
//(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be
//complex, so for this challenge just try a series of Celsius integer values starting at 20
function ctof(c) {
  var f;
  f = ((9/5)*c)+32;
  return f;
}

console.log(ctof(100));
console.log("")
console.log("...OPTIONAL...");
console.log("")
for (var x = 200; x >= -200; x--) {
  if (ctof(x) == x) {
    console.log("Fah and Cel are the same at: " + x);
  } else {
    continue;
  }
}






























