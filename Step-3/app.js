/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. 
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets 
added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

-- Double six reset the score and player lose the turn.
*/

var scores, roundScore, activePlayer, dice, diceDOM, gamePlaying, finalScore, isRolledSixBefore;

var diceDOM = document.querySelector('.dice');
var finalScoreBox = document.querySelector('.final-score');

startPosition();

// Get roll button and set click listener
document.querySelector('.btn-roll')
        .addEventListener('click', function() {
            
            if(gamePlaying) {
                // Random dice
                dice = Math.floor(Math.random() * 6) + 1;
                
                // Display the result dice image
                diceDOM.src = 'dice-' + dice + '.png';
                diceDOM.style.display = 'block';
                
                if(isRolledSixBefore && dice === 6) {
                    scores[activePlayer] = 0;
                    document.getElementById('score-' + activePlayer).textContent = 0;
                    isRolledSixBefore = false;
                    nextPlayer();
                }
                else if(!isRolledSixBefore && dice === 6) {
                    isRolledSixBefore = true;
                }
                else if(dice !== 6) {
                    isRolledSixBefore = false;
                }

                // Set the current score
                if(dice !== 1) {
                    // Set score
                    roundScore += dice;
                    document.querySelector('#current-' + activePlayer)
                            .textContent = roundScore;
                }
                else {
                    // Change active player
                    nextPlayer();
                }
            }
        });

// Get hold button and set clic listener
document.querySelector('.btn-hold')
        .addEventListener('click', function() {
            if(gamePlaying) {
                // Add round score to global score
                scores[activePlayer] += roundScore;

                // Update UI
                document.querySelector('#score-' + activePlayer)
                        .textContent = scores[activePlayer];

                // Check if the player win or not
                if(finalScoreBox.value !== "" && finalScoreBox.value !== finalScore) {
                    alert('Final score change affect after start a new game. Current final score is: ' + finalScore);
                }
                if(scores[activePlayer] >= finalScore) {
                    document.querySelector('#name-' + activePlayer)
                            .textContent = 'WINNER!..'
                    diceDOM.style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel')
                            .classList.add('winner');
                            document.querySelector('.player-' + activePlayer + '-panel')
                            .classList.remove('active');
                            gamePlaying = false;
                }
                else {
                    // Change active player
                    nextPlayer();
                }
            }
        });

document.querySelector('.btn-new')
        .addEventListener('click', startPosition);

function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer)
            .textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    document.querySelector('.player-0-panel')
            .classList.toggle('active');
    document.querySelector('.player-1-panel')
            .classList.toggle('active');
}

function startPosition() {
    // Set start values
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isRolledSixBefore = false;

    var finalBoxValue = finalScoreBox.value;
    finalBoxValue === "" ? finalScore = 100 : finalScore = finalBoxValue;

    diceDOM.style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    gamePlaying = true;
}

//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//document.querySelector('#current-' + activePlayer)
//        .textContent = dice;
//------------------------------------------------------
//document.querySelector('#current-' + activePlayer)
//        .innerHTML = '<em>' + dice + '<em>';
//------------------------------------------------------
//document.getElementById('current-' + activePlayer)
//        .textContent = dice;
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//document.querySelector('.player-1-panel')
//                        .classList.add('active');
//------------------------------------------------------
//document.querySelector('.player-1-panel')
//                        .classList.remove('active');
//------------------------------------------------------
//document.querySelector('.player-1-panel')
//                        .classList.toggle('active');
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------