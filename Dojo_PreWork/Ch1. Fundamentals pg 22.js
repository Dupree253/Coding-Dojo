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






