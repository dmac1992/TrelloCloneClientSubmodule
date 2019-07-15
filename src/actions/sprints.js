import { SPRINTS } from 'actions/types';

export const createSprint = (newSprint) => {
    return {
        type: SPRINTS.CREATE_SPRINT,
        payload: newSprint
    }
}

export const cloneSprint = (sprintID) => {

    return {
        type: SPRINTS.CLONE_SPRINT,
        payload: sprintID
    }
}

export const updateSprints = (updatedSprints) => {
    return {
        type: SPRINTS.UPDATE_SPRINTS,
        payload: updatedSprints
    }
}

export const updateSprintName = (newName, sprintID) => {
    return {
        type: SPRINTS.UPDATE_SPRINT_NAME,
        payload: {
            newName,
            sprintID
        }
    }
}

export const toggleWatchSprint = (sprintID) => {
    return {
        type: SPRINTS.TOGGLE_WATCH_SPRINT,
        payload: sprintID
    }
}

export const watchSprint = (sprintID) => {
    return {
        type: SPRINTS.WATCH_SPRINT,
        payload: sprintID
    }
}

export const unwatchSprint = (sprintID) => {
    return {
        type: SPRINTS.UNWATCH_SPRINT,
        payload: sprintID
    }
}

// export const deleteSprint = () => {
//     return {
//         type: SPRINTS.DELETE_SPRINT,
//         payload: sprintID
//     }
// }

// export const reorderSprint = () => {
//     return {
//         type: SPRINTS.REORDER_SPRINT,
//         payload: sprintID
//     }
// }