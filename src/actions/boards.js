import { BOARD } from 'actions/types';

export const createBoard = (board) => {
    return {
        type: BOARD.CREATE_BOARD,
        payload: board
    }
} 

export const deleteBoard = (boardID) => {
    return {
        type: BOARD.DELETE_BOARD,
        payload: boardID
    }
} 