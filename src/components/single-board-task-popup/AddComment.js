import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import uniqid from 'uniqid';
import variables from 'variables';


import { createComment } from 'actions/comments';

const Container = styled.div`
`;
const Header = styled.div`
    position: relative;
    margin-bottom: 5px;
`;
const Title = styled.h3`
    font-size: ${variables.taskPopupSectionHeaderFontSize}

`;
const SectionIcon = styled.span`
    position: absolute;
    top: 2px;
    left: -30px;
`;

const TextareaSection = styled.div`
    position: relative;
`;
const UserTag = styled.span`
    position: absolute;
    top: 6px;
    left: -35px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    background-color: #dfe1e6;
    border-radius: 50%;
    text-align: center;
`;
const CommentTextarea = styled.textarea`
    width: 100%;
    padding: 5px;
`;
const SaveButton = styled.button`
    padding: 10px;
`;

const inactiveButton = {
    backgroundColor: '#ebecf0'
}

const activeButton = {
    backgroundColor: 'green'
}

export class AddComment extends Component {

    state = {
        comment: ''
    }

    createComment = () => {
        if (this.state.comment.length) {
            const comment = {};
            comment.id = uniqid();
            comment.userID = this.props.userId;
            comment.taskID = this.props.task.ID;
            comment.comment = this.state.comment;
            comment.timestamp = DateTime.local()
            comment.lastEdited = null;
            this.props.createComment(comment);
        }
    }
    
    commentChangeHandler = (e) => { this.setState({comment: e.target.value}) } 

    render() {
        return (
            <Container>
                <Header>
                    <Title>Add Comment</Title>
                    <SectionIcon className='icon-bubble'></SectionIcon>
                </Header>
                <TextareaSection>
                    <UserTag>D</UserTag>
                    <CommentTextarea onChange={this.commentChangeHandler} placeholder='Write a comment...' rows='6' value={this.state.comment} ></CommentTextarea>
                    <SaveButton onClick={this.createComment} style={this.state.comment.length ? activeButton : inactiveButton}>Save</SaveButton>
                </TextareaSection>
            </Container>
        )
    }
}

export default connect(null, {createComment})(AddComment);
