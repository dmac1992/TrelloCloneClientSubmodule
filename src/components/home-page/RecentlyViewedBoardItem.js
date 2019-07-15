import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from 'variables';


const BoardsListItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color ${variables.hoverBackgroundTransitionSpeed};
  border-radius: 3px;
  margin-bottom: 3px;
  cursor: pointer;
  .icon-star {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      align-self: flex-end;
      margin-left: auto;
  }
`;

const ItemColor = styled.span`
  background-color: blue;
  width: 32px;
  height: 28px;
  border-radius: 3px;
  margin-right: 5px;
`;

const UnstarredIcon = styled.span`
  color: #dfe1e6;
`;

const StarredIcon = styled.span`
  color: #ffce00
`;

export class RecentlyViewedBoardItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starHovered: false,
            itemHovered: false,
        }
        this.itemRef = React.createRef();
        this.starRef = React.createRef();
    }

    mouseEnterItem = () => { this.setState({itemHovered: true})};
    mouseLeaveItem = () => { this.setState({itemHovered: false})};
    starMouseEnter = () => { this.setState({starHovered: true})};
    starMouseLeave = () => { this.setState({starHovered: false})};

   
    starBoard = (e) => {
        e.preventDefault();
        const {starBoard, currentUser, board } = this.props;
        starBoard(currentUser.id, board.id);
    }

    unstarBoard = (e) => {
        e.preventDefault();
        const {unstarBoard, currentUser, board } = this.props;
        unstarBoard(currentUser.id, board.id);
    }

   

    render() {
        const {  board, currentUser } = this.props;
        const { itemHovered, starHovered } = this.state;
        return (
            <BoardsListItem 
                ref={this.itemRef} 
                to={`/b/${board.id}`} 
                onMouseEnter={this.mouseEnterItem} 
                onMouseLeave={this.mouseLeaveItem} 
                style={{backgroundColor: itemHovered === true && starHovered === false ? variables.lightGrayscale : null}}>
                <ItemColor style={{backgroundColor: board.backgroundColor}}/>
                <span>{board.name}</span>
                {currentUser.starredBoards.includes(board.id)
                  ? (
                    <StarredIcon 
                        style={{backgroundColor: starHovered === true ? '#f6f8fa' : null}}
                        ref={this.starRef} 
                        className='icon-star'
                        onMouseEnter={this.starMouseEnter}
                        onMouseLeave={this.starMouseLeave}
                        onClick={this.unstarBoard}
                    />
                  )
                  : <UnstarredIcon 
                        style={{backgroundColor: starHovered === true ? '#f6f8fa' : null}}
                        ref={this.starRef} 
                        className='icon-star' 
                        onMouseEnter={this.starMouseEnter}
                        onMouseLeave={this.starMouseLeave}
                        onClick={this.starBoard}
                    />
                }
            </BoardsListItem>
        )
    }
}

export default RecentlyViewedBoardItem
