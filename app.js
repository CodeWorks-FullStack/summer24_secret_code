console.groupCollapsed()

console.log('Javascript is working!')

// ANCHOR strings

// var weirdScope = ''

// let declares a variable that can have its value changed
let firstName = 'Jeremy'


// const declares a variable with an unchangeable value
const lastName = 'Fowler'


const catchPhrase = "Jeremy's gonna eat all the food"

const favoriteQuote = `Hey bub - "Wolverine"`

// string concatenation, squishes two strings together
const fullName = firstName + ' ' + lastName

console.log(fullName)

// string interpolation can only be done on strings declared with backticks
console.log(`Hello my name is ${fullName}, my catchphrasse is "${catchPhrase}"`)

firstName = 'Big Jerms'

// ANCHOR numbers

let age = 33

//  does not change value
age + 1
// changes value
age += 1
age = age + 1
// increases value by 1
age++
// decreases value by 1
age--

// multiplication
age *= 3
// division
age /= 2

// PEMDAS
let numberOfCats = 7 * (2 + 3)

console.log(numberOfCats)

// ANCHOR boolean

const jeremyIsHungry = true

let jeremyIsSleepy = true

// jeremyIsSleepy = false

// if (jeremyIsSleepy == true) {
if (jeremyIsSleepy) {
  console.log('Jeremy has not had any coffee')
  console.log('Someone brew up a pot for the boss')
}
numberOfCats = 0

if (numberOfCats > 6 || jeremyIsHungry) {
  console.log('Jeremy needs a second job OR a sandwich')
}

if (numberOfCats > 6 && jeremyIsHungry) {
  console.log('Jeremy needs a second job AND a sandwich')
}

// if numberOfCats is 0, that is falsy, any other number is truthy
if (numberOfCats) {
  console.log('value was truthy');
}
else {
  console.log('value was falsy');
}

// ANCHOR the weird stuff

const nothing = null // no value, falsy

let thingThatWasNotDefined // undefined, never given a definition, falsy

let weirdNumber = 'Jeremy' - 7 // NaN, falsy

console.log(weirdNumber);

console.groupEnd()