import React, { Component } from 'react'
import styled from 'styled-components';

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

const Form = styled.form`
    padding: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(9,30,66,.13);
`;
const Label = styled.label`
    display: block;
    margin-bottom: 3px;
`;
const Input = styled.input`
    box-shadow: inset 0 0 0 2px #dfe1e6;
    background-color: #fafbfc;
    color: #172b4d;
    padding: 7px;
    width: 100%;
`;
const InputLabelBlock = styled.div``;
const BioTextarea = styled.textarea`
    box-shadow: inset 0 0 0 2px #dfe1e6;
    background-color: #fafbfc;
    color: #172b4d;
    padding: 7px;
    width: 100%;
`
const SaveButton = styled.button`
    border-radius: 3px;
    padding: 7px;
    background-color: green;
    color: white;
`;
const InitialsExplanation = styled.p`
    padding: 5px;
`;


export class ChangeNameAndBioFloatingPopup extends Component {

    state = {
        Fullname: '',
        Initials: '',
        Username: '',
        Bio: ''
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({
            Fullname: user.fullname,
            Initials: user.initial,
            Username: user.username,
            Bio: ''
        });
    }

    FullnameChangeHandler = (e) => {
        this.setState({Fullname: e.target.value});
    }
    InitialsChangeHandler = (e) => { 
        this.setState({Initials: e.target.value});
    }
    UsernameChangeHandler = (e) => { 
        this.setState({Username: e.target.value});
    }
    BioChangeHandler = (e) => { 
        this.setState({Bio: e.target.value});
    }

    render() {
        const { coords, clearFloatingPopup } = this.props;
        return (
            <Container style={coords}>
                <Title>Change Name and Bio</Title>
                <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
                <Form>
                    <InputLabelBlock>
                        <Label htmlFor='change-name-bio-fullname-input' >Full Name</Label>
                        <Input id='change-name-bio-fullname-input'onChange={this.FullnameChangeHandler} value={this.state.Fullname}></Input>
                    </InputLabelBlock>

                    <InputLabelBlock>
                        <Label htmlFor='change-name-bio-initials-input'>Initials</Label>
                        <Input id='change-name-bio-initials-input' onChange={this.InitialsChangeHandler} value={this.state.Initials}></Input>
                    </InputLabelBlock>

                    <InputLabelBlock>
                        <Label htmlFor='change-name-bio-username-input'>Username</Label>
                        <Input id='change-name-bio-username-input' onChange={this.UsernameChangeHandler} value={this.state.Username}></Input>
                    </InputLabelBlock>
                    <InputLabelBlock>
                        <Label htmlFor='change-name-bio-bio-input'>Bio</Label>
                        <BioTextarea rows='5' id='change-name-bio-bio-input' onChange={this.BioChangeHandler} value={this.state.Bio}></BioTextarea>
                    </InputLabelBlock>
                    <SaveButton>Save</SaveButton>
                </Form>
                <InitialsExplanation>Your initials are used in place of your avatar if your avatar is not set. Usernames require a minimum of 3 characters, alphanumeric only.</InitialsExplanation>
            </Container>
        )
    }
}

export default ChangeNameAndBioFloatingPopup
