let user_score = 0;
let bot_score = 0;

let Uscore = document.querySelector("#user-score");
let Bscore = document.querySelector("#bot-score");



const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        console.log("choice was clicked",user_choice);
        playGame(user_choice);
    })
})

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


const showWinner = (userWin)=>{
    if(userWin){
        console.log("You Win");
        message.innerText = "You Win !!";
        user_score++;
        Uscore.innerText = user_score;

    }else{
        console.log("You Lose");
        message.innerText = "You Lose !!";
        bot_score++;
        Bscore.innerText = bot_score;
    }

}
const drawGame = ()=>{
    console.log("Game was draw");
        message.innerText = "Game Was Draw ! Play Again.."
};

const playGame = (user_choice)=>{
    console.log("user-choice", user_choice);
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);

    if(user_choice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(user_choice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }else if(user_choice === "Paper"){
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
}







