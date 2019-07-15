import React, { Component } from 'react'
import styled from 'styled-components';
import { Route } from 'react-router-dom';


import ProfileHeader from 'components/profile-page/ProfileHeader';

import ProfileFeed from 'components/profile-page/ProfileFeedSection/ProfileFeed';
import ProfileCards from 'components/profile-page/ProfileCardsSection/ProfileCards';
import ProfileSettings from 'components/profile-page/ProfileSettingsSection/ProfileSettings';


//TODO unused 'Container' styled component
// const Container = styled.div`
//   height: 300px;
//   background-color: aqua;
// `;

const SubPageContainer = styled.div`
  padding-top: 50px;
  width: 800px;
  margin: 0 auto;
`;

export class Profile extends Component {

  render = () => {
    return (
      <React.Fragment>
          <ProfileHeader toggleTabs={this.toggleTabs} subpages={this.subpages}/>
          <SubPageContainer>
            <Route exact path='/profile' component={ProfileFeed}/>
            <Route exact path='/profile/cards' component={ProfileCards} />
            <Route exact path='/profile/settings' component={ProfileSettings} />
          </SubPageContainer>
      </React.Fragment>
    )
  }
}

export default Profile;
