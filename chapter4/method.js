// function literal
var add = function (a,b) {
    return a + b;
};

// Create myObject. It has a value and an increment method.
// The increment method takes ab optional parameter.
// If the argument is not a number, then 1 is used as default.

// Method invocation
// this refers to the object this method is aproperty of.
var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

// Function invocation
// this refers to global object.
// can patch this by setting this to that, now refers to 
// object function is a method of.
// Augment myObject with a double method
var sum = add(3,4);

myObject.double = function () {
    var that = this;

    var helper = function () {
        that.value = add(that.value, that.value);
    };

    helper(); // invoke helper as a function
};

// Invoke double as a method
myObject.double();
console.log(myObject.value);

// Constructor invocation
// this refers to the new object created by calling the contructor.

// Create a constructor funtion called Quo.
// It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status());

// Apply invocation.
// Every function has an apply method. apply takes
// 2 arguments, the first is what this refers to, and the second is an array
// of parameters.

// Make an array of 2 numbers and add them.
var array = [3,4];
var sum = add.apply(null, array); // sum ism 7

// Make an object with a status member.
var statusObject = {
    status: 'A=OK'
};

// statusObject does not inherit from Quo.protoype,
// but we can invioke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);
