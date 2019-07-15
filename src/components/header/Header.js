import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withRouter } from "react-router";
import styled from 'styled-components';

import variables from 'variables';

import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import LeftPopUp from './LeftPopUp';
import RightPopUp from './RightPopUp';

//popups
import BoardsPopup from 'components/popups/BoardsPopup/BoardsPopup';
import CreatePopup from 'components/popups/CreatePopup';
import NotificationsPopup from 'components/popups/NotificationsPopup';
import MenuPopup from 'components/popups/MenuPopup';

import * as headerActions from 'actions/header';

//icons
import 'styles/icons.css';


const HeaderContainer =  styled.div`
    background-color: ${variables.primaryColorDark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5px;
    height: 35px;
    font-family: ${variables.primaryFont}
`;
//


//this is not working as intended 
const HeaderButtonGroup = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    position: relative;
    > * {
        margin-left: 2.5px;
        margin-right: 2.5px;
    }
    :first-child {
        margin-left: 0px;
    }
    :last-child {
        margin-right: 0px;
    }
`;

class Header extends React.PureComponent {

    constructor() {
        super();
        document.addEventListener("click", (e) => {
            //if click outside header container clear all header popups.
            let headerContainer = document.querySelector(".header-container");
            //check if redux store is already null
            if (!headerContainer.contains(e.target)) {
                this.clearHeaderPopups();
            }
        }, false);
    }

    navigateHome = () => {
        this.props.history.push("/");
    }

    clearHeaderPopups = () => {
        const { activeLeftPopUp, activeRightPopUp } = this.props;
        if ( activeLeftPopUp || activeRightPopUp) {
            this.props.setActiveRightPopUp(null);
            this.props.setActiveLeftPopUp(null);
        }
    }

    clearLeftPopup = () => {
        if ( this.props.activeLeftPopUp ) {
            this.props.setActiveLeftPopUp(null);
        }
    }

    clearRightPopup = () => {
        if ( this.props.activeRightPopUp ) {
            this.props.setActiveRightPopUp(null);
        }
    }

    setLeftHeaderPopupBoardsPopup = () => {
        this.props.setActiveLeftPopUp(BoardsPopup);
    }

    setRightHeaderPopupCreate = () => {
        this.props.setActiveRightPopUp(CreatePopup);
    }

    setRightHeaderPopupNotifications = () => {
        this.props.setActiveRightPopUp(NotificationsPopup);
    }

    setRightHeaderPopupMenu = () => {
        this.props.setActiveRightPopUp(MenuPopup);
    }

    

    render() {
        //current active popups on store
        const { activeLeftPopUp, activeRightPopUp } = this.props;
        //set current active headerpopups
        return (
            <HeaderContainer className="header-container" >
                <HeaderButtonGroup>
                    <HeaderButton icon="icon-home"  onClick={this.navigateHome}></HeaderButton>
                    <HeaderButton text="Boards" onClick={this.setLeftHeaderPopupBoardsPopup} icon="icon-page-multiple" />
                    <HeaderSearch />
                    {activeLeftPopUp ? <LeftPopUp Popup={activeLeftPopUp} clearPopup={this.clearLeftPopup} /> : null}
                </HeaderButtonGroup>
                <HeaderButtonGroup>
                    <HeaderButton  onClick={this.setRightHeaderPopupCreate} text="Create" icon="icon-plus"   />
                    <HeaderButton  onClick={this.setRightHeaderPopupNotifications} icon="icon-bell"/>
                    <HeaderButton  onClick={this.setRightHeaderPopupMenu} icon="icon-user"/>
                    {activeRightPopUp ? <RightPopUp Popup={activeRightPopUp} clearPopup={this.clearRightPopup} /> : null}
                </HeaderButtonGroup>
             </HeaderContainer>
        )
    }
}

const mapStateToProps = (state) => ({ ...state.header });

const enhance = compose(
    withRouter,
    connect(mapStateToProps, { ...headerActions })
);

export default enhance(Header); 
