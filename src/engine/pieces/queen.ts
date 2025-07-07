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
        const currentPosition= board.findPiece(this);

        const rook = new Rook(this.player);
        board.setPiece(currentPosition, rook);
        const rook_moves = rook.getAvailableMoves(board);

        const bishop = new Bishop(this.player);
        board.setPiece(currentPosition, bishop);
        const bishop_moves = bishop.getAvailableMoves(board);

        return [... rook_moves, ... bishop_moves];
    }
}
