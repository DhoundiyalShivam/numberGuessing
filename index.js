let input = document.querySelector('#input')
let submit = document.querySelector('#submit')

let prevGuess = document.querySelector('.guessesSpan')
let remainGuess = document.querySelector('.guessesRemainingSpan')

let lowOrHigh = document.querySelector('.lowOrHi')
let newGame = document.querySelector('.newGame')
submit.addEventListener('click', function (e) {
    e.preventDefault()
    let guess = input.value
    input.value = ""
    guessNumber(guess)
})
let number = Math.ceil(Math.random() * 100)
console.log(number)
let totalGuess = 10;
let prevGuessArr = []
let enterGame=true
function guessNumber(guess) {
    if (guess != number) {
        totalGuess--;
        prevGuessArr.push(guess)
        prevGuess.textContent = prevGuessArr.map(d => d)
        remainGuess.textContent = totalGuess
        messagePrint(guess)
    }
    if (totalGuess == 0) {
        enterGame=false
        lowOrHigh.textContent = `Game over`
        gameOver()
    }
    prevGuess.textContent = prevGuessArr.map(d => d)
    remainGuess.textContent = totalGuess
    messagePrint(guess)
}
function messagePrint(guess) {
if(enterGame){
    if (guess < number) {
        lowOrHigh.textContent = `Your guess is to Low`
    }
    else if (guess > number) {
        lowOrHigh.textContent = `Your guess is to high`
    }
    else {
        lowOrHigh.textContent = `You have guessed the right Number`
        gameOver()
    }
}
}

function gameOver() {
    input.disabled = true
    newGame.style.display = 'block'
    newGame.addEventListener('click', () => location.reload())
}