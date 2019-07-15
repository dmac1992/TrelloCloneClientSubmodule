import React from 'react'
import styled from 'styled-components';

import BoardCreateTeamFloatingPopup from './BoardHeaderCreateTeamFloatingPopup';

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

const Header = styled.label`
    margin-bottom: 5px;
    color: #172b4d;
    display: block;
`;
const TeamOptionsSelect = styled.select`
    width: 100%;
    margin-bottom: 15px;
    padding: 3px;
`;
const TeamOption = styled.option`

`;

const BottomButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AddTeamButton = styled.button`
    background-color: green;
    padding: 10px 20px;
    color: white;
`;
const CreateTeamButton = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

class BoardAddTeamFloatingPopup extends React.Component {

    createTeamPopup = () => {
        this.props.setFloatingPopupInplace(BoardCreateTeamFloatingPopup)
    }

    render() {

        return (
            <Container style={this.props.coords}>
                <Title>Add to a Team</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup}/>
                <Header>This board is part of...</Header>
                <TeamOptionsSelect>
                    <TeamOption>Personal Boards (no team)</TeamOption>
                    <TeamOption>New Team</TeamOption>
                </TeamOptionsSelect>
                <BottomButtons>
                    <AddTeamButton>Add</AddTeamButton>
                    <CreateTeamButton onClick={this.createTeamPopup}>Create Team</CreateTeamButton>
                </BottomButtons>
            </Container>
        )

    }
   
}

export default BoardAddTeamFloatingPopup