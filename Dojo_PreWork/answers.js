//////////////////
	//Pg. 16//
/////////////////

//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Luke";
var temp;

temp = myNumber;
myNumber = myName;
myName = temp ;

console.log(myNumber, myName);

//Print integers from -52 to 1066 using a FOR loop.
for(var int = -52; int <= 1066; int++){
	console.log(int);
}

//Create beCheerful(). Within it, console.log
//string "good morning!" Call it 98 times.
function beCheerful(){
	console.log("good morning")
}

	for(var x = 1; x<=98; x++){
		beCheerful();
	}

//Using FOR, print multiples of 3 from -300 to 0.
//Skip -3 and -6.
for (var x = -300; x <= 0; x+=3) {
  if (x === -3) {
    continue;
  } else if (x === -6) {
    continue;
  } else {
    console.log(x);
  }
}

//Print integers from 2000 to 5280, using a WHILE.
var num = 2000;

while(num <= 5280)
{
	console.log(num);
	num++;
}

//If 2 given numbers represent your birth month
//and day in either order, log "How did you
//know?", else log "Just another day...."
var x = 5;
var y = 29;

if ((x == 10 || y == 10) && (x == 29 || y == 29)){
  console.log("How did you know?");
} else {
  console.log("Just another day...");
}

//Write a function that determines whether a given
//year is a leap year. If a year is divisible by four,
//it is a leap year, unless it is divisible by 100.
//However, if it is divisible by 400, then it is.
var year = prompt("Enter a year: ");
var leap;

if (year%4 === 0) {
  if (year%400 === 0) {
    leap = true;
  } else if (year%100 === 0) {
    leap = false;
  } else {
    leap = true;
  }
} else {
  leap = false;
}

if (leap) {
  console.log("It is a leap year!");
} else {
  console.log("It is not a leap year");
}

//Print all integer multiples of 5, from 512 to 4096.
//Afterward, also log how many there were.
var count = 0;

for(var x = 512; x <= 4096; x += 5)
{
	console.log(x);
	count++;
}
console.log("There were",count,"numbers that are multiples of 5!")

//Print multiples of 6 up to 60,000, using a WHILE.
var x = 6;

while (x <= 60000){
    console.log(x);
    x+=6;
}

//Print integers 1 to 100. If divisible by 5, print
//"Coding" instead. If by 10, also print " Dojo".
for(var x = 1; x <= 100; x++)
{
	if(x % 5 === 0)
	{
		console.log("Coding", x);
	}
	if(x % 10 === 0)
	{
		console.log("Dojo", x);
	}
}

//Your function will be given an input parameter
//incoming. Please console.log this value.
var incoming = prompt("Input parameter: ");

console.log(incoming);

//Add odd integers from -300,000 to 300,000, and
//console.log the final sum. Is there a shortcut?
var sum = 0;

for (var x = -300000; x <= 300000; x++) {
  sum += x;
}
console.log(sum);

//Log positive numbers starting at 2016, counting
//down by fours (exclude 0), without a FOR loop.
var x = 2016;

while(var x > 0)
{
	console.log(x);
	x -= 4;
}

//Based on earlier “Countdown by Fours”, given
//lowNum, highNum, mult, print multiples of mult
//from highNum down to lowNum, using a FOR.
//For (2,9,3), print 9 6 3 (on successive lines).
function countdown(lowNum, highNum, mult) {
  for (var x = highNum; x >= lowNum; x -= mult) {
    console.log(x);
  }
}
countdown(2, 9, 3);

//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is
//essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4),
//print the multiples of param1, starting at param2 and extending to param3. One exception: if a
//multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print
//6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
function countdown(param1, param2, param3, param4) {
  var count = param2;
  while (count%param1 != 0) {
    count++;
  }
  while (count <= param3) {
    if (count == param4) {
      count += param1;
      continue;
    } else {
      console.log(count);
      count += param1;
    }
  }
}

countdown(3, 5, 17, 9);

//////////////////
   //Pg. 20//
/////////////////	

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

//////////////////
   //Pg. 22//
/////////////////

//Given an array, write a function that changes all
//positive numbers in the array to “big”. Example:
//makeItBig([-1,3,5,-5]) returns that same
//array, changed to [-1,"big","big",-5]. 
function makeItBig(arr) {
  for (var ind = 0; ind < arr.length; ind++){
    if (arr[ind] > 0) {
      arr[ind] = "big";
    }
  }
  return arr;
}

var ar = [-1, 3, 5, -5]

console.log(makeItBig(ar));

//Create a function that takes array of numbers.
//The function should print the lowest value in the
//array, and return the highest value in the array.
var a = [1, 2, 3, 4, 5];

function doit(arr) {
  var low = arr[0];
  var high = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    }
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}
console.log(doit(a));

//Build a function that takes array of numbers. The
//function should print second-to-last value in the
//array, and return first odd value in the array
var a = [2, 3, 4, 5, 7];

