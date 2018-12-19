//------------------------------------------
// Hoisting --------------------------------
//------------------------------------------
calculateAge(1995);

function calculateAge(year) {
    console.log(2018 - year);
}

calculateAge(1994);
 
//------------------------------------------

// retirement(1990); // (X)

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1995);

//------------------------------------------

console.log(age);
var age = 23
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


//------------------------------------------
// Scoping ---------------------------------
//------------------------------------------

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//------------------------------------------

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); // (X)
}
*/

//------------------------------------------
// The this keyword ------------------------
//------------------------------------------

console.log(this);

function firstFunction() {
    console.log(this);
}
firstFunction();

var obj = {
    naem: 'name-1',
    birthYear: 1995,
    calculateAge: function(now) {
        console.log(this);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        
        return now - this.birthYear;
    }
};
var _age = obj.calculateAge(2018);
console.log(age);

var _obj = {
    name: 'name-1',
    birthYear: 1990
};
_obj.calculateAge = obj.calculateAge;
age = _obj.calculateAge(2018);
console.log(age);
