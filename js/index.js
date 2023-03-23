
// 
const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
const PLAYER = 'player';
const COMPUTER = 'computer';
const WIN = 'win';
const LOSE = 'lose';

const numRounds = 5;
const winScore = Math.floor(numRounds / 2) + 1;
const score = {'player': 0, 'computer': 0};

function getScore(user) {
	return score[user];
};

function setScore(user, num) {
	score[user] = num;
};

function updateScore(user) {
	setScore(user, getScore(user) + 1);
};

function resetScore() {
	setScore(PLAYER, 0);
	setScore(COMPUTER, 0);
};

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
// Return an array: 1st element is win/lose/tie, 
// 2nd element is an array showing order of which choice "beats" the other choice.
function playRound(playerChoice, computerChoice) {

	// Find the index of player and coputer choices in the ROCK_PAPER_SCISSORS array
	let player_ix = ROCK_PAPER_SCISSORS.findIndex(e => e === playerChoice);
	let computer_ix = ROCK_PAPER_SCISSORS.findIndex(e => e === computerChoice);

	// Tie condtion.
	if (computer_ix === player_ix) {
		return ["tie", ["try again.."]];
	}

	// Use mod3 to simulate a circular linked list of length=3
	if (computer_ix === (player_ix + 1) % 3) {
		return ["lose", [computerChoice, playerChoice]];
	}

	// Only remaining case is player win
	return ["win", [playerChoice, computerChoice]];
}

//
function game(buttonEvent) {

	let winOrLose, xBeatsY;

	[winOrLose, xBeatsY] = playRound(buttonEvent.className, getComputerChoice());

	if (winOrLose === WIN) {updateScore(PLAYER)};
	if (winOrLose === LOSE) {updateScore(COMPUTER)};

	const footerDivText = `You ${winOrLose}, ${xBeatsY.join(" beats ")}. ${getScore(PLAYER)} - ${getScore(COMPUTER)}`;

	console.log(footerDivText);
}



const buttons = document.querySelectorAll('button');

// css background styles for rock paper scissors buttons
const bg = btn => `background: url(./images/${btn.className}.png);`;
const bgSize = "background-size: 200px;";
const bgRepeat = "background-repeat: no-repeat;";

buttons.forEach(btn => {
	// set button styles
	btn.setAttribute('style', bg(btn) + bgSize + bgRepeat);
	// set button event handling
	btn.addEventListener("click", game);
});
