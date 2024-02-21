const MAX_VAL = 200 // Highest number
const NUM_PLAYERS = 100

const NUM_GAMES = 10

// Choose a random number between 1 and MAX_VAL
function randInt() {
    let rand = Math.random();
    return Math.ceil(rand * MAX_VAL);
}

// Prefer lower numbers by skewing linearly from 1 (most likely) to MAX_VAL (least likely)
function randSkewed() {
    let rand = Math.random();
    let flatSelection = Math.ceil(rand * MAX_VAL);
    let skew = Math.ceil(flatSelection * flatSelection / 199.0) // f(x) = (1/199) * x^2
    return skew
}

function playGame() {
    // Make selections (CHOOSE RANDOMLY INSTEAD OF INTELLIGENTLY)
    let selections = []
    for (var i = 0; i < NUM_PLAYERS; i++) {
        selections.push(randSkewed())
    }

    // Sort
    sorted = selections.sort(function(a, b){return a - b})

    // Print first i.e. 10
    console.log(sorted)

    // If first number is unique:
    if (sorted[0] != sorted[1]) {
        console.log(sorted[0] + " is winner")
        return
    }

    // Determine winner
    // TODO: THERE'S CLEARLY A BUG HERE
    let firstChoice = sorted[0]

    for (var i = 1; i < NUM_PLAYERS; i++) {
        if (sorted[i] != firstChoice) {
            console.log(sorted[i] + " is winner")
            return;
        }
    }
}


for (var i = 0; i < NUM_GAMES; i++) {
    playGame()
}
