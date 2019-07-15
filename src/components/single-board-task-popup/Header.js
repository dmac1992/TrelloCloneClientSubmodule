import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { updateTaskName } from 'actions/tasks';

const Container = styled.div`
    position: relative;
    margin-bottom: 10px;
`;

const ArchivedWarningContainer = styled.div`
    height: 50px;
`
const ArchivedSpan = styled.span`
    line-height: 50px;
    font-size: 14px;
`;

const ArchivedIcon = styled.span`
    margin-right: 10px;
    font-size: 18px;
`;

const TitleTextArea = styled.input`
    height: 33px;
    background: transparent;
    font-size: 20px;
    width: 100%;
    line-height: 33px;
    border: none;
    :focus {
        background-color: white;
    }
    
`;
const CloseIcon = styled.span`
    position: absolute;
    right: -10px;
    top: -10px;
    line-height: 36px;
    height: 32px;
    width: 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background-color: rgba(9,30,66,.13);
        color: #091e42;
    }
`;
const HeaderIcon = styled.span`
    position: absolute;
    left: -30px;
    top: -10px;
`;

const FromListTitle = styled.span`
    padding: 3px;
    display: block;
`;

const FromListSpan = styled.span`
    padding: 3px;
    display: block;
`
const WatchedIcon = styled.span`
    display: block
    padding: 3px;
`;

//TODO - why is task name passed in here


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardName: this.props.task.name
        }
    }

    taskNameHandler = (e) => {
        this.setState({ cardName: e.target.value });
    }

    updateTaskName = (e) => {
        this.props.updateTaskName(this.state.cardName, this.props.task.ID);
    }

    renderWatchedIcon = () => {
        if (this.props.task.watched)
            return <WatchedIcon className='icon-eye' />
    }

    renderArchivedWarning = () => {
        if ( this.props.task.archived ) {
            return (
                <ArchivedWarningContainer>
                    <ArchivedIcon className='icon-archive' />
                    <ArchivedSpan>This task is archived.</ArchivedSpan>
                </ArchivedWarningContainer>
            )
        }
    }


    render() {
        return (
            <Container>
                {this.renderArchivedWarning()}
                <TitleTextArea className='' onChange={this.taskNameHandler} onBlur={this.updateTaskName} value={this.state.cardName}/>
                <CloseIcon className='icon-times' onClick={this.props.clearPopup}/>
                <HeaderIcon className='icon-clone'/>
                <FromListTitle>In List:</FromListTitle>
                <FromListSpan>{this.props.sprintName}</FromListSpan>
                {this.renderWatchedIcon()}
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sprintName: state.sprints.find(sprint => sprint.id === ownProps.task.sprintID).name,
    }
}


export default connect(mapStateToProps, { updateTaskName })(Header);
