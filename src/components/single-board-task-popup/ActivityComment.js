import React , {PureComponent} from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon';


import ActivityUserDPPopup from 'components/floated-popup-system/single-board-task-popup/ActivityUserDPPopup';

const Container = styled.li`
    margin-top: 4px;
    padding-left: 45px;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const DP = styled.span`
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #dfe1e6;
    color: #172b4d;
    border-radius: 50%;
    top: 10px;
    left: 0;
    cursor: pointer;
`;

const NameDateContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;
const Username = styled.span`
    margin-right: 5px;
`;

const DatePosted = styled.span`
    font-size: 12px;
`;

const Comment = styled.p`
    background-color: white;
    padding: 7px;
    word-break: break-word;
    margin-bottom: 8px;
`;

const TextBreakDash = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;


const BottomButtons = styled.div`
    display: flex;
    align-items: center;
`;
const EmoticonsLink = styled.span``;
const Edit = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;
const Delete = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const EditTextArea = styled.textarea`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
`;
const EditFormBottomPanel = styled.div`
    display: flex;
    align-items: center;
`;
const SaveButton = styled.button`
    padding: 5px;
    color: white;
    background-color: green;
    margin-left: 5px;
`;
const CloseEditFormIcon = styled.span`
    font-size: 18px;
`;


class ActivityComment extends PureComponent {
    
    constructor(props) {
        super(props);
        this.DPRef = React.createRef();
        this.state = {
            editingComment: false,
            Comment: props.comment.comment
        }
    }

    spawnActivityUserPopup = () => {
        this.props.setFloatingPopup(ActivityUserDPPopup, this.DPRef, { user: this.props.user });
    }

    openEditForm = () => this.setState({editingComment: true});
    closeEditForm = () => this.setState({editingComment: false});
        
    deleteComment = () => {
        this.props.deleteComment(this.props.comment.id);
    }

    renderEditForm = () => {
        return (
            <>
                <EditTextArea />
                <EditFormBottomPanel>
                    <SaveButton>Save</SaveButton>
                    <CloseEditFormIcon className='icon-times' onClick={this.closeEditForm} />
                </EditFormBottomPanel>
            </>
        )
    }

    renderComment = () => {
        const { comment  } = this.props;
        return (
            <>
                <Comment>{comment.comment}</Comment>
                <BottomButtons>
                <EmoticonsLink className='icon-smile-o' />
                <TextBreakDash>-</TextBreakDash>
                <Edit onClick={this.openEditForm}>Edit</Edit>
                <TextBreakDash>-</TextBreakDash>
                <Delete onClick={this.deleteComment}>Delete</Delete>
                </BottomButtons>
            </>
        )
    }

    render() {
        const {user, comment} = this.props;
        return (
            <Container>
                <DP onClick={this.spawnActivityUserPopup} ref={this.DPRef}>{user.initial}</DP>
                <NameDateContainer>
                    <Username>{user.username}</Username>
                    <DatePosted>{comment.timestamp.toLocaleString(DateTime.DATETIME_MED)}</DatePosted>
                </NameDateContainer>
                {  this.state.editingComment ? this.renderEditForm() : this.renderComment() }
            </Container>
        )
    }
}

export default ActivityComment
