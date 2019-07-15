import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import variables from 'variables';

const Container = styled(Link)`
    height: 100px;
    position: relative;
    overflow: hidden;
    padding: 5px;
    cursor: pointer;
    :hover > div {
    right: 25px;
    }
    :hover .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    }
`

const Title = styled.span`
    font-size: 20px;
    margin-top: 5px;
    margin-left: 5px;
    display: inline-block;
    position: relative;
    z-index: 2;
    color: white;
    font-family: ${variables.primaryFont};
    font-weight: bold;
`;

const BottomIconsContainer = styled.div`
    position: absolute;
    bottom: 5px;
    width: 20px;
    right: -20px;
    transition: right .5s;
    z-index: 2;
   

`;

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%; 
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transition: background-color .2s;
`;

const Star = styled.span `
    color: #dfe1e6;
`

export class UnstarredBoardLink extends Component {

    starBoard = (e) => {
        e.preventDefault();
        this.props.starBoard(this.props.userId, this.props.board.id);
    }

    render() {
        const { board } = this.props;
        return (
            <Container to={`/b/${board.id}`} style={{backgroundColor: board.backgroundColor}}>
                <Overlay className="overlay"/>
                <Title>{board.name}</Title> 
                <BottomIconsContainer>
                <Star className="icon-star" onClick={this.starBoard}  />
                </BottomIconsContainer>
            </Container>
        )
    }
}

export default UnstarredBoardLink
