import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div``;

const TopPanel = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
`;

const SearchInput = styled.input`
    padding: 7px;
    flex-grow: 1;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    border-radius: 3px;
`;

const SwitchButton = styled.button`
    background-color: #e4f0f6;
    border-radius: 3px;
    margin-right: 5px;
    padding: 5px;
    height: 32px;
    white-space: nowrap;
`;


// const ArchivedCard = styled.div``;
// const ArchivedCardName = styled.span``;
// const ArchivedCardWatching = styled.span``;
// const ArchivedCardChecklist = styled.span``;


class BoardSlideArchive extends Component {

    state = {
        searchInput: '',
        showingCards: true
    }

    switchToLists = () => { 
        this.setState({
            searchInput: '',
            showingCards: false
        })
    }

    switchToCards = () => { 
        this.setState({
            searchInput: '',
            showingCards: true
        })
    }

    renderSwitchButton = () => {
        if (this.state.showingCards) {
            return (
                <SwitchButton onClick={this.switchToLists}>Switch to Lists</SwitchButton>
            )
        } else {
            return (
                <SwitchButton onClick={this.switchToCards}>Switch to Cards</SwitchButton>
            )
        }
    }
    
    searchChangeHandler = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render() {
        return (
            <Container>
                <TopPanel>
                    <SearchInput value={this.state.searchInput} onChange={this.searchChangeHandler}/>
                    {this.renderSwitchButton()}
                </TopPanel>
            </Container>
        )
    }
}

export default BoardSlideArchive
