import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import { updateTasks } from 'actions/tasks';

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

const SortingOptionsList = styled.ul`

`;
const SortingOptionsListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: #f4f5f7
    }
`;

export class SortSprintTaskOrderFloatingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sprint: this.props.sprints.find(sprint => sprint.id === this.props.sprintID),
            sprintTasks: this.props.tasks.filter(task => task.sprintID === this.props.sprintID),
        }
    }

    //TODO - gotta give all tasks different times to confirm sorting is working.
    //also easy to look at names
    newestFirst = () => {
        let sortedArray = [...this.state.sprintTasks].sort((a, b) => a.created - b.created)
        sortedArray.forEach((task, index) => task.sprintPosition = index);
        this.props.updateTasks(sortedArray);
        this.props.clearFloatingPopup();
    } 

    oldestFirst = () => {
        let sortedArray = [...this.state.sprintTasks].sort((b, a) => a.created - b.created)
        sortedArray.forEach((task, index) => task.sprintPosition = index);
        this.props.updateTasks(sortedArray);
        this.props.clearFloatingPopup();
    }

    alphabetically = () => {
        let sortedArray = [...this.state.sprintTasks].sort((a,b) => (a.name > b.name) ? 1 : -1);
        sortedArray.forEach((task, index) => task.sprintPosition = index);
        this.props.updateTasks(sortedArray);
        this.props.clearFloatingPopup();
    }

    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <SortingOptionsList>
                    <SortingOptionsListItem onClick={this.newestFirst}>Date Created (Newest First)</SortingOptionsListItem>
                    <SortingOptionsListItem onClick={this.oldestFirst}>Date Created (Oldest First)</SortingOptionsListItem>
                    <SortingOptionsListItem onClick={this.alphabetically}>Card Name (Alphabetically)</SortingOptionsListItem>
                </SortingOptionsList>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprints: state.sprints,
        tasks: state.tasks,
      
    }
}

export default connect(mapStateToProps, { updateTasks })(SortSprintTaskOrderFloatingPopup);
