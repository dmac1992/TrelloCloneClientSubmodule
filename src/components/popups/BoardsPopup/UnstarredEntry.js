import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Container = styled(Link)`
    display: flex;
    align-items: center;
    padding: 5px;
    :hover {
        background-color: #f6f8fa;
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
const Star = styled.span`
    color: #dfe1e6;
    transition: transform .3s;
    cursor: pointer;
    :hover {
        transform: scale(1.5);
    }
`;

export class UnstarredBoardEntry extends Component {

    constructor(props) {
        super(props);
    }

    starBoard = (e) => {
        e.preventDefault(); 
        const { currentUser, board } = this.props;
        this.props.starBoard(currentUser.id, board.id)
    }

    
    render() {
        const { board } = this.props;
        return (
            <Container to={`/b/${board.id}`}>
                <Color style={{backgroundColor: board.backgroundColor}}/>
                <BoardName>{board.name}</BoardName>
                <Star className='icon-star' onClick={this.starBoard}/>
            </Container>
        )
    }

}

export default UnstarredBoardEntry
