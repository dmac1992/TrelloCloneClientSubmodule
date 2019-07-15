import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import PopUpTitle from "./PopUpTitle";

const Container = styled.div`
    width: 250px;
    box-shadow: 5px 10px;
    top: 35px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
    padding-bottom: 10px;
`;
const Section = styled.div`
    margin-top: 5px;
    margin-right: 5px;
`;
const MenuLink = styled(Link)`
    padding: 5px;
    padding-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgba(9,30,66,.04);
    }
    display: block;
`;


class MenuPopup extends React.Component {


    render() {
        return (
            <Container>
                <PopUpTitle title="User name" clearPopup={this.props.clearPopup} />
                <Section>
                    <MenuLink to="/profile">Profile</MenuLink>
                    <MenuLink to="/">Cards</MenuLink>
                    <MenuLink to="/">Settings</MenuLink>
                </Section>
                <Section>
                    <MenuLink to="/">Help</MenuLink>
                    <MenuLink to="/">Shortcuts</MenuLink>
                    <MenuLink to="/">Change Language...</MenuLink>
                </Section>
                <Section>
                    <MenuLink to="/">Log Out</MenuLink>
                </Section>
            </Container>
        )
    }
}

export default MenuPopup;

//all going to have piece of state that says whether they are showing their respective popup