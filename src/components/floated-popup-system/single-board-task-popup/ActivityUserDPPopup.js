import React, { Component } from 'react'
import styled from 'styled-components';

import ChangeNameAndBioFloatingPopup from 'components/floated-popup-system/single-board-task-popup/ChangeNameAndBioFloatingPopup';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 8px;
    padding-left: 80px;
    padding-bottom: 8px;
    background-color: white;
    width: 250px;
`;


const ClearPopupIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const DP = styled.span`
    background-color: #dfe1e6;
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
`
const FullName = styled.span`
    font-weight: bold;
    
`;
const Username = styled.span`
    margin-top: 6px;
    margin-bottom: 6px;
`;
const EditProfileLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

export class ActivityUserDPPopup extends Component {

    openEditNameAndBioPopup = () => {
        const { setFloatingPopupInplace, user} = this.props;
        setFloatingPopupInplace(ChangeNameAndBioFloatingPopup, { user: user })
    }

    render() {
        const {coords, clearFloatingPopup, user } = this.props; 
        return (
            <Container style={coords}>
                <ClearPopupIcon className='icon-times' onClick={clearFloatingPopup} />
                <DP>{user.initial}</DP>
                <FullName>{user.fullname}</FullName>
                <Username>@{user.username}</Username>
                <EditProfileLink onClick={this.openEditNameAndBioPopup}>Edit profile info</EditProfileLink>
            </Container>
        )
    }
}

export default ActivityUserDPPopup
