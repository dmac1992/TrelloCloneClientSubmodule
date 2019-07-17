import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeMenu from 'components/home-page/HomeMenu';
import BoardsPersonalFeed from 'components/boards-page/BoardsPersonalFeed';
import BoardsRecentFeed  from './BoardsRecentFeed';
import BoardsStarredFeed from './BoardsStarredFeed';


import { setActiveModal } from 'actions/modal';

const BoardsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;


const BoardsFeedContainer = styled.div`
    width: 800px;
    margin-left: 30px;
`;


export class Boards extends Component {
  render() {
    return (
      <BoardsPageContainer>
        <HomeMenu />
        <BoardsFeedContainer>
            <BoardsStarredFeed />
            <BoardsPersonalFeed />
            <BoardsRecentFeed />
            
        </BoardsFeedContainer>
      
      </BoardsPageContainer>
    )
  }
}


const mapDispatchToProps = {
  setActiveModal
}

export default connect(null, mapDispatchToProps)(Boards)
