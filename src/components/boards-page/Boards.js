import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeMenu from 'components/home-page/HomeMenu';
import TeamsFeed from 'components/boards-page/TeamsFeed'; 
import CreateBoardModal from 'components/modals/CreateBoardModal';
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

const CreateNewBoard = styled.div`
    display: flex;
    width: 250px
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: gray;
    cursor: pointer;
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
            {/* TODO - what to do with these, implement at a later date.  */}
            {/* <TeamsFeed />
            <TeamsFeed />
            <TeamsFeed /> */}
            {/* <CreateNewBoard onClick={() => this.props.setActiveModal(CreateBoardModal)}>
              <span>Create board...</span>
            </CreateNewBoard> */}
        </BoardsFeedContainer>
      
      </BoardsPageContainer>
    )
  }
}


const mapDispatchToProps = {
  setActiveModal
}

export default connect(null, mapDispatchToProps)(Boards)
