import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let newPositions: Square[] = [];
        const currentPosition= board.findPiece(this);

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
}
