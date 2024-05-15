// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)
// errorParagraph.textContent = " Something went wrong, please try again"

// function purchase() {
//     console.log("button clicked")
// }

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el")
// document.getElementById("num2-el")

// // Create 4 fuctions: add(), subtract(), divide(), multiply()
// function add() {
//     let result = num1 + num2
//   sumEl.textContent + "sum: " + num1 + num2
// }
// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "sum: " + num1 + num2
// }

// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "sum: " + num1 + num2
// }
// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "sum: " + num1 + num2
// }
//call the correct function when the user clicks on one of the buttons
//perform the given calculation using num1 and num2
//render the result of the calculation in the paragraph with id="sum-el"

//E.g. if the user clicks on the "plus" button, you should render
//"sum: 10" (since 8+2=10) inside the paragraph with id="sum-el"

// let age = 22
// if (age <= 20) {
//     console.log("You cannot enter the club!")
// }else {
//     console.log("Welcome!")
// }

// let age = 100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one.")
// }

// console.log(4 === 3)
// console.log(5 > 2)
// console.log(12 > 12)
// console.log(3 < 0)
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)



// Arrays are an ordered lists of items
// 0 indexed
// let featuredPosts = ["Check out my Netflix clone", 
// "Here's the code for my project", 
// " I've just relauched my portfolio"]
// my practice array down below
// let myPosts = ["Check out my Cat Painting", 
// "Here is my certificate for completing the project", 
// "I have uploaded it to indeed for others to see"]

//Make the following appear in the console
// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let cards = [7, 4]
// cards.push(6)
// console.log(cards)
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)


// let myPoints = 3
//creat two functions, add3Points() and remove1Points(), and have them add/remove points to/from the myPoints variable



// function  add3Points() {
// myPoints += 3
// }


// function remove1Points() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

//call the function to that the line below logs out 10
// console.log(myPoints)

// try to predict what each of the lines will log out
// console.log("2" + 2) 22
// console.log(11 + 7) 18
// console.log(6 + "5") 65
// console.log("My Points: " + 5 + 9) My Points: 59
// console.log(2 + 2) 4
// console.log("11" + "14") 1114



// ++ is an increment operator
// += It is a shorthand notation for adding a value to a variable and assigning the result back to the variable
// its called the addition assignment operator
// it can also be -=
// subtraction

// Count to ten!
// We need to specify

// WHere should we START counting?
// Where is the FINISHline?
// What's the STEP SIZE we should use?

//        start           finish        step size 
// for (let count = 1; count < 11; count +=1 ) {
//     console.log(count)
// }

// create a for loop that counts from 10 to 100 in steps of 10
// use console.log to log out the numbers.

// for (let i = 10; i < 101; i +=10) {
//     console.log(i)
// }

// let cards = [7, 3, 9]

// create a for loop that logs out all the cards in the Array.
// Use cards.length to specify how long the loop should run

// for (let card = 0; card < cards.length; card += 1)  {
    
//     console.log(cards[i])
// }


// let sentence = ["Hello ", "my ", "name ", "is ", "Mady"]
// let greetingEl = document.getElementById("greeting-el")

//render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }

// let player1Time = 102
// let player2Time = 107
// let totalRaceTime = ""

// function getFastestRaceTime(){
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if(player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()

// let fastestRace = getFastestRaceTime() {
//     console.log(fastestRaceTime)
// }

// write a function that returns the total race time
// call/invoke the function and store the returned value in a new variable
// finally, log the variable out

// function getTotalRaceTime() {
// return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

// let randomNumber = Math.random()

// console.log(randomNumber)
// selects a random number from 0 to 1 (not inclusive of 1)
// Returns a pseudorandom number between 0 and 1.
// let randomNumber = Math.random()


// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)
// 5:35
// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber
// }
// console.log(rollDice())


//logical and operator
// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     geenerateCertificate
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false
// // create an if statement that checks both variables are false.
// //If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution() 
// }

// function showSolution() {
//     console.log("Showing the solution...")
// }

// create two boolean variables, likesDocumentaries and likesStartups
//use an Or statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }


// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


//objects - store data in-depth - composite / complex data type
//key-value pairs

// let course = {
//     title: "Learned CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.tags)


//create an object that represents airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array.
// log out at least 2 keys using the dot notation.



// if castle = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperHost: true

// }
// console.log(castle.price)
// console.log(castle.isSuperHost)

