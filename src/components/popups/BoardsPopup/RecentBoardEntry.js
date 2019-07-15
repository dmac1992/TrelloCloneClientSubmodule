import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    position: relative;
    overflow: hidden;
    :hover :last-child {
        left 0;
    }
`;
const Color = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 3px;
    background-color: beige;
    margin-right: 5px;
`;
const BoardName = styled.span`
    margin-right: auto;
`;


const OptionsContainer = styled.div`
    position: relative;
    transition: left .2s;
    left: 100%;
    display: flex;
    align-items: center;
`

const Cross = styled.span`
    margin-right: 5px;
    transition: transform 0.3s;
    :hover {
        transform: scale(1.2);
    }
`;
const Star = styled.span`
    transition: transform 0.3s;
    :hover {
        transform: scale(1.2);
    }
`;

export class RecentBoardEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            EntryHovered: false
        }
    }

    starBoard = (e) => {
        e.preventDefault();
        const { currentUser, board } = this.props;
        this.props.starBoard(currentUser.id, board.id);
    }

    removeRecentBoard = (e) => {
        e.preventDefault();
        const { currentUser, board } = this.props;
        this.props.removeRecentBoard(currentUser.id, board.id);
    }

    mouseEnterHandler = (e) => {
        this.setState({EntryHovered: true})
    }

    mouseLeaveHandler = (e) => {
        this.setState({EntryHovered: false})
    }

    render() {
        const { board } = this.props;
        return (
            <Container to={`/b/${board.id}`}>
                <Color style={{backgroundColor: board.backgroundColor}} />
                <BoardName>{board.name}</BoardName>
                <OptionsContainer>
                    <Cross className='icon-times' onClick={this.removeRecentBoard}/>
                    <Star className='icon-star' onClick={this.starBoard}/>
                </OptionsContainer>
            </Container>
        )
    }
}

export default RecentBoardEntry
