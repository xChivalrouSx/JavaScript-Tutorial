//------------------------------------
// Constructor Function --------------
//------------------------------------

var john = {
    name: 'John',
    yearOfBird: 1989,
    job: 'teacher'
};
console.log(john);

var Person = function(name, lastName, yearOfBird, job) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBird = yearOfBird;
    this.job = job;
    this.calculateAge = function(now) {
        return now - yearOfBird;
    }
};
Person.prototype.concatFullName = function() {
    return this.name + ' ' + this.lastName;
};

var mike = new Person('Mike', 'Miky', 1995, 'Engineer');
console.log(mike);
console.log(mike.concatFullName());
console.log(mike.calculateAge(2018));

//------------------------------------
//------------------------------------
//------------------------------------

console.log(mike.hasOwnProperty('calculateAge'));
console.log(mike.hasOwnProperty('concatFullName'));
console.log(mike instanceof Person);

var array = [1, 2, 3];
console.log(array);
console.info(array);

//------------------------------------
// Object.create ---------------------
//------------------------------------

var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBird);
    }
}
var newJohn = Object.create(personProto);
newJohn.name = 'John';
newJohn.yearOfBird = 1900;

var newJane = Object.create(personProto, 
{
    name: {value: 'Jane'},
    yearOfBird: {value: 1965}
});

//------------------------------------
// Primitives VS Objects -------------
//------------------------------------

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var o1 = {
    name: 'name-1',
    age: 18
};
var o2 = o1;
o1.age = 25;
console.log(o1);
console.log(o2);

var _age = 28;
var obj = {
    name: 'name-1',
    city: 'city-1'
};

function change(a, b) {
    a = 38;
    b.city = 'city-2';
}
change(_age, obj);
console.log(_age);
console.log(obj);

//------------------------------------
// Pass Functions as Arg -------------
//------------------------------------

var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};
function calcAge(el) {
    return 2018 - el;
};
function isFullAge(el) {
    return el >= 18;
};
function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.677 * el ));
    }
    else {
        return -1;
    }
};

var ages = arrayCalc(years,calcAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//------------------------------------
// Functions Rturning Functions ------
//------------------------------------

function interviewQuestion(job) {
    if(job === 'engineer') {
        return function(name) {
            console.log(name + ' is an engineer...');
        };
    }
    else {
        return function(name) {
            console.log('How are you ' + name + '?');
        };
    }
};

var engineerQ = interviewQuestion('engineer');
var otherQ = interviewQuestion('something');

engineerQ('--name--');
otherQ('----name----');

interviewQuestion('engineer')('***name***');

//------------------------------------
// IIFE (Invoke Function) ------------
//------------------------------------

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//------------------------------------
// Closures --------------------------
//------------------------------------

function retirement(retirementAge) {
    return function(yearOfBird) {
        var a = ' years left.';
        var age = 2018 -yearOfBird;
        console.log((retirementAge - age) + a);
    }
}

var retirmentUS = retirement(66);
retirmentUS(1995);

retirement(65)(1995);

function question(job) {
    return function(name) {
        if(job === 'engineer') {
            console.log(name + ' please explain the engineering.');
        }
        else {
            console.log('How are you ' + name + '?');
        }
    }
};

question('engineer')('newName');

//------------------------------------
// Bind, Call, Apply -----------------
//------------------------------------

var j = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay 
                + '. I am ' + this.name + '.');
        }
        else if(style === 'friendly') {
            console.log('Hey! I am ' + this.name 
                + '. Have a nice ' + timeOfDay + '.');
        }
    }
};
j.presentation('formal', 'morning');
j.presentation('friendly', 'night');

var e = {
    name: 'Emily',
    age: 35,
    job: 'engineer'
};
j.presentation.call(e, 'friendly', 'evening')

//j.presentation.apply(e, ['friendly', 'night']);

var jFriendly = j.presentation.bind(j, 'friendly');
var eFormal = j.presentation.bind(e, 'formal');
jFriendly('morning');
eFormal('night');

//------------------------------------
// Challange -------------------------
//------------------------------------

var score = 0;

var Question = function(question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
}

Question.prototype.displayQuestion = function() {
    console.log(q.question);

    for(var i=0; i<q.answers.length; i++) {
        console.log(i + ' - ' + q.answers[i]);
    }
}

var q0 = new Question('Is JS a programming language?', ['Yes', 'No'], 0);
var q1 = new Question('Are you happy?', ['Yes', 'No', 'I do not know'], 0);

var arrayQuestions = [q0, q1];

function getQuestion(questions) {
    var rand = Math.round(Math.random() * (questions.length - 1));
    return questions[rand];
};

while(true) {
    var q = getQuestion(arrayQuestions);

    q.displayQuestion();

    var ans = parseInt(prompt(q.question));
    ans == q.answer ? score += 1 : score;
    console.log('Score : ' + score);
    console.log('===================================');

    if(ans === 'exit') {
        break;
    };
}


