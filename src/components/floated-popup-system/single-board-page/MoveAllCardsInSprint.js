import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { moveSprintTasksToNewSprint } from 'actions/tasks';

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

const SprintOptionsList = styled.ul``;
const CurrentSprintOption = styled.li`
    padding: 6px;
    color: #a5adba
    cursor: default;
`;
const SprintOption = styled.li`
    padding: 6px;
    cursor: pointer;
    color: #172b4dl
    :hover {
        background-color: rgba(9,30,66,.04);
    }
`;


export class MoveAllCardsInSprint extends Component {



    renderAvailableLists = () => {
        return this.props.sprintsAvailable.map(sprint => {
            if (sprint.id === this.props.sprintID) {
                return (
                    <CurrentSprintOption>
                        {sprint.name}
                    </CurrentSprintOption>
                )
            } else {
                return (
                    <SprintOption data-sprintid={sprint.id} onClick={this.moveTasks.bind(null, this.props.sprintID, sprint.id)}>
                        {sprint.name}
                    </SprintOption>
                )
            }
        })
    }

    moveTasks = (currentSprintID, sprintDestinationID) => {
        this.props.moveSprintTasksToNewSprint(currentSprintID, sprintDestinationID);
        this.props.clearFloatingPopup();
    }

    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <SprintOptionsList>
                    {this.renderAvailableLists()}
                </SprintOptionsList>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
        sprintsAvailable: state.sprints.filter(sprint => sprint.boardID === ownProps.boardID).sort((a, b) => a.boardPosition - b.boardPosition)
    }
}

export default connect(mapStateToProps, { moveSprintTasksToNewSprint } )(MoveAllCardsInSprint)
