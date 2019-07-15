import React from 'react'
import styled from 'styled-components';

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

const ActionsContainer = styled.div`
    padding-left: 30px;
    > div:first-of-type {
        border-top: 1px solid rgba(9,45,66,.13);
    }
`;

const Action = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(9,45,66,.13);
`;

const DpContainer = styled.div``;
const Dp = styled.img``;
const ActionTextContainer = styled.div``;
const ActionCreatorText = styled.div`
    margin-bottom: 3px;
`;
const ActionMetaText = styled.div``;
// const ActionCommentText = styled.div``; 
//TODO unused 'ActionCommentText' component

function ProfileFeedActivity(props) {
  return (
    <div>
        <HeaderContainer>
            <span class="icon-bar-chart"></span>
            <span>Activity</span>
        </HeaderContainer>
        <ActionsContainer>
            <Action>
                <DpContainer>
                    <Dp />
                </DpContainer>
                <ActionTextContainer>
                    <ActionCreatorText>
                        <span>UserabC added Mccarthyd to web application</span>
                    </ActionCreatorText>
                    <ActionMetaText>
                        <span>Apr 3 at 6:52 PM - on board [2109 T1] SIT302</span>
                    </ActionMetaText>
                </ActionTextContainer>
            </Action>
        </ActionsContainer>
    </div>
  )
}

export default ProfileFeedActivity
