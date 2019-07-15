import React from 'react'
import styled from 'styled-components';

const Container = styled.div``;
const Menu = styled.ul`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;
const MenuItem = styled.li`
    padding: 7px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    :hover  {
        background-color: rgba(9,30,66,.13);
    }
`;
const TopText = styled.span`
    margin-bottom: 3px;
    font-size: 18px;
`;
const BottomText = styled.span`
    font-size: 12px;
`;


class  BoardSlideSettings extends React.Component {

    state = {

    }

    render() {
        return (
            <Container>
                <Menu>
                    <MenuItem>
                        <TopText>Change Team...</TopText>
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem>
                        <TopText>Enable Card Cover Images</TopText>
                        <BottomText>Show images on front of cards</BottomText>
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem>
                        <TopText>Commenting Permissions...</TopText>
                        <BottomText>Members</BottomText>
                    </MenuItem>
                    <MenuItem>
                        <TopText>Add/Remove Permissions...</TopText>
                        <BottomText>Members</BottomText>
                    </MenuItem>
                </Menu>
            </Container>
        )
    }
    
}

export default BoardSlideSettings
