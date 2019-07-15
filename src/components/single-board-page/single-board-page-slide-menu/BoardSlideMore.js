import React from 'react'
import styled from 'styled-components';


const Container = styled.div``;
const Menu = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const LinkWithIcon = styled.li`
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: rgba(9,30,66,.13);
    }
`;

const LinkText= styled.span``;

const Icon = styled.span`
    margin-right: 10px;
`;

const LinkNoIcon = styled.li`
    padding-left: 30px;
`;



function BoardSlideMore(props) {
    return (
        <Container>
            <Menu>
                <LinkWithIcon onClick={props.renderSettingsContent}>
                    <Icon className='icon-cog'/>
                    <LinkText>Settings</LinkText>
                </LinkWithIcon>
                <LinkWithIcon onClick={props.renderLabelsContent}>
                    <Icon className='icon-tag'/>
                    <LinkText>Labels</LinkText>
                </LinkWithIcon>
                {/* <LinkWithIcon>
                    <Icon className='icon-file-submodule'/>
                    <LinkText>Collections</LinkText>
                </LinkWithIcon> */}
                <LinkWithIcon  onClick={props.renderArchivedContent} >
                    <Icon className='icon-archive'/>
                    <LinkText>Archived Items</LinkText>
                </LinkWithIcon>
            </Menu>
            <Menu>
                <LinkWithIcon>
                    <Icon className='icon-envelope'/>
                    <LinkText>Email-to-board Settings</LinkText>
                </LinkWithIcon>
                <LinkWithIcon>
                    <Icon className='icon-eye'/>
                    <LinkText>Watch</LinkText>
                </LinkWithIcon>
                <LinkWithIcon>
                    <Icon className='icon-clone' />
                    <LinkText>Copy Board</LinkText>
                </LinkWithIcon>
                <LinkWithIcon>
                    <Icon className='icon-share'/>
                    <LinkText>Print and Export</LinkText>
                </LinkWithIcon>
            </Menu>
            <Menu>
                <LinkNoIcon>
                    <LinkText>Close board...</LinkText>
                </LinkNoIcon>
            </Menu>
        </Container>
    )
}

export default BoardSlideMore
