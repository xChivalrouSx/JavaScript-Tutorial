console.log('Hello World from script file!...');

var firstName = 'Test-Name';
console.log(firstName);

//--------------------------------------------------
// Data Types --------------------------------------
//--------------------------------------------------
//  Undefined   : Does not have a value yet 
//  Null        : Not-exist

var lastName = 'Last-Name';
var age = 25;
var fullAge = true;
console.log(firstName + ' ' + lastName + ' - ' + age);
console.log(fullAge);

var job, isMarried;
console.log(job);

isMarried = false;
job = 'Teacher';
console.log(job);

//--------------------------------------------------
// Alert and Prompt -------------------------------- 
//--------------------------------------------------
//alert(isMarried);
//var something = prompt('Enter something...');
//console.log(something);

//--------------------------------------------------
// Math Operators ----------------------------------
//--------------------------------------------------
var sum = age + 5;
var isRight = age > 50;
console.log(sum + " - " + isRight);

var x = y = 4 + 5 * 2;
console.log(x, y); 
x *= 2;

//--------------------------------------------------
// typeof ------------------------------------------
//--------------------------------------------------
console.log(typeof isRight);
console.log(typeof sum);

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
var now = 2018;
var yearPerson = 1989;
var _fullAge = 18;

var isFullAge = now - yearPerson >= fullAge;
console.log(isFullAge);

//--------------------------------------------------
// Challange-1 -------------------------------------
//--------------------------------------------------

var markHeigh, markMass, johnHeigh, johnMass;

markHeigh = 180;
markMass = 70;
johnHeigh = 170;
johnMass = 60;

var markBMI, johnBMI;

markBMI = markMass * (markHeigh * markHeigh);
johnBMI = johnMass * (johnHeigh * johnHeigh);

var isMarkHigher = markBMI > johnBMI;
console.log('isMarkHigher : ' + isMarkHigher);

//--------------------------------------------------
// if / else ---------------------------------------
//--------------------------------------------------
var isSingle;
var status = 'single'

if(status === 'single') {
    isSingle = true;
}
else {
    isSingle = false;
}
console.log('isSingle : ' + isSingle);

//--------------------------------------------------
// Ternary and switch ------------------------------
//--------------------------------------------------
age = 17;

age >= 18 ? console.log('can drive.')
: console.log('can not drive.');

var canDrive = age >= 18 ? true : false;
console.log(canDrive);

//--------------------------------------------------

var value = 5;
switch(value) {
    case 1:
    case 5:
        console.log('first one');
        break;
    case 2:
        console.log('second one');
        break;
    case 3:
        console.log('third one');
        break;
    default:
        console.log('default');
        break;
}

//--------------------------------------------------
// Truthy and Falsy --------------------------------
//--------------------------------------------------
// falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

var boolValue;
if(boolValue) {
    console.log('defined.');
}
else {
    console.log('Not defined.');
}

//--------------------------------------------------
// Equality ----------------------------------------
//--------------------------------------------------
var number = 15;
if(number == '15') {
    console.log('== operator');
}
if(number === '15') {
    console.log('=== operator');
}

//--------------------------------------------------
// Challange-2 -------------------------------------
//--------------------------------------------------
var johnTeamAv = (89 + 120 + 103) / 3;
var mikeTeamAv = (116 + 94 + 123) / 3;

if(johnTeamAv > mikeTeamAv) {
    console.log('John win...');
}
else if(johnTeamAv < mikeTeamAv){
    console.log('Mike win...');
}
else {
    console.log('draw');
}

//--------------------------------------------------
// functions ---------------------------------------
//--------------------------------------------------
function calculateAge(birth, now) {
    return now - birth;
}
var _age = calculateAge(1995, 2018);
console.log(_age);

var cancatNameSurname = function(name, surname) {
    return name + ' ' + surname;
}
var name = cancatNameSurname('Name', 'Surname');
console.log(name);

//--------------------------------------------------
// arrays ------------------------------------------
//--------------------------------------------------
var names = ['name-1', 'name-2', 'name-3']
console.log(names);
console.log(names[0]);

var numbers = new Array(1, 2, 3);
console.log(numbers, numbers[1]);
console.log(numbers.length);
numbers[1] = 5;
numbers[6] = 10;
console.log(numbers);

