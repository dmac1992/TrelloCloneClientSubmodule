import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background-color: orange;
    padding: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;
const Button = styled(Link)`
    display: flex;
    width: 100px;
    padding: 7px 10px;
    justify-content: center;
    align-items: center;
    background-color: grey;
    border-radius: 3px;
    margin-right: 10px;
    span:first-of-type {
        margin-right: 5px;
    }

`;
const TeamName = styled.span`
    margin-left: 5px;
    margin-right: 10px;
`;


function TeamsFeed(props) {
  return (
    <Container>
        <span className="icon-users"></span>
        <TeamName>Team Name</TeamName>
        <Button to="/">
            <span className="icon-page-multiple"></span>
            <span>Boards</span>
        </Button>
        <Button to="/">
            <span className="icon-user"></span>
            <span>Meetings</span>
        </Button>
        <Button to="/">
            <span className="icon-cog"></span>
            <span>Settings</span>
        </Button>
    </Container>
  )
}

export default TeamsFeed
