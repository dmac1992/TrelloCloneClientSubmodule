import React from 'react'
import styled from 'styled-components';

import variables from 'variables';

import BoardSlideMenuParent from './single-board-page-slide-menu/BoardSlideMenuParent';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 3px 5px;
    background-color: transparent;
    position: relative;
    font-family: ${variables.primaryFont}
`;

const HeadingTab = styled.div`
    margin-right: 10px
    border-radius: 3px;
    padding: 5px;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
    cursor: default;
`;
const StarTab = styled.div`
    margin-right: 20px;
    cursor: pointer;
    padding: 5px;
    position: relative;
    top: 2px;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;

const TeamTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    padding: 5px;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;

const PrivacyTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;

const BoardCollaboratorsTab = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;
const Collaborator = styled.span`
    border-radius: 50%;
    background-color: #dfe1e6;
    display: block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    position: relative;
    right: 2px;
    :first-of-type {
        right: 0;
    }
`;

const InviteButton = styled.span`
    line-height: 30px;
    height: 30px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;

const OpenSlideMenuButton = styled.span`
    line-height: 30px;
    height: 30px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
`;

const MenuContainer = styled.div`
    position: relative;
    height: 34px;
`;

const LockIcon = styled.span`
    position: relative;
    top: 3px;
    margin-right: 3px;
`;

const PublicIcon = styled.span`
    color: green;
`;

function renderPrivacyIcon(accessibilityLevel)  {
    if ( accessibilityLevel === 'private') {
        return (
            <LockIcon className='icon-lock' />
        )
    } else {
        return <PublicIcon className='icon-world' />
    }
}


function SingleBoardHeader(props) {
    const { board } = props; 
    return (
        <Container>
            <HeadingTab>{board.name}</HeadingTab>
            <StarTab className='icon-star' />
            <TeamTab onClick={props.addTeamPopup}  ref={props.addTeamButtonRef}>
                <span>Personal</span>
            </TeamTab>
            <PrivacyTab className='' ref={props.privacySettingsButtonRef} onClick={props.changePrivacySettings}>
                {renderPrivacyIcon(board.accessibilityLevel)}
                <span>{board.accessibilityLevel}</span>
            </PrivacyTab>
            <BoardCollaboratorsTab>
                <Collaborator ref={props.userAdminButtonRef} onClick={props.changeUserPermissions}>A</Collaborator>
                <Collaborator>B</Collaborator>
                <Collaborator>C</Collaborator>
            </BoardCollaboratorsTab>
            <InviteButton onClick={props.inviteToBoardPopup} ref={props.inviteToBoardButtonRef}>
                Invite
            </InviteButton>
            <OpenSlideMenuButton onClick={props.toggleMenu}>Show Menu...</OpenSlideMenuButton>
            <MenuContainer>
                <BoardSlideMenuParent toggleMenu={props.toggleMenu} setFloatingPopup={props.setFloatingPopup}/>
            </MenuContainer>
        </Container>
    )
}

export default SingleBoardHeader
