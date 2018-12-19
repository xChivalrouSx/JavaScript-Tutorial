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
*/

var scores, roundScore, activePlayer, dice;

// Set start values
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Set start values
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Get roll buton and set click listener
document.querySelector('.btn-roll')
        .addEventListener('click', function() {
            // Random dice
            dice = Math.floor(Math.random() * 6) + 1;
            
            // Display the result dice image
            var diceDOM = document.querySelector('.dice');
            diceDOM.src = 'dice-' + dice + '.png';
            diceDOM.style.display = 'block';
            
            // Set the current score
            var currentScore = document.querySelector('#current-' + activePlayer);
            if(dice !== 1) {
                // Set score
                roundScore += dice;
                currentScore.textContent = roundScore;
            }
            else {
                // Change active player
                roundScore = 0;
                currentScore.textContent = 0;
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                
                document.querySelector('.player-0-panel')
                        .classList.toggle('active');
                document.querySelector('.player-1-panel')
                        .classList.toggle('active');
            }
        });

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