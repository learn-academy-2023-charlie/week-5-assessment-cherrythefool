// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("leetEncoder", () => {
    it("encodes a message into leet-speak style text", () => {
        expect(leetEncoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(leetEncoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(leetEncoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// good fail:     ReferenceError: leetEncoder is not defined

// b) Create the function that makes the test pass.

// in - string including letters
// out - string where letters aA eE iI oO from original string are converted to 4, 3, 1, 0
// process - write a functino which takes in a string of numbers, iterate through the string and where a vowel is found replace it with its respective vowel, return the string with the replaced vowels. Possible tools: .map, regex, for loop, conditionals, string method

// this function called leetEncoder takes in a string
const leetEncoder = (string) => {
    // the string is split into an array of individual letters so it can iterate through one character at a time
    return string.split('').map((char) => {
        // when the letter is a vowel, the associated leet speak style number is returned instead
        if (char === 'a' || char === 'A'){
            return '4'}
        else if (char == 'e' || char == 'E'){
            return '3'}
        else if (char == 'i' || char == 'I'){
            return '1'}
        else if (char == 'o' || char == 'O'){
            return '0'}
        else
        //if the character in the current iteration is not a vowel, the character is returned unchanged
            return char
    // after adjusting into leet speak the array of letters is rejoined into a string 
    }).join('')
}
// P4$$:  leetEncoder ✓ encodes a message into leet-speak style text (3 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsContainingLetter", () => {
    it("finds words from input array which include input letter and return them in an array", () => {
        expect(wordsContainingLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordsContainingLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// good fail:     ReferenceError: wordsContaining is not defined

// b) Create the function that makes the test pass.

// in - an array of words and a letter
// out - array of only words from the original array which contain the input letter
// process - create a function which takes in an array and a letter, iterate through the array determining which words contain the letter, push those words into a new array, return new array. Possible tools - filter, for loop, conditionals, string method

// this function called wordsContaining letter takes in an array and a letter
const wordsContainingLetter = (array, letter) => {
    //it filters through that array by word
    return array.filter((word) => {
        //it accounts for casing and looks for whether the word includes the input letter
        if (word.includes(letter.toLowerCase()) || word.includes(letter.toUpperCase())){
            // it returns a boolean because .filter() keeps iterations which result in true
            return true
        }
        // else case ensures that false cases are discarded
        else 
            return false
    })
}
// Pass:   wordsContainingLetter ✓ finds words from input array which include input letter and return them in an array (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// a) Create a test with expect statements using the variable provided.

describe("fullHouseBooleanDeterminator", () => {
    it("determines whether or not an array is a full house (a pair and three of a kind)", () => {
        expect(fullHouseBooleanDeterminator(hand1)).toEqual(true)
        expect(fullHouseBooleanDeterminator(hand2)).toEqual(false)
        expect(fullHouseBooleanDeterminator(hand3)).toEqual(false)
        expect(fullHouseBooleanDeterminator(hand4)).toEqual(true)
    })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// good fail:     ReferenceError: fullHouseBooleanDeterminator is not defined

// b) Create the function that makes the test pass.

// my brain was so fried on this and I walked away a couple of times. I initially tried to use an object to do this, which should be doable but also was needlessly complicated things so I simplified into an array and used the index for the card and incremented the value at the location instead

// in - array of 5 numbers
// out - Boolean
// process - iterate through an array, determine if the array contains exactly one pair and one three-of-a-kind, output true or false accordingly. Possible tools - for loop, conditional, counter (plus equals) for each number value, objects


// this function called fullHouseBooleanDeterminator takes in an array
const fullHouseBooleanDeterminator = (array) => {
    // a new array,  representing 13 cards is created to store amounts of cards
    const cards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // iterate through the input array. For each input array value, increment the associated card number by increasing the value at the relevant  cards index by 1
    array.map(value => cards[value-1] += 1)
    // a nested function called fullHouse acts after the array is mapped into cards, and uses cards as its input
    const fullHouse = (card) => { 
        // if cards array has both a 2 and a 3 return true (ternary)
        return card.includes(2 && 3) ? true : false
    }
    // call on and return the result of fullHouse(cards)
    return fullHouse(cards)    
}

// pass:  fullHouseBooleanDeterminator ✓ determines whether or not an array is a full house (a pair and three of a kind
