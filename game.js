const rockLogo = document.getElementById('rock');
const paperLogo = document.getElementById('paper');
const scissorsLogo = document.getElementById('scissors');
const selectedLogo = document.getElementById('selectedLogo');
const computerLogo = document.getElementById('computerLogo');
const computerChoices = [
    './assets/rock-hand.png',
    './assets/paper-hand.png',
    './assets/scissors-hand.png'
];
// Get the scores element by its ID
const scoresElement = document.getElementById('scores');

// Get the gameOverMessage and playAgainButton elements
var gameOverMessage = document.querySelector('.gameOverMessage');
var playAgainButton = document.querySelector('.playAgainButton');





// Split the text content using '-' as the separator
const scoresText = scoresElement.textContent;
const scoresArray = scoresText.split('-');

// The first element in the scoresArray is the player's score, and the second element is the computer's score
var playerScore = parseInt(scoresArray[0].trim());
var computerScore = parseInt(scoresArray[1].trim());
// Function to update the scores
function updateScores(selectedLogo, computerLogo) {
    // Get the filename from the src
    var selectedLogoName = selectedLogo.src.split('/').pop();
    var computerLogoName = computerLogo.src.split('/').pop();

    if(selectedLogoName == "rock-hand.png" && computerLogoName == "scissors-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "rock-hand.png" && computerLogoName == "paper-hand.png"){
        computerScore +=1;
    } else if(selectedLogoName == "paper-hand.png" && computerLogoName == "rock-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "paper-hand.png" && computerLogoName == "scissors-hand.png"){
        computerScore +=1;
    } else if(selectedLogoName == "scissors-hand.png" && computerLogoName == "paper-hand.png"){
        playerScore +=1;
    } else if(selectedLogoName == "scissors-hand.png" && computerLogoName == "rock-hand.png"){
        computerScore +=1;
    } else {
         // It's a tie, no one scores
    }

    // Update the scores in the HTML
    scoresElement.textContent = playerScore + " - " + computerScore;
   
    // Check if either score has reached 5
    if(playerScore === 5 || computerScore === 5) {
        // Determine who won
        var winner = playerScore === 5 ? 'You won the game!' : 'Computer won the game!';
        gameOver = true;

        // Hide the rock, paper, and scissors buttons
        rockLogo.style.visibility = 'hidden';
        paperLogo.style.visibility = 'hidden';
        scissorsLogo.style.visibility = 'hidden';
    
        // Update the gameOverMessage and playAgainButton with the winner and a Play Again button
        gameOverMessage.textContent = winner;
        playAgainButton.style.display = 'block'; // Show the button
        playAgainButton.onclick = function() { location.reload(); };
    }
}



rockLogo.addEventListener('click', function () {
    // Update the selectedLogo image to display the rock logo
    selectedLogo.src = "./assets/rock-hand.png ";
    selectedLogo.style.display="block"
    // Generate a random index for the computer's choice
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    // Update the computerLogo image with the randomly selected choice
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo)
});
paperLogo.addEventListener('click', function () {
    // Update the selectedLogo image to display the paper logo
    selectedLogo.src = './assets/paper-hand.png';
    selectedLogo.style.display="block"
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    // Update the computerLogo image with the randomly selected choice
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo)
});

scissorsLogo.addEventListener('click', function () {
    // Update the selectedLogo image to display the scissors logo
    selectedLogo.src = './assets/scissors-hand.png';
    selectedLogo.style.display="block"
    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    // Update the computerLogo image with the randomly selected choice
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display='block'
    updateScores(selectedLogo,computerLogo);
    
});



