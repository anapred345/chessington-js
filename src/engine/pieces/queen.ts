import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Bishop from "./bishop";
import Rook from "./rook";
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return [ ...this.linearMove(board, board.findPiece(this)), ...this.diagonalMove(board, board.findPiece(this))];
    }
}
