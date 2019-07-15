import React, { Component } from 'react'
import styled from 'styled-components';

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

const Label = styled.label`
    margin-bottom: 5px;
`;
const Input = styled.input`
    padding: 5px;
    width: 100%;
`;
const BioTextarea = styled.textarea`
    width: 100%;
`;


export class BoardChangeNameBioFloatingPopup extends Component {

    state = {
        FullName: '',
        Initials: '',
        Username: '',
        Bio: ''
    }

    FullNameChangeHandler = (e) => { 
        this.setState({FullName: e.target.value})
    }
    InitialsChangeHandler = (e) => { 
        this.setState({Initials: e.target.value})
    }
    UsernameChangeHandler = (e) => { 
        this.setState({Username: e.target.value})
    }
    BioChangeHandler = (e) => { 
        this.setState({Bio: e.target.value})
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <CloseIcon class='icon-times' onClick={this.props.clearFloatingPopup}/>
                <Title>Change Name and Bio</Title>
                <Label>Full Name</Label>
                <Input onChange={this.FullNameChangeHandler} value={this.state.FullName}></Input>
                <Label>Initials</Label>
                <Input onChange={this.InitialsChangeHandler} value={this.state.Initials}></Input>
                <Label>Username</Label>
                <Input onChange={this.UsernameChangeHandler} value={this.state.Username}></Input>
                <Label>Bio</Label>
                <BioTextarea rows='5' onChange={this.BioChangeHandler} value={this.state.Bio}></BioTextarea>
            </Container>
        )
    }
}

export default BoardChangeNameBioFloatingPopup
