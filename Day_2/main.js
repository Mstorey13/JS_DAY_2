// Continue control flow discussion from Day_1 

// Switch case
let day = new Date().getDay();

let literal_day = new Date().toString();
console.log(day)
console.log(literal_day)

// Switch case Statement Syntax 
switch(day){
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log('It is Monday!')
        break;
    case 2:
        console.log('Test code... it is Tuesday!')
        break;
    case 3:
        console.log('It is Wednesday my dudes')
        break;
    case 4:
        console.log('Write a feature for a project on Thursday')
        break;
    case 5:
        console.log("It's Friday, friday, gotta get down on Friday")
        break;
    case 6:
        console.log('Climb a mountain on Saturday')
        break; 
    default: 
    console.log('We do not have a case for that')
}

// Creation of Objects in JS
// A simple jS object
let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing data
console.log(person['name']) // Bracket notation
console.log(person.age) // . notation 

// Comples JS object
let person_2 = {
    name: 'Max',
    age: 31,
    prog_language: ['Javascript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Npaerville Yellowjackets']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA rams',
            basketball: 'Milkuwakee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}
console.log(person_2.prog_language[2])
console.log(person_2['prog_language'][2][0])
console.log(person_2.teams[1].soccer[0])

// JS Object Prototype Methods -- Objects Literal 
console.log(Object.keys(person_2))
console.log(Object.values(person_2))

// Sad Path of looping through objects in jS
for(let i = 0; i < person_2.length; i++){
    console.log(person_2[i])
}

// Happy Path  of looping through objects in JS -- looking for keys
for(let i =0; i < Object.keys(person_2).length; i++){
    console.log(Object.keys(person_2)[i])
}

console.log('aaauguguhh')

// List values from person_2 Object that are arrays
for(let i = 0; i < Object.keys(person_2).length; i++){
    if(Array.isArray(Object.values(person_2)[i])){
        console.log(Object.values(person_2)[i])
    }
}

// Create our own Object prototypes  -- using ES5 method syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A Method inside of a JS Prototype 
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model} and has ${wheels} and color is ${color}`);

        return 'Returned value'
    }
}

// Creating an instance of a prototype 
let my_car = new Car('Honda', 'CR-V', 2019)

// Call the prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))

// JS Classes
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo(){
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}

let Wilma = new Human('Wilma', 25, 'Female');

// Use printInfo for new class
console.log(Wilma.printInfo())

// JS Inhertiance using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender) 
        this.walking = walking 
    }

    isBabyWalking(){
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby is not walking yet'
        }
    }
}

// Create an instanciated value for baby
let Caleb = new Baby('Caleb', 1, 'Male', true)
console.log(Caleb.printInfo())
console.log(Caleb.isBabyWalking()) 

// JS Closures: A closure if a self-invoking function that only runs once.
// One of the most important parts is that is has private data inside of it.
// Closures are also a variable data type

var outsideNum = 5 // Why should let be used instead of var?

var addNums = function (){
    var insideNum = 6;
    return function () {
        return outsideNum + insideNum;
    };
};
console.dir(addNums)

let newAdd = function(outer_var){
    let innerAdd = function (inner_var){
        return outer_var + inner_var;
    };
    return innerAdd;
};
let addFive = new newAdd(5);
let addSix = new newAdd(6)

console.log(addFive(3))
console.dir(addSix) 

let count_up = ( function () {
    let counter = 0; // private variable 
    console.log('Hit');
    return function () { return counter ++}
}) ()

console.log(count_up())
console.log(count_up())

let addNames = ( function () {
    let names = [];
    console.log('Adding Names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})()

console.log(addNames('Maggie'))
console.log(addNames('Muffin'))
console.dir(addNames)
console.log(addNames('Noelia'))
console.log(addNames('Jonathon'))


// Async jS 
// JS Callbacks 

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name Callback.

    Complex definition: In JS, functions are objects. Because of this,
    functions can take another functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order Functions". Any function,
    that is passed as an argument is called a "Callback function".

    Why this is important: Because of the JS Event Loop, In a nutshell
    JS is an event driven language so this means, that instead of waiting for
    a response before moving on, jS will keep executing while listening for other events. 
*/

// Basic example

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

// What if we delay the execution 

function first_delay(){
    setTimeout(function () {
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2)
}

first_delay()
second_delay()

// Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    callback()
}

//doHomework('JavaScript', function() {
    //console.log('Done with homework')
//})

// JS promise 

const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if(num % 2 == 0){
            resolve(num)
        } else {
            reject(false)
        }
    })
}

// Using the JS promise
isEvenNumber(10)

// Happy path
.then( (result) => {
    console.log(`Even number ${result}`)
})

// Sad reject path
.catch( (error) => {
    console.log(`Odd number ${error}`)
})

// Another example of promises - Using Async/Await 
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

// Function to add to base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase)
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

async_increase_salary(50000, 5000)