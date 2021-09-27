console.log('It\'s working!')

//You can't change the value of a const variable
//If you uncomment the variable birthDay at line 8 you will see the difference
//You can't reassign a const variabile, object or array but you can change the array
//or a property of an object 
const birthDate = '18.01.1997'

{
    const birthDate = '19.04.2000'
}

console.log(birthDate)

try {
    //const birthDate = '18.01.1997'
    birthDate = '19.04.2000'
    console.log(birthDate)
}catch(err) {
    console.log('You can\'t change the value of a const variable')
}

const names = ['Adrian', 'Costin', 'Popescu']

console.log('Before changing the array names: ' + names)
names[0] = 'Tony Montana'
console.log('After changing the array names: ' + names)

tv = {name:'Sony', model:'Bavaria', color:'Gray'}

console.log('Before changing the object property color:' + JSON.stringify(tv))
tv.color = 'Black'
tv.size = 123
console.log('After changing the object property color: ' + JSON.stringify(tv))

//Variable const can be modified inside block function

const f = 'aasdasdasd'
console.log(f)

{
    const f = 'bdafasdfasdfa'
    console.log(f)
}

{
    const f = 'sDFsdfsadfasdfc'
    console.log(f)
}

// With let you can't have the same variable just like var

let a = 4

//Error
//let a = 5

var t1 = 20
var t1 = 30
console.log(t1)

//Arrow funtions



//let vs var vs const

//console.log(i)
for(let i=0; i<=10; i++)
{
    a+=i
    console.log(i)
}

const yearDate = '1997'

//Error
//yearDate = '1998'

console.log(a)
//console.log(i)
console.log(j)

for(var j=0; j<=4; j++)
{
    console.log(j)
}

console.log(j)
//console.log(i)


//Spread Operator
let fruits1 = ['apple', 'banana', 'blackberry', 'blackcurrant', 'blueberry']
let fruits2 = ['apricot', 'avocado', 'grape', 'lime', 'mango']
let fruits = [...fruits1, ...fruits2]

console.log(fruits)

let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12]
let odds = nums.filter((o) => o % 2 !== 0).sort((c, d) => d - c) 
let even = nums.filter((e) => e % 2 === 0).sort((c, d) => c - d)
let odevn = [...even, ...odds]
console.log(odevn)

//Objects

//traverse object

const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15,

    c: 20,

    python: 54

};

const keys = Object.keys(courses);

console.log(keys)

keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});


Object.values(courses).forEach(val => console.log(val));

//deep copy

const animal = { 'Dog': 1, 'Cat': 2}
const animal1 = { 'Dog': 2, 'Cat': 3}
const animal2 = { 'Dog': 3, 'Cat': 4}

const cloneCat = {...animal}
const cloneCat1 = Object.assign({},animal1)
const cloneCat2 = JSON.parse(JSON.stringify(animal2))

console.log(cloneCat)
console.log(cloneCat1)
console.log(cloneCat2)

//Arrays

let numbers = [1,2,3,4,5,6,7,8,9,10]
let findOddNumbers = numbers.entries((l) => l % 2 == 0)
console.log([...findOddNumbers])

let findOddNumbers1 = numbers.find((l) => l % 2 == 0)
console.log(findOddNumbers1)

let findOddNumbers2 = numbers.keys((l) => l % 2 == 0)
console.log(...findOddNumbers2)

//Promises

const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}) 

function promiseDivBy5(number) {
    return new Promise((resolve, reject) => {
        if(number % 5 === 0) {
            resolve("The number is divisible by 5!")
        }
        else {
            reject("The number is not divisible by 5!")
        }
    })
}

userInput.question('Enter a number divisible by 5:\n', number => {
    promiseDivBy5(number).then((msg) => {
        console.log(msg)
    }).catch((msg) => {
        console.log(msg)
    })
    userInput.close()
})

//Async, Await

const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')

//Closures

function doAddition(termn1, termn2) {
    function add() {
        console.log(termn1+termn2)
        return termn1 + termn2
    }

    return add()

}

function doSubstract(termn1, termn2) {
    function sub() {
        console.log(termn1-termn2)
        return termn1 - termn2
    }

    return sub()

}

function doMultiply(termn1, termn2) {
    function mul() {
        console.log(termn1*termn2)
        return termn1 * termn2
    }

    return mul()

}

function doDivision(termn1, termn2) {
    function divide() {
        console.log(termn1/termn2)
        return termn1 / termn2
    }

    return divide()

}

let tr1 = doAddition(3,3)
let tr2 = doSubstract(6,4)
let tr3 = doMultiply(8,6)
let tr4 = doDivision(9,3)