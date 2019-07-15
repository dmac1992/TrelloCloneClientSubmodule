import React from 'react';
import  { connect } from 'react-redux';
import styled from 'styled-components';

import { setActiveModal } from "actions/modal";


import PopUpTitle from "./PopUpTitle";
import CreateBoardModal from "components/modals/CreateBoardModal";

import { setActiveRightPopUp } from 'actions/header';


import CreateTeamPopup from "./CreateTeamPopup";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    z-index: 5;
    box-shadow: 5px 10px;
    top: 35px;
    box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.75);
    background-color: #fff;
    z-index: 100;
`;

const Section = styled.div`
    padding: 15px;
    cursor: pointer;
    &:hover {
        background-color: rgba(9,30,66,.04);
`;

const SectionTitle = styled.span`
    display: block;
    margin-bottom: 3px;
    font-weight: bold;
    position: relative;
`;

const SectionSpan = styled.span`

`;

class CreatePopup extends React.Component {

    state = {

    }

    createBoardHandler = () => { 
        this.props.setActiveModal(CreateBoardModal);  
        this.props.setActiveRightPopUp(null);
     }

    setActiveRightPopup = () => {
        this.props.setActiveRightPopUp(CreateTeamPopup);
    }

    render() {
        return (
            <Container className="popup">
                <PopUpTitle title="Create" clearPopup={this.props.clearPopup}/>
                <Section onClick={this.createBoardHandler}>
                    <SectionTitle>Create Board...</SectionTitle>
                    <SectionSpan>A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</SectionSpan>
                </Section>
                <Section onClick={this.setActiveRightPopup}>
                    <SectionTitle>Create Team...</SectionTitle>
                    <SectionSpan>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</SectionSpan>
                </Section>
                <Section>
                    <SectionTitle>Create Business Team...</SectionTitle>
                    <SectionSpan>With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</SectionSpan>
                </Section>
             </Container>
        )
    }
}

export default connect(null, { setActiveModal, setActiveRightPopUp })(CreatePopup);

//all going to have piece of state that says whether they are showing their respective popup