import React, { Component } from 'react'
import styled from 'styled-components';


const Container = styled.div`
    padding: 5px;
    width: 304px;
    position: absolute;
    background-color: white;
    display: flex;
    flex-direction: column;
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
const InputBox = styled.input`
    padding: 7px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    margin-bottom: 5px;
`;
const ColorsGrid =  styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3px;
`;
const Color = styled.div`
    border-radius: 3px;
    height: 50px;
    border-radius: 4px;
    background-color: pink;
    cursor: pointer;
    :hover {
        opacity: .8;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const SaveButton = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
`;

export class CreateLabelFloatingPopup extends Component {

    state = {
        labelName: '',
        ColorSelected: null
    }

    NameChangeHandler = (e) => {
        this.setState({labelName: e.target.value});
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Create Label</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup}/>
                <Label>Name</Label>
                <InputBox value={this.state.labelName} onChange={this.NameChangeHandler}></InputBox>
                <Label>Select a color</Label>
                <ColorsGrid>
                    <Color></Color>
                    <Color></Color>
                    <Color></Color>
                    <Color></Color>
                    <Color></Color>
                    <Color></Color>
                    <Color></Color>
                </ColorsGrid>
                <ButtonsContainer>
                    <SaveButton>Save</SaveButton>
                </ButtonsContainer>
            </Container>
        )
    }
}

export default CreateLabelFloatingPopup
