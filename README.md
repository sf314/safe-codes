
# Safe Codes

Let's play a game...

You and 9 other people each pick a random number. The lowest number wins unless
someone else also chose that number.

Do you aim low and risk someone else also picking that number? Or do you aim
high and risk other people choosing a lower number than you?

Essentially, the lowest _unique_ number is the winner.

This project essentially aims to simulate the above described game to determine
a statistical baseline for a 'winning strategy' for picking numbers.

## Quickstart

Prerequisites:
- `node`: NodeJS installed

Run the project using:
```sh
node main.js
```

You can modify the following config parameters:

Config | Description
--- | ---
`MAX_VAL` | The highest number that a person would theoretically choose. This just controls the upper bound of the search space (cause otherwise it's infinite). The search space is 1 through MAX_VAL (inclusive).
`NUM_PLAYERS` | The total number of players to compete against. The more players, the more likely that the same number will be picked twice and you'll be eliminated!
`NUM_GAMES` | The number of times the game should be simulated.
