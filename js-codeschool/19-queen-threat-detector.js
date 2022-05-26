
const generateBoard = function(whiteQueen, blackQueen) {
    let whiteQueenx = whiteQueen[0];
    let whiteQueeny = whiteQueen[1];
    let blackQueenx = blackQueen[0];
    let blackQueeny = blackQueen[1];
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
            board[i].push(0);
        }
    }
    board[whiteQueeny][whiteQueenx] = 1;
    board[blackQueeny][blackQueenx] = 1;

    return board;
};

const queenThreat = function(board) {

    let attack = false;
    let queen1x, queen1y, queen2x, queen2y = 0;

    queen1x = whiteQueen[0];
    queen1y = whiteQueen[1];
    queen2x = blackQueen[0];
    queen2y = blackQueen[1];

    let xdiff = Math.abs(queen1x - queen2x);
    let ydiff = Math.abs(queen1y - queen2y);
    if (xdiff === ydiff) {
        attack = true;
    } else if (queen1x === queen2x) {
        attack = true;
    } else if (queen1y === queen2y) {
        attack = true;
    }

    return attack;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
/*
  [[0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

*/

