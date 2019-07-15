import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import variables from 'variables';

import { setFloatingPopup } from 'actions/floatingPopups';
import { deleteComment } from 'actions/comments';

import ActivityComment from './ActivityComment';
import ActivityItem from './ActivityItem';

const Container = styled.div`
    position: relative;
    margin-top: 10px;
`;
const SectionIcon = styled.span`
    position: absolute;
    top: 6px;
    left: -30px;
`

const Header = styled.div`
    margin-bottom: 5px;
`;

const Title = styled.h3`
    display: inline-block;
    margin-right: 5px;
    font-size: ${variables.taskPopupSectionHeaderFontSize};
`;

const ActivityList = styled.ul``;

const IncludeActivitiesButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto
`;
const CommentsOnlyButton = styled.button`
    padding: 7px;
    background-color: rgba(9,30,66,.04);
    margin-left: auto
`;

class Activity extends React.Component  {

    state = {
        includeActivities: true
    }

    
    renderCommentsAndActivities = () => {
        const { comments, activities, users, setFloatingPopup, deleteComment } = this.props;
        let sortedCommentsAndActivities = _.orderBy([ ...comments, ...activities], ['timestamp']);
        return sortedCommentsAndActivities.map((item) => {
            //item objects have comment property
            if (item.comment) {
                return <ActivityComment comment={item} key={`taskpopup_activity_comment_${item.id}`} user={users[item.userID]} setFloatingPopup={setFloatingPopup} deleteComment={deleteComment}
                 />
            } else {
                return <ActivityItem activity={item} key={`taskpopup_activity_statement_${item.id}`} user={users[item.userID]} setFloatingPopup={setFloatingPopup}/>
            }
        })
    }

    renderCommentsOnly = () => {
        const { comments, users, deleteComment } = this.props;
        return comments.map((comment) => <ActivityComment comment={comment} key={`taskpopup_activity_comment_${comment.id}`} user={users[comment.userID]} setFloatingPopup={this.props.setFloatingPopup} deleteComment={deleteComment}/>)
    }

    renderActivity = () => {
        if (this.state.includeActivities) {
            return this.renderCommentsAndActivities();
        } else {
            return this.renderCommentsOnly();
        }
    }

    hideActivities = () => { this.setState({includeActivities: false})}
    showActivities = () => { this.setState({includeActivities: true})}

    renderButton = () => {
        if (this.state.includeActivities){
            return  <CommentsOnlyButton onClick={this.hideActivities}>Comments only</CommentsOnlyButton>
        } else {
            return <IncludeActivitiesButton onClick={this.showActivities}>Include activities</IncludeActivitiesButton>
        }
    }


    render() {
        return (
            <Container>
                <Header>
                    <Title>Activity</Title>
                    <SectionIcon className='icon-align-center'></SectionIcon>
                    {this.renderButton()}
                </Header>
                <ActivityList>
                    {this.renderActivity()}
                </ActivityList>
            </Container>
        )
    }
   
}


const mapStateToProps = (state, ownProps) => {
    const currentTaskPopupID = state.currentTaskPopup
    return {
        comments: state.comments.filter((comment) => currentTaskPopupID === comment.taskID).sort((a, b) => a.created > b.created ? 1 : -1),
        activities: state.activities.filter(activity => activity.taskID === currentTaskPopupID),
        users: state.users 
    }
}

export default connect(mapStateToProps, { setFloatingPopup, deleteComment })(Activity)
