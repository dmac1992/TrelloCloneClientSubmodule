import React, {Component} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'; 

import  { setActiveModal } from 'actions/modal';
import { setCurrentTaskPopupID } from 'actions/currentTaskPopup';
import TaskPopup from 'components/single-board-task-popup/TaskPopup';


const Container = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 5px;
    background-color: 0 1px 0 rgba(9,30,66,.25);
    border-radius: 3px;
    cursor: pointer;
    padding: 5px;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
`;

const TopHalf = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
`;

const Title = styled.span``;
const EditIcon = styled.span`
`;

const BottomHalf = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`;
const WatchingIcon = styled.span`
    margin-right: 8px;
    font-size: 14px;
`;

const ChatContainer = styled.div`
    margin-right: 8px;
`;
const ChatCount = styled.span`
    font-size: 12px;
    position: relative;
    bottom: 2px;
`;
const ChatIcon = styled.span`
    font-size: 14px;
    margin-right: 2px;
`

const DescriptionIcon = styled.span`
    margin-right: 8px;
    font-size: 14px;
`

const ChecklistCountContainer = styled.div`
    margin-right: 8px;
`;
const ChecklistIcon = styled.span`
    margin-right: 2px;
    font-size: 14px;
`;


const ChecklistFraction = styled.span`
    font-size: 12px;
    position: relative;
    bottom: 2px;
`;

const UserIconContainer = styled.div`
    margin-left: auto;
`;
const UserIcon = styled.span`
    border-radius: 50%;
    background-color: #dfe1e6;
    display: block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
`;

class SprintTask extends Component {

    state = {
        hovered: false
    }

    createTaskModal = () => 
    {
        this.props.setCurrentTaskPopupID(this.props.taskID);
        this.props.setActiveModal(TaskPopup);
    }

    onMouseEnter = () => {
        this.setState({hovered: true});
    }

    onMouseLeave = () => {
        this.setState({hovered: false});
    }

    hoverContainerStyles = {
        backgroundColor: '#f4f5f7'
    }

    hideElement = {
        display: 'none'
    }

    renderWatchingIcon = () => {
        if (this.props.tasks.find(task => task.ID === this.props.task.ID).watched)
            return ( <WatchingIcon className='icon-eye' />)
    }

    renderDescriptionIcon = () => {
        if ( this.props.task.description ) {
            return ( <DescriptionIcon className='icon-align-left'/> );
        }
    } 

    renderComments = () => {
        let count = this.props.comments.reduce((acc, comment) => {
            if ( comment.taskID === this.props.task.ID ) {
                acc = acc + 1;
            }
            return acc;
        }, 0)
        if ( count ) {
            return (
                <ChatContainer>
                    <ChatIcon className='icon-bubble' />
                    <ChatCount>{count}</ChatCount>
                </ChatContainer>
            )
        }
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
                    <ChecklistFraction>{`${checkedCount}/${itemCount}`}</ChecklistFraction>
                </ChecklistCountContainer>
            )
        }

    }

    //we want task name, watched list, all checklists pertaining to task, does description exist, comment count bubble.
    render() {
        const { task } = this.props;
        return (
            <Container style={this.state.hovered ? this.hoverContainerStyles : null } onClick={this.createTaskModal} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <TopHalf>
                    <Title>{task.name}</Title>
                    <EditIcon className='icon-pencil' style={!this.state.hovered ? this.hideElement : null}  />
                </TopHalf>
                <BottomHalf>
                    {this.renderWatchingIcon()}
                    {this.renderDescriptionIcon()}
                    {this.renderComments()}
                    {this.renderChecklistCount()}
                    <UserIconContainer>
                        <UserIcon>M</UserIcon>
                    </UserIconContainer>
                </BottomHalf>
            </Container>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.find((task) =>  task.ID === ownProps.taskID ),
        tasks: state.tasks,
        comments: state.comments,
        checklists: state.checklists,
        checklistItems: state.checklistItem
    }
}

export default connect(mapStateToProps, { setActiveModal, setCurrentTaskPopupID })(SprintTask);
