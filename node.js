let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

// generating computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const indx = Math.floor(Math.random() * 3);
    return options[indx];
}


// game draw func
const gameDraw = () => {
    console.log("Game was draw");
    msg.innerText="Game was drawn";
    msg.style.backgroundColor="#081b31"
}


// winner Decide
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win !!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=(`You lose :(, ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor="red";
    }
}


// main game function
const playGame = (userChoice) => {
    console.log("User choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice is", compChoice);
    if (compChoice === userChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // compchoice=paper or scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // cmpchoice= scissor or rock
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // compChoice= rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

//user selection function
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})