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

const Paragraph = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
`;
const CloseButton = styled.button`
    width: 100%;
    border-radius: 3px;
    background-color: red;
    color: white;
`;


function CloseBoardFloatingPopup(props) {
    return (
        <Container style={props.coords}>
            <Title>Change Visibility</Title>
            <CloseIcon className='icon-times' onClick={this.props.clearFloatingPopup}/>
            <Paragraph>
            You can re-open the board by clicking the “Boards” menu from the header, selecting “View Closed Boards,” finding the board and clicking “Re-open.”
            </Paragraph>
            <CloseButton>Close</CloseButton>
        </Container>
    )
}

export default CloseBoardFloatingPopup
