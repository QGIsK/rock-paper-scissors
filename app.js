const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")

const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")

const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['s', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

function convert(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors"

}

function win(user, computer) {
    const userChoice_div = document.getElementById(user)

    userScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore

    result_p.innerHTML = `${convert(user)} beats ${convert(computer)}, You win!`

    userChoice_div.classList.add("green-glow")
    setTimeout(_ =>
        userChoice_div.classList.remove("green-glow"), 500)
}



function lose(user, computer) {
    const userChoice_div = document.getElementById(user)

    compScore++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore

    result_p.innerHTML = `${convert(computer)} beats ${convert(user)}, You lose!`

    userChoice_div.classList.add("red-glow")
    setTimeout(_ =>
        userChoice_div.classList.remove("red-glow"), 500)

}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user)

    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore

    result_p.innerHTML = `Draw!`

    userChoice_div.classList.add("gray-glow")
    setTimeout(_ =>
        userChoice_div.classList.remove("gray-glow"), 500)

}


function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rock_div.addEventListener("click", _ => {
        game("r")
    })

    paper_div.addEventListener("click", _ => {
        game("p")
    })

    scissors_div.addEventListener("click", _ => {
        game("s")
    })

}

main()