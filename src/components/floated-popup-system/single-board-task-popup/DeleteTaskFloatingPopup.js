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

const WarningParagraph = styled.p`
    padding: 5px;
    margin-bottom: 5px;
`

const DeleteButton = styled.button`
    width: 100%;
    padding: 6px;
    background-color: #cf513d;
    color: white;
    :hover {
        color: white;
        background-color: #eb5a46;
    }
`
function DeleteTaskFloatingPopup({coords, clearFloatingPopup, deleteCard}) {
    return (
        <Container style={coords}>
            <Title>Delete Card?</Title>
            <CloseIcon className='icon-times' onClick={clearFloatingPopup} />
            <WarningParagraph>All actions will be removed from the activity feed and you won’t be able to re-open the card. There is no undo.</WarningParagraph>
            <DeleteButton onClick={deleteCard}>Delete</DeleteButton>
        </Container>
    )
}

export default DeleteTaskFloatingPopup
