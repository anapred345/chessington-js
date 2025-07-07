import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let newPositions: Square[] = [];
        const currentPosition= board.findPiece(this);
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
