import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition= board.findPiece(this);
        let newPosition= board.findPiece(this);
        if(this.player === Player.WHITE){
            newPosition.row = currentPosition.row + 1;
            if(board.getPiece(newPosition) === undefined) {
                return newPosition;
            }
        }
        else{
            newPosition.row = currentPosition.row - 1;
            if(board.getPiece(newPosition) === undefined) {
                return newPosition;
            }
        }
        return currentPosition;
    }
}
