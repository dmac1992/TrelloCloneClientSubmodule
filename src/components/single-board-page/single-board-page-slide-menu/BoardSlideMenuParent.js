import React from 'react'
import styled from 'styled-components';

import BoardSlideAbout from './BoardSlideAbout';
import BoardSlideBackgroundColor from './BoardSlideBackgroundColor';
import BoardSlideDefault from './BoardSlideDefault';
import BoardSlideLabels from './BoardSlideLabels';
import BoardSlideMore from './BoardSlideMore';
import BoardSlideSearchCards from './BoardSlideSearchCards';
import BoardSlideSettings from './BoardSlideSettings';
import BoardSlideColors from './BoardSlideColors';
import BoardSlideArchive from './BoardSlideArchive';


const Container = styled.div`
    position: absolute;
    width: 350px;
    right: -350px;
    height: 100vh;
    background-color: #f4f5f7;
    padding: 0 20px;
    z-index: 2;
`;

const Header = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;
    padding: 15px;
    margin-left: 5px;
    margin-right: 5px;
    .popup-close {
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
`;

const GoBackArrow = styled.span`
    position: absolute;
    left: 10px;
    cursor: pointer
    font-size: 20px;
`


class BoardSlideMenuParent extends React.Component {

    state = {
        menuTitle: 'Menu',
        MenuContentComponent: BoardSlideDefault,
        GoBackMethod: null
    }

    renderAboutContent = () => { 
        this.setState({
            menuTitle: 'About',
            MenuContentComponent: BoardSlideAbout,
            GoBackMethod: this.renderDefaultContent
        })
    }

    renderBackgroundColorContent = () => {
        this.setState({
            menuTitle: 'Change Background',
            MenuContentComponent: BoardSlideBackgroundColor,
            GoBackMethod: this.renderDefaultContent
        })
    }

    renderDefaultContent = () => {
        this.setState({
            menuTitle: 'Menu',
            MenuContentComponent: BoardSlideDefault,
            goBackContentComponent: null
        })
    }

    renderLabelsContent = () => {
        this.setState({
            menuTitle: 'Labels',
            MenuContentComponent: BoardSlideLabels,
            GoBackMethod: this.renderMoreContent
        })
    }

    renderMoreContent = () => {
        this.setState({
            menuTitle: 'More',
            MenuContentComponent: BoardSlideMore,
            GoBackMethod: this.renderDefaultContent
        })
    }

    renderSearchCardsContent = () => {
        this.setState({
            menuTitle: 'Search Cards',
            MenuContentComponent: BoardSlideSearchCards,
            GoBackMethod: this.renderDefaultContent
        })
    }

    renderSettingsContent = () => {
        this.setState({
            menuTitle: 'Settings',
            MenuContentComponent: BoardSlideSettings,
            GoBackMethod: this.renderMoreContent
        })
    }

    renderColorsContent = () => {
        this.setState({
            menuTitle: 'Colors',
            MenuContentComponent: BoardSlideColors,
            GoBackMethod: this.renderBackgroundColorContent
        })
    }

    renderArchivedContent = () => {
        this.setState({
            menuTitle: 'Archive',
            MenuContentComponent: BoardSlideArchive,
            GoBackMethod: this.renderMoreContent
        })
    }

    render () {
        const { menuTitle, MenuContentComponent } = this.state;
        return (
            <Container id='board-slide-menu'>
                <Header>
                    {this.state.GoBackMethod ? <GoBackArrow className='icon-angle-left' onClick={this.state.GoBackMethod} /> : null}
                    <span className="popup-title">{menuTitle}</span>
                    <span className="popup-close icon-times" onClick={this.props.toggleMenu}></span>
                </Header>
                <MenuContentComponent
                    renderAboutContent={this.renderAboutContent}
                    renderBackgroundColorContent={this.renderBackgroundColorContent}
                    renderDefaultContent={this.renderDefaultContent}
                    renderLabelsContent={this.renderLabelsContent}
                    renderMoreContent={this.renderMoreContent}
                    renderSearchCardsContent={this.renderSearchCardsContent}
                    renderSettingsContent={this.renderSettingsContent}
                    renderColorsContent={this.renderColorsContent}
                    renderArchivedContent={this.renderArchivedContent}
                    setFloatingPopup={this.props.setFloatingPopup}
                />
            </Container>
        )
    }
   
}

export default BoardSlideMenuParent


