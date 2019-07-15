//Header action creators
export const HEADER = {
     TOGGLE_LEFT_POPUP: "header_toggle_left_popup",
     TOGGLE_RIGHT_POPUP: "header_toggle_right_popup",
     SEARCH_CHANGE: "header_search_change"
}

export const SEARCH = {
    BOARD_INPUT: "board_input",
    GENERIC_INPUT: "generic_input",
}


//MODALS
export const MODALS = {
    SET_ACTIVE_MODAL: "set_active_modal"
}

// HOME PAGE
export const HOME = {
    TOGGLE_HOME_MENU_POPUP :"toggle_home_menu_popup"
}

//POPUPS
export const POPUPS = {

};

export const FLOATINGPOPUP = {
    SET_FLOATING_POPUP: 'set_floating_popup',
    SET_FLOATING_POPUP_INPLACE: 'set_floating_popup_inplace'
}

export const SPRINTS = {
    CREATE_SPRINT: 'create_sprint',
    DELETE_SPRINT: 'delete_sprint',
    REORDER_SPRINT: 'reorder_sprint',
    UPDATE_SPRINTS: 'update_sprints',
    UPDATE_SPRINT_NAME: 'update_sprint_name',
    WATCH_SPRINT: 'watch_sprint',
    UNWATCH_SPRINT: 'unwatch_sprint'
    
}

export const TASK = {
    CREATE_TASK: 'create_task',
    CREATE_TASKS: 'create_tasks',
    DELETE_TASK: 'delete_task',
    UPDATE_TASKS: 'update_tasks',
    UPDATE_DESCRIPTION: 'update_task_description',
    UPDATE_NAME: 'update_task_name',
    MOVE_SPRINT_TASKS_TO_NEWSPRINT: 'move_sprint_tasks_to_newsprint',
    ARCHIVE_TASK: 'archive_task',
    UNARCHIVE_TASK: 'unarchive_task',
    MOVE_TASK: 'move_task',
    TOGGLE_WATCH_TASK: 'toggle_watch_task'
}

export const BOARD = {
    CREATE_BOARD: 'create_board',
    DELETE_BOARD: 'delete_board',
}

export const CHECKLIST = {
    CREATE_CHECKLIST: 'create_checklist',
    CREATE_CHECKLISTS: 'create_checklists',
    DELETE_CHECKLIST: 'delete_checklist',
    DELETE_TASK_CHECKLISTS: 'delete_task_checklists'
}

export const CHECKLIST_ITEM = {
    TOGGLE_CHECKLIST_ITEM: 'toggle_checklist_item',
    CREATE_CHECKLIST_ITEM: 'create_checklist_item',
    CREATE_CHECKLIST_ITEMS: 'create_checklist_items',
    DELETE_CHECKLIST_ITEM: 'delete_checklist_item',
    DELETE_CHECKLISTS_ITEMS: 'delete_checklists_items',
    CHECK_CHECKLIST_ITEM: 'check_checklist_item',
    UNCHECK_CHECKLIST_ITEM: 'uncheck_checklist_item'
}

export const COMMENT = {
    CREATE_COMMENT: 'create_comment',
    CREATE_COMMENTS: 'create_comments',
    DELETE_COMMENT: 'delete_comment',
    DELETE_TASK_COMMENTS: 'delete_tasks_comments',
    EDIT_COMMENT: 'edit_comment'
}

export const ACTIVITY = {
    CREATE_ACTIVITY: 'create_activity',
    CREATE_ACTIVITIES: 'create_activities',
    DELETE_TASK_ACTIVITIES: 'delete_task_activities'
}

export const USER = {
    CHANGE_USERNAME: 'change_username',
    CHANGE_FULLNAME: 'change_fullname',
    STAR_BOARD: 'user_star_board',
    UNSTAR_BOARD: 'user_unstar_board',
    REMOVE_RECENT: 'user_remove_recent'
}

export const CURRENT_TASK_POPUP = {
    SET_ID: 'set_id'
}

export const WATCHED_SPRINTS = {
    WATCH_SPRINT: 'watch_sprint',
    UNWATCH_SPRINT: 'unwatch_sprint'
}

export const WATCHED_TASKS = {
    WATCH_TASK: 'watch_task',
    UNWATCH_TASK: 'unwatch_task',
}

export const SET_USER_ID = 'set_user_id';

export const TEAM = {
    CREATE_TEAM: 'create_team',
    DELETE_TEAM: 'delete_team'
}