function printReturn(arr) {
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2 != 0) {
      return arr[i];
    }
  }
}

console.log(printReturn(a));

//Given array, create a function to return a new
//array where each value in the original has been
//doubled. Calling double([1,2,3]) should
//return [2,4,6] without changing original.

var a = [1, 2, 3];

function double(arr) {
  var newarr = [];
  for (var x = 0; x < arr.length; x++) {
    newarr.push(arr[x]*2);
  }
  return newarr;
}
console.log(double(a));

//Given array of numbers, create function to
//replace last value with number of positive values.
//Example, countPositives([-1,1,1,1])
//changes array to [-1,1,1,3] and returns it. 
var a = [-1, 1, 1, 1];

function Countpositive(arr) {
  var count = 0;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] > 0) {
      count++;
    }
  }
  arr[arr.length-1] = count;
  return arr;
}

console.log(Countpositive(a));

//Create a function that accepts an array. Every
//time that array has three odd values in a row,
//print "That’s odd!" Every time the array has
//three evens in a row, print "Even more so!"
var a = [2, 4, 1, 1, 1, 8];
var b = [3, 2, 4, 5, 8, 8, 8, 9];

function evensAndOdds(arr) {
  var ecount = 0;
  var ocount = 0;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x]%2 == 0) {
      ocount = 0;
      ecount++;
      if (ecount == 3) {
        ecount = 0;
        console.log("Even more so!");
      }
    } else {
      ecount = 0;
      ocount++;
      if (ocount == 3) {
        ocount = 0;
        console.log("That's odd!");
      }
    }
  }
  return 0;
}
console.log(evensAndOdds(a));
console.log(evensAndOdds(b));

//Given arr, add 1 to odd elements ([1], [3],
//etc.), console.log all values and return arr. 
function increment(arr) {
  for (var x = 0; x < arr.length; x++) {
    if (x%2 != 0) {
      arr[x] += 1;
    }
    console.log(arr[x]);
  }
  return arr;
}

var a = [1, 2, 3, 8 ,4, 5, 6];
console.log(increment(a));

//You are passed an array containing strings.
//Working within that same array, replace each
//string with a number – the length of the string at
//previous array index – and return the array.
function prevLength (arr) {
  for (var ind = arr.length-1; ind > 0; ind--) {
    arr[ind] = arr[ind-1].length;
  }
  arr[0] = 0;
  return arr;
}

var a = ["Seattle", "is", "the", "best"];

console.log(prevLength(a));

//Build function that accepts array. Return a new
//array with all values except first, adding 7 to
//each. Do not alter the original array.
function add7 (arr) {
  var newarr = [];
  for (ind = 1; ind < arr.length; ind++) {
    newarr.push(arr[ind]+7);
  }
  return newarr;
}

var a = [1, 2, 3, 4];
console.log(add7(a));

//Given array, write a function to reverse values,
//in-place. Example: reverse([3,1,6,4,2])
//returns same array, containing [2,4,6,1,3]. 
function reverse(arr) {
  for (var i = 0; i < arr.length/2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length-1-i] = temp;
  }
  return arr;
}

var a = [3, 1, 6, 4, 2];
console.log(reverse(a));

//Given an array, create and return a new one
//containing all the values of the provided array,
//made negative (not simply multiplied by -1).
//Given [1,-3,5], return [-1,-3,-5]. 
function neg(arr) {
  var newarr = [];
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] > 0) {
      newarr.push(arr[x] * -1);
    } else {
      newarr.push(arr[x]);
    }
  }
  return newarr;
}

var a = [1, -3, 5];
console.log(neg(a));

//Create a function that accepts an array, and
//prints "yummy" each time one of the values is
//equal to "food". If no array elements are
//"food", then print "I'm hungry" once. 
function hunger(arr) {
  var hungry = true;
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] == "food") {
      console.log("yummy");
      hungry = false;
    }
  }
  if (hungry == true)  {
    console.log("I'm hungry");
  }
  return 0;
}

var a = [1, 2, 3, 4];
var b = ["food", "food"];
console.log(hunger(me));
console.log(hunger(you));

//Given array, swap first and last, third and third-to last, etc. 
//Input[true,42,"Ada",2,"pizza"]
//becomes ["pizza",42,"Ada",2,true].
//Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swap(arr) {
  for (var x = 0; x < arr.length/2; x+=2) {
    var temp = arr[x];
    arr[x] = arr[arr.length-1-x];
    arr[arr.length-1-x] = temp;
  }
  return arr;
}

var a = [true, 42, "Ada", 2, "pizza"];
var b = [1, 2, 3, 4, 5, 6];
console.log(swap(a));
console.log(swap(b));

//Given array arr and number num, multiply each
//arr value by num, and return the changed arr.
function scale(arr, num) {
  for (var x = 0; x < arr.length; x++) {
    arr[x] *= num;
  }
  return arr;
}

var a = [1, 2, 3, 4];
var b = 10;
console.log(scale(a, b));