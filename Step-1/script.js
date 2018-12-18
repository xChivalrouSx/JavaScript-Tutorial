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