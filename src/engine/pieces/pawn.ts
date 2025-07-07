import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let newPosition: Square[] = [];
        const currentPosition= board.findPiece(this);
        if (this.player === Player.WHITE) {
            newPosition.push (new Square (currentPosition.row + 1, currentPosition.col));
            if (currentPosition.row === 1) {
                newPosition.push (new Square (currentPosition.row + 2, currentPosition.col));
            }
        }
        else {
            newPosition.push (new Square(currentPosition.row - 1, currentPosition.col));
            if (currentPosition.row === 6) {
                newPosition.push (new Square (currentPosition.row - 2, currentPosition.col));
            }
        }
        return newPosition;
    }
}
