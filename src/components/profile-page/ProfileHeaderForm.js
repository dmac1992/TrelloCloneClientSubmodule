import React from 'react'
import styled from 'styled-components';


const Form = styled.form`
    margin-right: auto;
    background-color: yellow;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.div`
    margin: 10px 10px 10px 0px;
`;
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;
const TextInput = styled.input`
    display: block;
    padding: 3px;
    border-radius: 3px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    background-color: gray;
    margin-right: 3px;
    border-radius: 3px;
    padding: 10px 0;
`;

const SaveButton = styled(Button)`
    background-color: green;
    color: white;
`
const BioTextArea = styled.textarea``;


const submitForm = () => console.log("submited form");

function ProfileHeaderForm(props) {
  return (
    <Form>
        <InputContainer>
            <Label htmlFor="profile-header-form-fullname">Full Name</Label>
            <TextInput id="profile-header-form-fullname"></TextInput>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="profile-header-form-username">Username</Label>
            <TextInput id="profile-header-form-username"></TextInput>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="profile-header-form-intials">Initials</Label>
            <TextInput id="profile-header-form-intials"></TextInput>
        </InputContainer>
        <InputContainer>
            <Label htmlFor="profile-header-form-bio">Bio (optional)</Label>
            <BioTextArea id="profile-header-form-bio" />
        </InputContainer>
        <ButtonsContainer>
            <SaveButton onClick={() => submitForm(console.log("submitting form"))}>
                <span>Save</span>
            </SaveButton>
            <Button onClick={props.toggleDetails}>
                <span>Cancel</span>
            </Button>
        </ButtonsContainer>
    </Form>
  )
}

export default ProfileHeaderForm
