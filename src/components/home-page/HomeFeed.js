import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';

import HomeFeedItem from './HomeFeedItem';

const HomeFeedContainer = styled.div`
    width: 500px;
    padding: 30px;
    padding-top: 50px;
`;

const HomeFeedTitleContainer = styled.div`
    position: relative;
    padding-left: 30px;
    margin-bottom: 20px;    
`;

const Title = styled.span`
  font-family: ${variables.primaryFont}
`
const CheckIcon = styled.span`
    position: absolute;
    left: 0;
    top: 2px;
`;

const ShowMoreButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${variables.lightGrayscale}
    }
`;

class HomeFeed extends React.Component {

    state = {
      commentsShowing: 3
    }

    renderHomeFeedItems = () => {
      return this.props.comments
        .sort((a, b) =>  {
            if (a.timestamp.toFormat('yyyyMMddHHmmss') > b.timestamp.toFormat('yyyyMMddHHmmss')) 
              return 1;
            else
              return -1;
        })
        .slice(0, this.state.commentsShowing)
        .map(comment => <HomeFeedItem comment={comment} key={comment.id} />)
    }

    showMoreComments = () => {
      this.setState({commentsShowing: this.state.commentsShowing + 3});
    } 

    render() {
      return (
        <HomeFeedContainer>
          <HomeFeedTitleContainer>
            <CheckIcon className="icon-check"></CheckIcon>
            <Title>UP NEXT</Title>
          </HomeFeedTitleContainer>
         {this.renderHomeFeedItems()}
          <ShowMoreButton onClick={this.showMoreComments}>
              <span>Show more</span>
          </ShowMoreButton>
        </HomeFeedContainer>
      )
    }
    
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(HomeFeed)
