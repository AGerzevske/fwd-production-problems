//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

    var x = 5;

    var double = function(num) {
      var x = num * 2;
      return x;
    }

    double(6);
    console.log('The value of x is:', x, 'It should be 5.');


//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):
var x = 5;

console.log((function(num) {
  'use strict';
  var  x = num * 2;
  return x;
}(6)));


console.log('The value of x is:', x, 'It should be 5.');

//  3. Correct this function so that there is no i variable in
//  the global scope:
(function arrayEach(array, func) {
  'use strict';
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}(['red','green','blue'], console.log));


console.log(typeof (i)); // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

// Because x in this case is givin a value from the argument 4 from addTwo(4).
// In the function declaration the paramater 'x' is the name of the argument that was passed in
// Since the paramater name has presedence over the global namespace it uses that x=4
// The origional x stays the same because it was not altered in the function
function addTwo(x) {
  x = x + 2;
  return x;
}

console.log('should be 6',addTwo(4)); // 6
console.log('should be 5',x); // should be 5 if you corrected the double() function above
