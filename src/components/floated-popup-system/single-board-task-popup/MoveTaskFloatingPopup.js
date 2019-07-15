import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { moveTask } from 'actions/tasks';

const Container = styled.div`
    padding: 5px;
    width: 304px;
    position: absolute;
    background-color: white;
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

const InputContainer = styled.div`
    height: 50px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgba(9,30,66,.04);
    position: relative;
    margin-bottom: 5px;
`;

const InputTitle = styled.span`
    width: 100%;
    font-size: 16px;
`

const InputValue = styled.span`
    width: 100%;
    font-size: 20px;
`;

const SelectInput = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    cursor: pointer;
    opacity: 0;
    border: none;
`
const SelectOption = styled.option``;

const MoveButton = styled.button`
    color: white;
    padding: 6px;
    background-color: green;
`



//TODO - implement position option, leaving for later.
export class MoveTaskFloatingPopup extends React.Component {
    //this.props.currentTask
    
    state = {
       board: this.props.boards.find(board => board.id === this.props.currentTask.boardID),
       sprint: this.props.sprints.find(sprint => sprint.id === this.props.currentTask.sprintID)
    }

    renderBoardOptions = () => {
        return this.props.boards
            .map(board => <SelectOption value={board.id}>{board.name}</SelectOption>)
    }

    renderSprintOptions = () => {
        return this.props.sprints
            .filter(sprint => sprint.boardID === this.state.board.id)
            .map(sprint =>  <SelectOption value={sprint.id}>{sprint.name}</SelectOption>);
    }

    boardSelectChangeHandler = (e) => {
        this.setState({
            board: this.props.boards.find(board => e.target.value == board.id),
            sprint: this.props.sprints.find(sprint => e.target.value == sprint.boardID)
        });
    }

    sprintSelectChangeHandler = (e) => {
        this.setState({
            sprint: this.props.sprints.find(sprint => e.target.value == sprint.id)
        })
    }

    moveTask = () => {
        const { currentTask } = this.props;
        const { board, sprint } = this.state;
        if ( !sprint ) {
            return;
        }

        //if same location
        if ( currentTask.boardID === board.id && currentTask.sprintID === sprint.id) {
            return;
        } 

        this.props.moveTask(currentTask.ID, sprint.id, board.id);
        this.props.clearFloatingPopup();
    }   

    
    render() {
        const { coords, clearFloatingPopup } = this.props;
        const { board, sprint } = this.state;
        return (
            <Container style={coords}>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <Title>Move Card</Title>
                <InputContainer>
                    <InputTitle>Board</InputTitle>
                    <InputValue>{board.name}</InputValue>
                    <SelectInput onChange={this.boardSelectChangeHandler}>
                        {this.renderBoardOptions()}
                    </SelectInput>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Sprints</InputTitle>
                    <InputValue>{sprint ? sprint.name : null}</InputValue>
                    <SelectInput onChange={this.sprintSelectChangeHandler}>
                        {this.renderSprintOptions()}
                    </SelectInput>
                </InputContainer>
                <MoveButton onClick={this.moveTask}>Move Task</MoveButton>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.boards,
        sprints: state.sprints,
        tasks: state.tasks,
    }
}

export default connect(mapStateToProps, {moveTask})(MoveTaskFloatingPopup)
