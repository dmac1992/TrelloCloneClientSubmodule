import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import variables from 'variables';
import { DateTime } from 'luxon';

import HomeFeedItem from './HomeFeedItem';

const HomeFeedContainer = styled.div`
    width: 500px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
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

    }

    renderHomeFeedItems = () => {
      return this.props.comments
        .sort((a, b) =>  {
            if (a.timestamp.toFormat('yyyyMMddHHmmss') > b.timestamp.toFormat('yyyyMMddHHmmss')) 
              return 1;
            else
              return -1;
        })
        .slice(0,6)
        .map(comment => <HomeFeedItem comment={comment} key={comment.id} />)
    }

    render() {
      return (
        <HomeFeedContainer>
          <HomeFeedTitleContainer>
            <CheckIcon className="icon-check"></CheckIcon>
            <Title>UP NEXT</Title>
          </HomeFeedTitleContainer>
         {this.renderHomeFeedItems()}
          <ShowMoreButton>
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
