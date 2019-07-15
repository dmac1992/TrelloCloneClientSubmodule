import { COMMENT } from 'actions/types';

export const deleteComment = (id) => {
    return {
        type: COMMENT.DELETE_COMMENT,
        payload: id
    }
}

export const deleteTaskComments = (taskID) => {
    return {
        type: COMMENT.DELETE_TASK_COMMENTS,
        payload: taskID
    }
}

//TODO - changed this to include taskID did it break anything
export const createComment = (comment) => {
    return {
        type: COMMENT.CREATE_COMMENT,
        payload: comment
    }
}

export const createComments = (comments) => {
    return {
        type: COMMENT.CREATE_COMMENTS,
        payload: comments
    }
}


// const createComment = () => {};
// const updateComment = (id, newComment) => {};