import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import uniqid from 'uniqid';
import { DateTime } from 'luxon';

import variables from 'variables';
import { createComment } from 'actions/comments';


const Container = styled.div`
    border-radius: 3px;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px 0 rgba(9,30,66,.13);
    font-family: ${variables.primaryFont}
`;

const TopHalf = styled.div`
    padding: 5px;
    padding-bottom: 0;
`;
const TaskDetailsCard = styled.div`
    background-color: white;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px 0px;
    margin-bottom: 3px;
`;
const TaskName = styled.span`
    width: 100%;
    display: block;
    padding: 5px;
`;

const TaskDetailsContainer = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`;


const DescriptionIcon = styled.span`
    margin-right: 15px;
    font-size: 14px;
`;

const CommentCountContainer = styled.div`
    margin-right: 15px;
`;
const CommentsIcon = styled.span`
    margin-right: 3px;
    font-size: 14px;
`;
const CommentCount = styled.span`
    position: relative;
    bottom: 2px;
    font-size: 12px;
`;

const ChecklistCountContainer = styled.div``;
const ChecklistIcon = styled.span`
    font-size: 14px;
`;
const ChecklistRatio = styled.span`
    font-size: 12px;
    position: relative;
    bottom: 2px;
`;

//TODO - color here should dynamically change based on background color.
const CardOriginsContainer = styled.div`
    color: white;
`;
const TeamName = styled.span``;
const BoardName = styled.span``;
const SprintName = styled.span``;

const MiddleSection = styled.div`
    background-color: white;
    padding: 5px;

`;
const UserDetailsSection = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;
const DP = styled.span`
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #dfe1e6;
    border-radius: 50%;
    margin-right: 7px;
    
`;
const UsernameTimeSection = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Username = styled.span`
    font-weight: bold;
`;
const Time = styled.span``;
const MenuIcon = styled.span`
    height: 32px;
    width: 32px;
    line-height: 38px;
    text-align: center;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13)
    }
`;

const Comment = styled.p`
    padding: 6px;
`;

const ReplyButton = styled.button`
    width: 100%;
    padding: 10px;
    border: 1px solid #dfe1e6;
    border-radius: 3px;
    background-color: white;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;

const FormSection = styled.div`
    background-color: #f4f5f7;
    padding: 6px;
`;

const InputUserIconSection = styled.div`
    display: flex;
    align-items: center;
`

const ReplyInput = styled.input`
    flex-grow: 1;
    padding: 5px;
`

const FormButtonsSection = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    padding-left: 10px;
`

const SaveCommentButton = styled.span`
    margin-right: 10px;
    cursor: pointer;
`;
const CancelCommentButton = styled.span`
    cursor: pointer;
`;




export class HomeFeedItem extends Component {

    state = {
        replyFormOpen: false,
        replyComment: ''
    }

    renderChecklistCount = () => {
        const { checklists, checklistItems, task} = this.props;
        let itemCount = 0;
        let checkedCount = 0;
        checklists.forEach(checklist => {
            if ( checklist.taskID === task.ID) {
                checklistItems.forEach(checklistItem => {
                    if (checklistItem.checklistID === checklist.id  ) {
                        itemCount++;
                        if ( checklistItem.checked )
                            checkedCount++;
                    }
                })
               
            }
        })
        if ( itemCount ) {
            return (
                <ChecklistCountContainer>
                    <ChecklistIcon className='icon-check-square-o' />
                    <ChecklistRatio>{`${checkedCount}/${itemCount}`}</ChecklistRatio>
                </ChecklistCountContainer>
            )
        }
    }

    renderCommentCount = () => {
        let count = this.props.comments.reduce((acc, comment) => {
            if ( comment.taskID === this.props.task.ID ) {
                acc = acc + 1;
            }
            return acc;
        }, 0)
        if ( count ) {
            return (
                <CommentCountContainer>
                    <CommentsIcon className='icon-bubble' />
                    <CommentCount>{count}</CommentCount>
                </CommentCountContainer>
                
            )
        }
    }

    renderDescriptionExists = () => {
        if (this.props.task.description)
            return ( <DescriptionIcon className='icon-align-left' />)
    }

    replyInputChangeHandler = (e) => {
        this.setState({replyComment: e.target.value})
    }

    postComment = () => {
        const { task, userId } = this.props;
        if ( this.state.replyComment) {
            const newComment = {
                id: uniqid(),
                taskID: task.ID,
                userID: userId,
                comment: this.state.replyComment,
                timestamp: DateTime.local(),
                lastEdited: null,
            };
            this.props.createComment(newComment);
            this.setState({
                replyFormOpen: false,
                replyComment: ''
            })
        }
     }

    //TODO - every time this is called it is outputting same team name.
    renderCardOriginsDetails = () => {
        const { board, sprint, teams} = this.props;
        const team = teams.find(team => team.id === board.teamID); 
        return (
            <CardOriginsContainer>
                { team ? <TeamName>{team.name} | </TeamName> : null}
                <BoardName>{board.name}: </BoardName>
                <SprintName>{sprint.name}</SprintName>
            </CardOriginsContainer>
        )
    }

    toggleReplyForm = () => { this.setState({replyFormOpen: !this.state.replyFormOpen})}

    renderReplyForm = () => {
        const {users, userId} = this.props;
        if ( this.state.replyFormOpen) {
            return (
                <FormSection>
                    <InputUserIconSection>
                        <DP>{users[userId].initial}</DP>
                        <ReplyInput value={this.state.replyComment} onChange={this.replyInputChangeHandler} />
                    </InputUserIconSection>
                    <FormButtonsSection>
                        <SaveCommentButton onClick={this.postComment}>Save</SaveCommentButton>
                        <CancelCommentButton onClick={this.toggleReplyForm}>Cancel</CancelCommentButton>
                    </FormButtonsSection>
                </FormSection>
            )
        }
    }

    render() {
        const { task, comment, users, board } = this.props;
        return (
            <Container style={{backgroundColor: board.backgroundColor}}>
                <TopHalf>
                    <TaskDetailsCard>
                        <TaskName>{task.name}</TaskName>
                        <TaskDetailsContainer>
                            {this.renderDescriptionExists()}
                            {this.renderCommentCount()}
                            {this.renderChecklistCount()}
                        </TaskDetailsContainer>
                    </TaskDetailsCard>
                    {this.renderCardOriginsDetails()}
                </TopHalf>
                <MiddleSection>
                    <UserDetailsSection>
                        <DP>{users[comment.userID].initial}</DP>
                        <UsernameTimeSection>
                            <Username>{users[comment.userID].username}</Username>
                            <Time>{comment.timestamp.toLocaleString(DateTime.DATETIME_MED)}</Time>
                        </UsernameTimeSection>
                        <MenuIcon className='icon-dot-3'/>
                    </UserDetailsSection>
                    <Comment>{comment.comment}</Comment>
                    <ReplyButton onClick={this.toggleReplyForm}>Reply</ReplyButton>
                </MiddleSection>
                {this.renderReplyForm()}
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    let task = state.tasks.find(task => ownProps.comment.taskID === task.ID);

    return {
        task,
        board: state.boards.find(board => board.id === task.boardID),
        sprint: state.sprints.find(sprint => sprint.id === task.sprintID),
        users: state.users,
        userId: state.userId,
        comments: state.comments,
        checklists: state.checklists,
        checklistItems: state.checklistItem,
        teams: state.teams
    }

   
}

const mapDispatchToProps = {
    createComment
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedItem)
