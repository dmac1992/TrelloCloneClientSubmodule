import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import SingleBoardHeader from './SingleBoardHeader';
import SprintContainer from './SprintContainer';
import AddSprintColumn from './AddSprintColumn';

//action creators
import { setFloatingPopup } from 'actions/floatingPopups';

//floating popup reference
import BoardHeaderInviteFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderInviteFloatingPopup';
import BoardHeaderAddTeamFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderAddTeamFloatingPopup';
import BoardHeaderCreateTeamFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderCreateTeamFloatingPopup';
import BoardHeaderChangePrivacyFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderChangePrivacyFloatingPopup';
import BoardHeaderChangeAdminLevelFloatingPopup from 'components/floated-popup-system/single-board-header/BoardHeaderChangeAdminLevelFloatingPopup';
import CloseBoardFloatingPopup from 'components/floated-popup-system/slide-out-menu/SlideCloseBoardFloatingPopup';

const Container = styled.div`
    flex-grow: 1;
    position: relative;
`;

const BoardsCanvas = styled.div`
    position: absolute;
    overflow-x: scroll;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    display: flex;
    padding-top: 3px;
    padding-bottom: 10px;
`;

class SingleBoard extends PureComponent {

    constructor(props) {
        super(props);
        this.inviteToBoardButtonRef = React.createRef();
        this.addTeamButtonRef = React.createRef();
        this.privacySettingsButtonRef = React.createRef();
        this.userAdminButtonRef = React.createRef();
    }

    state = {
        MenuOpen: false
    }

    componentDidMount() {
        document.body.style.backgroundColor = this.props.board.backgroundColor;
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = 'transparent';
    }

  

    inviteToBoardHeaderPopup = () => {
        this.props.setFloatingPopup(BoardHeaderInviteFloatingPopup , this.inviteToBoardHeaderButtonRef);
    }

    addTeamPopup = () => {
        this.props.setFloatingPopup(BoardHeaderAddTeamFloatingPopup, this.addTeamButtonRef);
    }

    createTeamPopup = () => {
        this.props.setFloatingPopup(BoardHeaderCreateTeamFloatingPopup, this.addTeamButtonRef);
    }

    changePrivacySettings = () => {
        this.props.setFloatingPopup(BoardHeaderChangePrivacyFloatingPopup, this.privacySettingsButtonRef);
    }

    changeUserPermissions = () => {
        this.props.setFloatingPopup(BoardHeaderChangeAdminLevelFloatingPopup, this.userAdminButtonRef);
    }

    closeBoard = () => {
        this.props.setFloatingPopup(CloseBoardFloatingPopup, )
    }

    renderSprintBoards = () => {
        return this.props.sprints
            .filter((sprint) => sprint.boardID === this.props.match.params.id)
            .sort((a, b) => a.boardPosition - b.boardPosition)
            .map((sprint) => <SprintContainer key={sprint.id} sprintID={sprint.id} /> )
    }

    //TODO - PERFORMANCE ISSUE - SingleBoardHeader component should connect to state and grab board data itself to prevent this component rendering excessively.
    render() {
        return (
            <Container>
                <SingleBoardHeader 
                    inviteToBoardPopup={this.inviteToBoardPopup}
                    inviteToBoardButtonRef={this.inviteToBoardButtonRef}
                    addTeamPopup={this.addTeamPopup}
                    addTeamButtonRef={this.addTeamButtonRef}
                    createTeamPopup={this.createTeamPopup}
                    privacySettingsButtonRef={this.privacySettingsButtonRef}
                    changePrivacySettings={this.changePrivacySettings}
                    changeUserPermissions={this.changeUserPermissions}
                    userAdminButtonRef={this.userAdminButtonRef}
                    setFloatingPopup={this.props.setFloatingPopup}
                    board={this.props.board}
                     />
                <BoardsCanvas style={{backgroundColor: this.props.board.backgroundColor}}>
                    {this.renderSprintBoards()}
                    <AddSprintColumn board={this.props.board}/>
                </BoardsCanvas>
            </Container>
        )
    }
}
// sprints: state.sprints.filter((sprint) => sprint.boardID === boardID),

function mapStateToProps(state, ownProps) {
    const boardID = ownProps.match.params.id;
    return {
        board: state.boards.find((board) => board.id === boardID),
        sprints: state.sprints,
        currentUser: state.users[state.userId]
    }
}

export default connect(mapStateToProps, { setFloatingPopup })(SingleBoard);

// state.boards.find((board) => board.id === ownProps.match.params.id),
