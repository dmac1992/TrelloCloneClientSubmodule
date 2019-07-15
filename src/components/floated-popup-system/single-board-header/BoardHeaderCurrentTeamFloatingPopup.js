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


const Menu = styled.ul`

`

const MenuItem = styled.li``


function BoardAddTeamFloatingPopup(props) {
    return (
        <Container style={props.coords}>
            <Title>current team name</Title>
            <CloseIcon className='icon-times' onClick={props.clearFloatingPopup}/>
            <Menu>
                <MenuItem>Change team...</MenuItem>
                <MenuItem>View Team Page</MenuItem>
            </Menu>
        </Container>
    )
}

export default BoardAddTeamFloatingPopup
