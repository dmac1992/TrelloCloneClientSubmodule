import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 5px 10px;
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

const Input = styled.input`
    display: block;
    width: 100%;
    border: none;
    background-color: #fafbfc;
    color: #172b4d;
    padding: 8px 12px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    margin-bottom: 10px;
`;

const LabelsList = styled.ul``;

const Label = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 5px;
`;

const ColorBar = styled.span`
    flex-grow: 1;
    background-color: red;
    height: 40px;
    cursor: pointer;
`;
const EditIcon = styled.span`
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-left: 5px;
    :hover {
        background: rgba(9,30,66,.13);
    }
`;

const CreateLabelButton = styled.a`
    padding: 8px;
    height: 40px;
    line-height: 25px;
    color: #172b4d;
    display: block;
    cursor: pointer;
    background-color: rgba(9,30,66,.08);
    :hover { 
        background-color: rgba(9,30,66,.13); 
    }
`;

export class AddLabels extends Component {
    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Label</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Input ></Input>
                <LabelsList>
                    <Label>
                        <ColorBar />
                        <EditIcon className='icon-pencil' />
                    </Label>
                    <Label>
                        <ColorBar />
                        <EditIcon className='icon-pencil' />
                    </Label>
                    <Label>
                        <ColorBar />
                        <EditIcon className='icon-pencil' />
                    </Label>
                </LabelsList>
                <CreateLabelButton>Create a new label</CreateLabelButton>
        </Container>
        )
    }
}

export default AddLabels
