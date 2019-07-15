import React from 'react'
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

const EmailInput = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
`;
const MessageTextArea = styled.textarea`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
`;

const InviteButton = styled.button`
    background-color: green;
    cursor: pointer;
    color: white;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    width: 100%;
`

const InvalidButton = styled.button`
    background-color: #ebecf0;
    cursor: not-allowed;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    width: 100%;
`;


class CreateBoardFloatingPrivacyMenu extends React.Component {

    state = {
        email: '',
        message: ''
    }

    addressInputChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    messageInputChangeHandler = (e) => {
        this.setState({message: e.target.value})
    }

    sendInvite = (e) => {
        e.preventDefault();
    }

    renderSendInviteButton = () => {
        if ( this.state.email.length > 1 ) {
            return (
                <InviteButton onClick={this.sendInvite}>
                    Send Invitation
                </InviteButton>
            )

        } else {
            return (
                <InvalidButton disabled>
                    Send Invitation
                </InvalidButton>
            )
        }
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Members</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <EmailInput placeholder='Email address or name' value={this.state.email} onChange={this.addressInputChangeHandler}/>
                <MessageTextArea placeholder='Invite message to go along with invite' rows='5' value={this.state.message} onChange={this.messageInputChangeHandler} />
                {this.renderSendInviteButton()}
            </Container>
        )
    }
 
}

export default CreateBoardFloatingPrivacyMenu
