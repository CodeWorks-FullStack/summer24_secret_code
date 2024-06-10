// SECTION primitives
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

if (numberOfCats === '0') {
  console.log('numberofcats is equivalent');
}

console.groupEnd()

// !SECTION

// SECTION application code
// NOTE global scoped variables are accessible to all other pieces of code and can be changed at will

const secretCode = '💀💀😺💀🙂'

const superSecretCode = '🍉🐃💀💀😺'

let userCode = ''

// REVIEW all different ways to declare functions
// const addSmiley = function(){}
// const addSmiley = () => { }

// NOTE this a definition for the function, the HTML can call this function by invoking it, example: addSmiley()
function addSmiley() {
  userCode += '🙂'
  console.log('you clicked on the smiley', userCode);

  updateUserCodeElement()
}

function addKitty() {
  userCode += '😺'
  console.log('you clicked on the kitty', userCode)

  updateUserCodeElement()
}

function addSkull() {
  userCode += '💀'
  console.log('you clicked on the skull', userCode)

  updateUserCodeElement()
}

// NOTE addEmoji has a parameter named emoji that is assigned when the function is called
// addEmoji('🐃') the parameter's value would be the yak emoji
// addEmoji('🍉') the parameter's value would be the watermelon emoji
// addEmoji() the parameter's value would be undefined
function addEmoji(emoji) {
  console.log('This is the emoji', emoji);
  userCode += emoji
  updateUserCodeElement()
}

function checkCode() {
  if (userCode == secretCode) {
    console.log('YOU GOT IT RIGHT BUDDY')
    revealSecretPicture()
  }
  else if (userCode == superSecretCode) {
    revealSuperSecretPicture()
  }
  else {
    console.log("YOU GOT IT WRONG, NOT SMART GUY")
    // Closes browser tab
    window.alert('YOU ARE SO DUMB')
    // Closes browser tab
    window.close()
  }
  userCode = ''
  updateUserCodeElement()
}

function updateUserCodeElement() {
  // grabs a reference to the HTML element using the supplied id
  const userCodeElement = document.getElementById('userCodeSpan')
  console.log('user code element', userCodeElement);
  // NOTE changes the innterText of the element. If any text (or HTML) is present within the element, it will be overwritten
  userCodeElement.innerText = userCode
}

function revealSecretPicture() {
  const resultBoxElement = document.getElementById('resultBox')
  console.log('here is the result box element', resultBoxElement);

  // if using innerHTML, the string will be read as if it is HTML
  resultBoxElement.innerHTML = '<img class="img-fluid" src="https://images.unsplash.com/photo-1611145949721-e5158cddf59f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Best cat ever">'
}

function revealSuperSecretPicture() {
  const resultBoxElement = document.getElementById('resultBox')
  console.log('here is the rsult box element', resultBoxElement);

  // if using innerHTML, the string will be read as if it is HTML
  resultBoxElement.innerHTML = '<img class="img-fluid" src="https://images.unsplash.com/photo-1599137258505-8871bd07cbbb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Best cat ever">'
}

// !SECTION