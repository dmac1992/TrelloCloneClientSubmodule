import React, { Component } from 'react'
import styled from 'styled-components';


import PopUpTitle from './PopUpTitle';
 

const Container = styled.div`
    width: 300px;
    box-shadow: 5px 10px;
    top: $header-height;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
`;
const Form = styled.form``;
const InputBlock = styled.form`
    margin-bottom: 5px;
    padding: 8px;
    label, input {
        display: block;
        width: 100%;
    }
    input {
        border: 1px solid gainsboro;
        padding: 5px;
        border-radius: 3px;
    }
`;
const Label = styled.label`
    margin-bottom: 5px;
`;

const NameInput = styled.input``;

const DescriptionTextArea = styled.textarea`
    width: 100%;
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 15px;
    border-radius: 4px;
    margin-left: 8px;
    margin-bottom: 8px;
`; 

const DescriptionContainer = styled.div`
    padding: 8px;
    border-top: 1px solid #DCDCDC;
    width: 100%;
    p:first-of-type {
        margin-bottom: 8px;
    }
`;


class CreateTeamPopup extends Component {

    state = {
        name: '',
        description: ''
    }

    NameInputChangeHandler = (e) => {
        this.setState({name: e.target.value})
    }

    DescriptionInputChangeHandler = (e) => {
        this.setState({description: e.target.value})
    }

    enabledButtonStyles = {
        backgroundColor: 'green',
        color: 'white',
    }

    renderSubmitButton = () => {

    }

    render() {

    return (
        <Container>
            <PopUpTitle title="Create Team" clearPopup={this.props.clearPopup}/>
            <Form>
                <InputBlock>
                    <Label htmlFor="team_name">Name</Label>
                    <NameInput onChange={this.NameInputChangeHandler} value={this.state.name} component="input" type="text" />
                </InputBlock>
                <InputBlock className="create-team-form-inputblock">
                    <Label htmlFor="team_description">Description</Label>
                    <DescriptionTextArea onChange={this.DescriptionInputChangeHandler} value={this.state.description} component="input"  rows='6' />
                </InputBlock>
                <SubmitButton type="submit"><span>Create</span></SubmitButton>
            </Form>
            <DescriptionContainer>
                <p>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends</p>
                <p>Business Class gives your team more security, administrative controls, and unlimited Power-Ups. <span>Learn More.</span></p>
            </DescriptionContainer>
        </Container>
    )
  }
}


export default CreateTeamPopup;