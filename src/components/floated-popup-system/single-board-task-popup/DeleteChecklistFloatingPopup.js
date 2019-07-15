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

const Warning = styled.p`
   
`;

const DeleteButton = styled.button`
    padding-top: 8px;
    padding-bottom: 8px;
    color: white;
    background-color: red;
`

//need callback passed in to this.



class DeleteChecklist extends React.Component {

    deleteButtonHandler = () => {
        this.props.deleteChecklist();
        this.props.clearFloatingPopup();
    }

    render() {
        return (
            <Container style={this.props.coords}>
                <Title>Members</Title>
                <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup} />
                <Warning>Deleting a checklist is permanent and there is no way to get it back.</Warning>
                <DeleteButton onClick={this.deleteButtonHandler}>Delete Checklist</DeleteButton>
            </Container>
        )
    }
    }
    

export default DeleteChecklist
