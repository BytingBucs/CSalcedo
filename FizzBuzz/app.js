for (var i=1; i<=100; i++)(function(i){
	//used for loop
  var output = ""

  if (i % 3 == 0)
   output += "Fizz"
	//used if statement
	//% remainder operator divides number by 3

  if (i % 5 == 0)
   output += "Buzz"
	//used if statement
	//% remainder operator divides number by 5

  console.log(output || i)
})(i)