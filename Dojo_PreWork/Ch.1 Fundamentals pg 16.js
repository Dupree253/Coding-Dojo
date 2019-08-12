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

	

