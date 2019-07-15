import React, { Component } from 'react'
import styled from 'styled-components';

import BoardAddTeamFloatingPopup from './BoardHeaderAddTeamFloatingPopup';

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

const BackIcon = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
`;

const CloseIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const Label = styled.label`
    margin-bottom: 3px;
`;
const NameInput = styled.input`
    width: 100%;
    padding: 5px;
`;
const Description = styled.textarea`
    width: 100%;
    padding 5px;
    margin-bottom: 10px;
`;

const CreateTeamButton = styled.button`
    background-color: green;
    padding: 10px 20px;
    color: white;
`;
const DisabledButton = styled.button`
    pointer: not-allowed;
    padding: 10px 20px;
`;

export class BoardCreateTeamFloatingPopup extends Component {

    state = {
        name: '',
        description: ''
    }

    returnToAddTeam = () => {
        this.props.setFloatingPopupInplace(BoardAddTeamFloatingPopup);
    }

    changeNameFieldHandler = (e) => {
        this.setState({name: e.target.value});
    }

    changeDescriptionFieldHandler = (e) => {
        this.setState({description: e.target.description});
    }

    renderCreateButton = () => {
        if (this.state.name.length > 1) {
            return (
                <CreateTeamButton>Create</CreateTeamButton>
            )

        } else {
            return (
                <DisabledButton disabled>Create</DisabledButton>
            )
        }
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Create Team</Title>
                <BackIcon onClick={this.returnToAddTeam}>{'<'}</BackIcon>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Label>Name</Label>
                <NameInput value={this.state.name} onChange={this.changeNameFieldHandler}></NameInput>
                <Label>Description</Label>
                <Description rows='5' value={this.state.description} onChange={this.changeDescriptionFieldHandler}/>
                {this.renderCreateButton()}
            </Container>
        )
    }
}

export default BoardCreateTeamFloatingPopup
