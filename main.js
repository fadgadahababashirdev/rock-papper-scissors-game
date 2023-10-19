// 


let playGame = confirm("Do you want to play rock,paper or scissor");

if(playGame){
    let playerChoice = prompt("Enter either rock , paper or scissors");
    if(playerChoice){
        let playerOne=playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
            computerChoice === 1 ? "rock" :
            computerChoice === 2 ? "paper":
            "scissors";
            
            let result=
            playerOne === computer ? "tie Game":
            playerOne === "rock" && computer === "paper"? `PlayerOne: ${playerOne} \n Computer:${computer} \n Computer wins`:
            playerOne === "paper" && computer === "scissors"? `PlayerOne: ${playerOne} \n Computer:${computer} \n Computer wins`:
            playerOne === "scissors" && computer === "rock"? `PlayerOne: ${playerOne} \n Computer:${computer} \n Computer wins`:
            `PlayerOne :${playerOne}\n Computer :${computer} \n Player wins`;

            alert(result);

            let playAgain = confirm("Would you like to play again?");
            playAgain ? location.reload() : alert("Thanks for having fun!!");
            

        }else{
            alert("Oops looks like your choice is invalid");
        }

    }else{
        alert("Looks like you changed your mind");
    }

}else{
    alert("Oops you dont want to play ?")
}