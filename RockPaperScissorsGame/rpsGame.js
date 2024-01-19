let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const updateUserScore = document.querySelector("#user-score");
const updateComputerScore = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        updateUserScore.innerText = userScore;
    }else{
        computerScore++;
        msg.innerText = `You Lose. ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        updateComputerScore.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    // generate computer choice 
    const computerChoice = generateComputerChoice();

    if(userChoice === computerChoice){
        // Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = computerChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = computerChoice === "rock" ? true : false
        }else if(userChoice === "scissor"){
            // rock , paper
            userWin = computerChoice === "rock" ? false : true
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});