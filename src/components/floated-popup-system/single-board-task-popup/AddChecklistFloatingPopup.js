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

const AddButton = styled.a`
    color: white;
    background-color: green;
    text-align: center;
    padding: 5px 10px;
    margin-top: 10px;
`;

export class AddChecklist extends Component {



    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Add Checklist</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Input ></Input>
                <AddButton>Add</AddButton>
            </Container>
        )
    }
}

export default AddChecklist
