
let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let nextPlayerDisplay = document.querySelector("b");
nextPlayerDisplay.innerText = 'Next Player: X'
//initialize the game
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll("td");
    for(i=0; i<cells.length; i++){
        cells[i].innerHTML = `<button>[ ]</button>`;
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}


// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   let clickedBtn = event.target;

        if(nextPlayerDisplay.innerText == 'Next Player: X'){
            nextPlayer = 'X';
            let nextPlayerDisplay = document.querySelector("b");
            nextPlayerDisplay.innerText = 'Next Player: O';
            clickedBtn.innerText = nextPlayer;
            event.target.disabled = true;
    
        } else{
            nextPlayer = 'O';
            let nextPlayerDisplay = document.querySelector("b");
            nextPlayerDisplay.innerText = 'Next Player: X';
            clickedBtn.innerText = nextPlayer;
            event.target.disabled = true;
            
           // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

        }
    
}
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverText = document.getElementById('game-over-lbl');
        gameOverText.innerHTML = `<h1>Game Over</h1>`;
        
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 


function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    
    let counter = 0;

    for(i = 0; i< 9; i++){
        if(cells[i]== true){
            counter ++;
        }
    }
        if (counter == 9){
            return true;
        }
        else{
            return false;
        }
}
