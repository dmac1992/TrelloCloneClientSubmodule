import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { DateTime } from 'luxon'

import variables from 'variables';


import { createTask } from 'actions/tasks';


const Container = styled.div``;
const TitleBox = styled.textarea`
    width: 100%;
    font-size: 18px;
    padding: 5px;
    font-family: ${variables.primaryFont}
`;
const BottomMenuContainer = styled.div`
    line-height: 30px;
    height: 30px;
    display: flex;
`;

const AddCardButton = styled.button`
    height: 100%;
    background-color: ${variables.greenButtonColor}
    padding: 5px 10px;
    border-radius: 3px;
    color: white;
    margin-right: 5px;
    :hover {
        background-color: ${variables.greenButtonHoverColor}
    }
`;

const CloseFormIcon = styled.span`
    padding: 5px;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
    cursor: pointer;
`;

const OpenMenuIcon = styled.span`
    margin-left: auto;
    padding: 5px;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
    cursor: pointer;
`;

export class AddCardForm extends Component {

    state = {
        formInput: ''
    }

    formInputChangeHandler = (e) => {
        this.setState({formInput: e.target.value})
    }

    createTask = () => {

        const { tasks, sprint, userId } = this.props;

        const newTask = {
            ID: uniqid(),
            name: this.state.formInput,
            description: '',
            created: DateTime.local(),
            sprintID: sprint.id,
            boardID: sprint.boardID,
            userID: userId,
            sprintPosition:  Math.max.apply(null, tasks.filter(task => task.sprintID === sprint.id).map(task => task.sprintPosition)) + 1,
            archived: false,
            watched: false
        }

        this.props.createTask(newTask);
        this.props.closeForm();
    }

    render() {
        return (
            <Container>
                <TitleBox rows='5' placeholder='task title...' ref={this.props.addCardFormInputRef} onChange={this.formInputChangeHandler} value={this.state.formInput}></TitleBox>
                <BottomMenuContainer>
                    <AddCardButton onClick={this.createTask}>Add Card</AddCardButton>
                    <CloseFormIcon className='icon-times' onClick={this.props.closeForm}></CloseFormIcon>
                    <OpenMenuIcon className='icon-dot-3'></OpenMenuIcon>
                </BottomMenuContainer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId,
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { createTask })(AddCardForm)
