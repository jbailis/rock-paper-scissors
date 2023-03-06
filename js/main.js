
// 
const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];

// Get a random choice from the computer: rock, paper or scissors.
function getComputerChoice() {
	return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * 3)];
}

// Get a choice from the user: rock, paper or scissors.
function getPlayerChoice() {
	let validChoice, userInput;

	while (!validChoice) {
		userInput = prompt("Rock, Paper or Scissors??:");
		
		validChoice = ROCK_PAPER_SCISSORS.find(e => e === userInput.toLowerCase());
	}

	return validChoice;
}

// Play one round of rock, paper, scissors, given the player and computer choices
function playRound(playerChoice, computerChoice) {

	// Find the index of player and coputer choices in the ROCK_PAPER_SCISSORS array
	let player_ix = ROCK_PAPER_SCISSORS.findIndex(e => e === playerChoice);
	let computer_ix = ROCK_PAPER_SCISSORS.findIndex(e => e === computerChoice);

	// Tie condtion.
	if (computer_ix === player_ix) {
		return "Tie.  Play again...";
	}

	// Use mod3 to simulate a circular linked list of length=3
	// Player or Computer choice furthest in list wins
	if (computer_ix === (player_ix + 1) % 3) {
		return `You lose, ${computerChoice} beats ${playerChoice}`;
	}

	// Only remaining case is player win
	return `You win, ${playerChoice} beats ${computerChoice}`;
}

//
function game() {
}
