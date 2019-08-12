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
var year = 2019;

function leapYear(){
	if(year /= 4){
		console.log("You are in a leap year!")
	}
}








