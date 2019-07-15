import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    > span:first-of-type {
        margin-right: 10px;
    }
    > span:nth-of-type(2) {
        font-weight: bold;
    }
`;

const TeamList = styled.ul`
    padding-left: 30px;
    > li:last-of-type {
        border-bottom: 1px solid rgba(9,45,66,.13);
    }
`;
const Team = styled.li`
    padding: 5px;
    border-top: 1px solid rgba(9,45,66,.13);
`;


function ProfileFeedTeams() {
  return (
    <Container>
        <HeaderContainer>
            <span className="icon-users"></span>
            <span>Teams</span>
        </HeaderContainer>
        <TeamList>
            <Team>
                <span>my team</span>
            </Team>
        </TeamList>
    </Container>
  )
}

export default ProfileFeedTeams
