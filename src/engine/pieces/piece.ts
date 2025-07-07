import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public diagonalMove(board: Board, currentPosition: Square) {
        let newPositions: Square[] = [];

        for (let i = 0; i < currentPosition.row; i++) {
            if (currentPosition.col - currentPosition.row + i >= 0) {
                newPositions.push(new Square(i, currentPosition.col - currentPosition.row + i));
            }
        }

        for (let i = currentPosition.row + 1; i < GameSettings.BOARD_SIZE; i++) {
            if (currentPosition.col - currentPosition.row + i <= 7){
                newPositions.push(new Square(i, currentPosition.col - currentPosition.row + i));
            }
        }

        for (let j = GameSettings.BOARD_SIZE - 1; j > currentPosition.col; j--) {
            if (currentPosition.col + currentPosition.row - j >= 0) {
                newPositions.push(new Square(currentPosition.col + currentPosition.row - j, j));
            }
        }

        for (let j = currentPosition.col - 1; j >= 0; j--) {
            if (currentPosition.col + currentPosition.row - j >= 0) {
                newPositions.push(new Square(currentPosition.col + currentPosition.row - j, j));
            }
        }
        return newPositions;
    }

    public linearMove(board: Board, currentPosition: Square) {
        let newPositions: Square[] = [];
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentPosition.col) {
                newPositions.push(new Square(currentPosition.row, i));
            }
        }
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            if (i !== currentPosition.row) {
                newPositions.push(new Square(i, currentPosition.col));
            }
        }
        return newPositions;
    }
}
