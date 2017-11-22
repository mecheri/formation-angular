var Dog = function() {}; // declaring constructor
Dog.prototype; // prints "{}" : prototype exists and is empty

Dog.prototype.bark = function() { // defining a method on the Dog prototype
    console.log("wouf wouf");
};

var bobby = new Dog();
bobby.bark(); // using the prototype declaration - prints "wouf wouf" to the console

var felix = new Dog();
(bobby.bark == felix.bark); // instances share same reference - returns true;
bobby.bark = Dog.prototype.bark // which is the prototype property - returns true;