var array = ['string', 1800, true];
array.push('newValue');
array.unshift('whereIs');
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
console.log(array.indexOf(1800));
console.log(array.indexOf(5));

//--------------------------------------------------
// Challange-3 -------------------------------------
//--------------------------------------------------
function calculator(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2;
    }
    else if(bill >= 50 && bill < 200) {
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = 
    [
        calculator(bills[0]),
        calculator(bills[1]),
        calculator(bills[2])
    ];
var finalValue = 
    [
        bills[0] + tips[0],
        bills[1] + tips[1],
        bills[2] + tips[2]
    ]
console.log(bills);
console.log(tips);
console.log(finalValue);

//--------------------------------------------------
// Objects -----------------------------------------
//--------------------------------------------------

var obj = {
    firstName: 'name-1',
    lastName: 'lastName-1',
    birthYear: 1995,
    family: ['f1', 'f2', 'f3'],
    calcAge: function(now) {
        this.age = now - this.birthYear;
    }
};
obj.newValue = 'new';
console.log(obj);
console.log(obj.birthYear + ' ' + obj['firstName']);
console.log(obj.calcAge(2018));
console.log(obj);

var _obj = new Object();
_obj.name = 'name-2';
_obj.age = 20;
console.log(_obj);

//--------------------------------------------------
// Challange-4 -------------------------------------
//--------------------------------------------------
var objJohn = {
    name: 'John',
    height: 180,
    mass: 80,
    BMI: function() {
        return this.mass / ( this.height * this.height);
    }
}
var objMark = {
    name: 'Mark',
    height: 175,
    mass: 70,
    BMI: function() {
        return this.mass / ( this.height * this.height);
    }
}
console.log(objJohn);
console.log(objMark);

if(objJohn.BMI() > objMark.BMI()) {
    console.log('John BMI');
}
else if(objJohn.BMI() < objMark.BMI()) {
    console.log('Mark BMI');
}
else {
    console.log('Same BMI...');
}

//--------------------------------------------------
// Loops -------------------------------------------
//--------------------------------------------------
for(var i=0; i<10 ; i++) {
    console.log(i);
}
console.log('-------------------------');
var i = 0;
while(true) {
    i++;
    if(i === 5) {
        continue;
    }
    else if(i === 10) {
        break;
    }
    console.log(i);
}

//--------------------------------------------------
// Challange-4 -------------------------------------
//--------------------------------------------------
var j = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        var tips = [];
        for(var i=0 ;i<this.bills.length ; i++) {
            var percentage = 0;
            var currentBill = this.bills[i]; 
            if(currentBill < 50) {
                percentage = .2;
            }
            else if(currentBill >= 50 && currentBill < 200) {
                percentage = .15;
            }
            else {
                percentage = .1;
            }
            tips[i] = currentBill * percentage;
        }
        return tips;
    },
    calcTotal: function() {
        var total = [];
        var tips = this.calcTips();
        for(var i=0 ; i < this.bills.length ; i++) {
            total[i] = this.bills[i] + tips[i];
        }
        return total;
    }
};
console.log(j.calcTips());
console.log(j.calcTotal());

var m = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        var tips = [];
        for(var i=0 ;i<this.bills.length ; i++) {
            var percentage = 0;
            var currentBill = this.bills[i]; 
            if(currentBill < 100) {
                percentage = .2;
            }
            else if(currentBill >= 100 && currentBill < 300) {
                percentage = .1;
            }
            else {
                percentage = .25;
            }
            tips[i] = currentBill * percentage;
        }
        return tips;
    },
    calcTotal: function() {
        var total = [];
        var tips = this.calcTips();
        for(var i=0 ; i < this.bills.length ; i++) {
            total[i] = this.bills[i] + tips[i];
        }
        return total;
    }
};
console.log(m.calcTips());
console.log(m.calcTotal());

function calcAverage(tips) {
    var sum = 0;
    for(var i=0 ; i<tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

var mAverage = calcAverage(m.calcTips());
var jAverage = calcAverage(j.calcTips());
console.log('m: ' + mAverage + ' - ' + 'j: ' + jAverage);
if(mAverage > jAverage) {
    console.log('Mark...');
}
else if(mAverage < jAverage) {
    console.log('John...');
}
else {
    console.log('Same...');
}