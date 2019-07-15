import React from 'react'
import styled from 'styled-components';

const TopMenu = styled.ul``;
const TopMenuLink = styled.li`
    display: flex;
    align-items: center;
    padding: 7px;
    border-radius: 3px;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);
    }

`;

const TopMenuLinkIcon = styled.span`
    margin-right: 10px;
`;
const TopMenuName = styled.span``;

function BoardSlideDefault(props) {
    return (
        <TopMenu>
            <TopMenuLink onClick={props.renderAboutContent}>
                <TopMenuLinkIcon className='icon-page-multiple' />
                <TopMenuName>About this Board</TopMenuName>
            </TopMenuLink>
            <TopMenuLink onClick={props.renderBackgroundColorContent}>
                <TopMenuLinkIcon className='icon-cloud' />
                <TopMenuName>Change Background</TopMenuName>
            </TopMenuLink>
            <TopMenuLink onClick={props.renderSearchCardsContent}>
                <TopMenuLinkIcon className='icon-search' />
                <TopMenuName>Search Cards</TopMenuName>
            </TopMenuLink>
            <TopMenuLink >
                <TopMenuLinkIcon className='icon-circle' />
                <TopMenuName>Stickers</TopMenuName>
            </TopMenuLink>
            <TopMenuLink onClick={props.renderMoreContent}>
                <TopMenuLinkIcon className='icon-dot-3' />
                <TopMenuName>More</TopMenuName>
            </TopMenuLink>
        </TopMenu>
    )
}

export default BoardSlideDefault
