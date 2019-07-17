import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';

import RecentlyViewedBoardItem from 'components/home-page/RecentlyViewedBoardItem';
import { unstarBoard, starBoard } from 'actions/users';

const FeedContainer = styled.div`
  width: 300px;
  font-family: ${variables.primaryFont}
`;

const StickyBox = styled.div`
  position: sticky;
  top: 0;
`;

const FeedTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FeedIcon = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`

const LinksItem = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  cursor: pointer;
  transition: background ${variables.hoverBackgroundTransitionSpeed}
  &:hover {
      background-color: ${variables.lightGrayscale}
  }
  .icon-plus {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      background-color: rgba(9,30,66,.04);
      border-radius: 5px;
      margin-right: 5px;
  }
`;

const LinksTitle = styled.span`
  display: block;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;




class HomeRecentlyViewedFeed extends React.Component {

    renderRecentlyViewedBoards = () => {
      const { boards, currentUser } = this.props;
      return boards 
        .filter(board => ( 
          currentUser.recentlyViewedBoards.includes(board.id) && 
          !currentUser.starredBoards.includes(board.id)
          ))
        .map(board => {
          return ( 
            <RecentlyViewedBoardItem 
              key={board.id}
              board={board}
              currentUser={currentUser}
              unstarBoard={this.props.unstarBoard}
              starBoard={this.props.starBoard}
            />
          )
        })
    }

    //TODO - double filter functions here , chop down to one
    renderStarredBoards = () => {
      const { boards, currentUser } = this.props;
      

      
      return boards 
        .filter(board => currentUser.starredBoards.includes(board.id))
        .map(board => {
          return ( 
            <RecentlyViewedBoardItem 
              key={board.id}
              board={board}
              currentUser={currentUser}
              unstarBoard={this.props.unstarBoard}
              starBoard={this.props.starBoard}
            />
          )
        })
    }

    render() {
      const {createBoardModal, currentUser} = this.props;
      return (
        <FeedContainer>
          <StickyBox>
            <FeedTitleContainer>
              <FeedIcon className="icon-clock-o"></FeedIcon>
              <span className="home-recently-title">RECENTLY VIEWED</span>
            </FeedTitleContainer>
            <ul className="home-recently-viewed-ul">
              {this.renderRecentlyViewedBoards()}
            </ul>

            { currentUser.starredBoards.length  ?
              (
                <>
                  <FeedTitleContainer>
                      <FeedIcon className="icon-star"></FeedIcon>
                      <span className="home-recently-title">STARRED</span>
                  </FeedTitleContainer>
                  <ul className=''>
                    {this.renderStarredBoards()}
                  </ul>
                </>
                )
                :
                null
            }
          
          
            <ul className="home-recently-viewed-links-ul">
              <LinksTitle>Links</LinksTitle>
              <LinksItem onClick={createBoardModal}>
                <span className="home-recently-viewed-link-icon icon-plus"></span>
                <span className="home-recently-viwed-link-text">Create a board</span>
              </LinksItem>
            </ul>
            </StickyBox>
        </FeedContainer>
      )
    }
}


const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    currentUser: state.users[state.userId]
  }
}

const mapDispatchToProps = {
  unstarBoard,
  starBoard
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRecentlyViewedFeed)
