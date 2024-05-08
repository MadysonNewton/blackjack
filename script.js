let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")




// create a function, getRandomCard(), that always returns the number 5
// use getRandomCard() to set the value of the firstCard and secondCard

function getRandomCard() {
return 5
}

function startGame() {
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "cards "

    if(sum <= 20){
        message = "Would you like to draw again?"
    }
    else if (sum === 21){
        message = "BLACKJACK!"
        hasBlackJack = true
    }
    else if (sum > 21) {
        message = "sorry,play again?"
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent= "Sum: "+sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    //render all the cards we have
}
function newCard(){
    console.log("Drawing a new Card from the deck!")
    
   let card = getRandomCard() 
   sum += card
   renderGame()
   cards.push(Card)
   console.log(card)
   
}

