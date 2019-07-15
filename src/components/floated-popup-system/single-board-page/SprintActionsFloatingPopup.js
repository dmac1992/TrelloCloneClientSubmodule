import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import CloneSprintFloatingPopup from 'components/floated-popup-system/single-board-page/CloneSprintFloatingPopup';
import ReorderSprintsFloatingPopup from 'components/floated-popup-system/single-board-page/ReorderSprintsFloatingPopup';
import SortSprintTaskOrderFloatingPopup from 'components/floated-popup-system/single-board-page/SortSprintTaskOrderFloatingPopup';
import MoveAllCardsInSprint from 'components/floated-popup-system/single-board-page/MoveAllCardsInSprint';


//Move List Popup
//Sort By Popup
//Move All Cards in List Popup
//Archive All Cards in List Popup
//Archive List Popup

//action handlers
import { watchSprint, unwatchSprint } from 'actions/sprints';


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

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    padding: 5px;
`;
const ListItem = styled.li`
    cursor: pointer;
    :hover { 
        background-color: #e4f0f6 
    }
    padding: 5px;
`;
const MenuDivider = styled.hr`
    margin-top: 3px;
    margin-bottom: 3px;
`;

export class SprintActionsFloatingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sprint: this.props.sprints.find((sprint) => sprint.id === this.props.sprintID),
        }
    }

    addCard = () => {}
    
    copyListFloatingPopup = () => {
        this.props.setFloatingPopupInplace(CloneSprintFloatingPopup, { sprintID: this.props.sprintID });
    }
    
    moveListFloatingPopup = () => {
        this.props.setFloatingPopupInplace(ReorderSprintsFloatingPopup, { sprintID: this.props.sprintID });
    }

    sortSprintTasksFloatingPopup = () => {
        this.props.setFloatingPopupInplace(SortSprintTaskOrderFloatingPopup, { sprintID: this.props.sprintID});
    }
    

    watchList = () => {}

    moveAllListCards = () => {
        this.props.setFloatingPopupInplace(MoveAllCardsInSprint, {  sprintID: this.props.sprintID, boardID: this.state.sprint.boardID  });
    }
    archiveAllListCards = () => {}
    archiveList = () => {}

    renderTickIfWatched = () => {
        if ( this.state.sprint.watched) return (  <span className='icon-check' /> )
    }

    toggleWatched = () => {
        const { unwatchSprint, watchSprint, sprintID, clearFloatingPopup } = this.props;
        if ( this.state.sprintWatched ) {
            unwatchSprint(sprintID);
        } else {
            watchSprint(sprintID);
        }
        clearFloatingPopup();
    }
    

    render() {
        const { coords, clearFloatingPopup, addCardHandler} = this.props;
        return (
            <Container style={coords}>
                <Title>Sprint Actions</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <Menu>
                    <ListItem onClick={addCardHandler}>Add Card...</ListItem>
                    <ListItem onClick={this.copyListFloatingPopup}>Copy list...</ListItem>
                    <ListItem onClick={this.moveListFloatingPopup}>Move list...</ListItem>
                    <ListItem onClick={this.toggleWatched}>Watch{this.renderTickIfWatched()}</ListItem>
                    <MenuDivider />
                    <ListItem onClick={this.sortSprintTasksFloatingPopup}>Sort By...</ListItem>
                    <MenuDivider />
                    <ListItem onClick={this.moveAllListCards}>Move All Cards in this list...</ListItem>
                    <ListItem>Archive All Cards in this list</ListItem>
                    <MenuDivider />
                    <ListItem></ListItem>
                </Menu>
            </Container>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprints: state.sprints,
    }
}

export default connect(mapStateToProps, {watchSprint, unwatchSprint})(SprintActionsFloatingPopup);
