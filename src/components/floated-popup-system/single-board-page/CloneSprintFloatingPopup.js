import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import uniqid from 'uniqid';


//action handlers
import { cloneSprint } from 'actions/sprints'; // - needs implementatoin

import { createSprint } from 'actions/sprints';
import { createTasks } from 'actions/tasks';
import { createComments } from 'actions/comments';
import { createActivities } from 'actions/activities';
import  { createChecklists } from 'actions/checklist'; 
import { createChecklistItems } from 'actions/checklistItem';


const Container = styled.div`
    padding: 5px;
    width: 304px;
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
`;

const Title = styled.div`
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-bottom: 1px solid rgba(9,30,66,.13);
    padding-bottom: 10px;
    margin-bottom: 10px;

`;

const CloseIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const SprintNameTextArea = styled.textarea`
    padding: 7px;
    margin-bottom: 5px;
    width: 100%;
`

const SaveButton = styled.button`
    padding: 7px;
    color: white;
    background-color: green;
`;


export class CloneSprintFloatingPopup extends Component {

    constructor() {
        super();
        this.state = {
            sprintName: ''
        }
    } 

    sprintNameChangeHandler = (e) => this.setState({sprintName: e.target.value})

    cloneSprint = () => {

        let clonedComments = [], clonedActivities = [], clonedTasks = [], clonedChecklists = [], clonedChecklistItems = [];
        let clonedSprint;
     
        const { sprintID, sprints, comments, activities, tasks, checklists, checklistItems} = this.props;
        clonedSprint = _.cloneDeep(sprints.find(sprint => sprint.id === sprintID));
        clonedSprint.id = uniqid();
                       
        
        tasks.forEach(task => {
            if ( task.sprintID === sprintID ) {
                let newTask = _.cloneDeep(task);
                newTask.ID = uniqid();
                newTask.sprintID = clonedSprint.id;
                clonedTasks.push(newTask);

                comments.forEach(comment => {
                    if (comment.taskID === task.ID) {
                        let newComment = _.cloneDeep(comment);
                        newComment.taskID = newTask.ID;
                        newComment.id = uniqid();
                        clonedComments.push(newComment);
                    }
                })

                activities.forEach(activity => {
                    if (activity.taskID === task.ID) {
                        let newActivity = _.cloneDeep(activity);
                        newActivity.taskID = newTask.ID;
                        newActivity.id = uniqid();
                        clonedActivities.push(newActivity);
                    }
                })

                checklists.forEach(checklist => {
                    if (checklist.taskID === task.ID) {
                        let newChecklist = _.cloneDeep(checklist);
                        newChecklist.taskID = newTask.ID;
                        newChecklist.id = uniqid();
                        clonedChecklists.push(newChecklist);

                        checklistItems.forEach(checklistItem => {
                            if (checklistItem.checklistID === checklist.id) {
                                let newChecklistItem = _.cloneDeep(checklistItem);
                                newChecklistItem.checklistID = newChecklist.id;
                                newChecklistItem.id = uniqid();
                                clonedChecklistItems.push(newChecklistItem);
                            }
                        })
                    }
                })
            }
           
        })       
       
        //call action handlers
        const { createSprint, createTasks, createComments, createActivities, createChecklists, createChecklistItems } = this.props;

        //TODO - wrap this up into one action creator? is this causing multiple renders??
        createChecklistItems(clonedChecklistItems);
        createChecklists(clonedChecklists);
        createActivities(clonedActivities);
        createComments(clonedComments);
        createTasks(clonedTasks);
        createSprint(clonedSprint);
            
    }
    
    
    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <SprintNameTextArea onChange={this.sprintNameChangeHandler} value={this.state.sprintName} />
                <SaveButton onClick={this.cloneSprint}>Create Sprint</SaveButton>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprints: state.sprints,
        comments: state.comments,
        activities: state.activities,
        tasks: state.tasks,
        checklists: state.checklists,
        checklistItems: state.checklistItem
    }
}

const mapDispatchToProps = {
    createSprint,
    createTasks,
    createComments,
    createActivities,
    createChecklists,
    createChecklistItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CloneSprintFloatingPopup)
