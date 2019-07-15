import { USER } from 'actions/types';

export const starBoard = (userID, boardID) => {
    return {
        type: USER.STAR_BOARD,
        payload:  {
            userID,
            boardID
        }
    }
}

export const unstarBoard = (userID, boardID) => {
    return {
        type: USER.UNSTAR_BOARD,
        payload: {
            userID,
            boardID
        }
    }
}

export const removeRecentBoard = (userID, boardID) => {
    
    return {
        type: USER.REMOVE_RECENT,
        payload: {
            userID,
            boardID
        }
    }
}
