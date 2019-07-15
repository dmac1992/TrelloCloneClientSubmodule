import React, { Component } from 'react'
import styled from 'styled-components';
import variables from 'variables';

const Container = styled.ul`
    background-color: white;
    position: absolute;
    padding: 35px 0;
    width: 370px;
`;

const CloseIcon = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
`;

const PrivacyOption = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    :hover {
        background-color: #298fca;
        > * {
            color: white;
        }
    }
`;
const PrivacyOptionTopHalf = styled.div`
    margin-bottom: 3px;
`;

const IconPrivate = styled.span`
    margin-right: 7px;
    color: red;
    font-size: 14px;
    position: relative;
    top: 2px;
`;

const IconPublic = styled.span`
    margin-right: 7px;
    color: green;
    font-size: 14px;
    position: relative;
    top: 2px;
`;
const Title = styled.span``;


const Description = styled.p`
`;



export class CreateBoardFloatingPrivacyMenu extends Component {

    setPublicAndExit = () => {
        this.props.setToPublic();
        this.props.clearFloatingPopup();
    }   

    setPrivateAndClose = () => {
        this.props.setToPrivate();
        this.props.clearFloatingPopup();
    }

    render() {

        return (
            <Container style={this.props.coords} >
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <PrivacyOption onClick={this.setPrivateAndClose}>
                    <PrivacyOptionTopHalf>
                        <IconPrivate className='icon-lock' style={{color: variables.redLockColor}} />
                        <Title>Private</Title>
                    </PrivacyOptionTopHalf>
                    <Description>Only board members can see and edit this board</Description>
                </PrivacyOption>
                <PrivacyOption onClick={this.setPublicAndExit}>
                    <PrivacyOptionTopHalf>
                        <IconPublic className='icon-world' style={{color: variables.greenPlanetColor}}/>
                        <Title>Public</Title>
                    </PrivacyOptionTopHalf>
                    <Description>Anyone on internet can see this board. Only board members can edit</Description>
                </PrivacyOption>
            </Container>
        )
        
    }
}

export default CreateBoardFloatingPrivacyMenu
