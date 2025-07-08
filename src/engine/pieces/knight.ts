import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let newPositions: Square[] = [];
        const currentPosition= board.findPiece(this);

        const directions = [
            {row: -2, col: 1},
            {row: -2, col: -1},
            {row: -1, col: -2},
            {row: -1, col: 2},
            {row: 1, col: 2},
            {row: 1, col: -2},
            {row: 2, col: -1},
            {row: 2, col: 1}
        ]

        for (const d of directions) {
            const row = currentPosition.row + d.row;
            const col = currentPosition.col + d.col;

            if (row <  GameSettings.BOARD_SIZE && col < GameSettings.BOARD_SIZE && row >=0 && col >= 0) {
                newPositions.push(new Square(row, col));
            }
        }

        return newPositions;
    }
}
