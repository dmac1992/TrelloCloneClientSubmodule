import React, { Component } from 'react';

import ProfileFeedActivity from './ProfileFeedActivity';
import ProfileFeedTeams from './ProfileFeedTeams';


export class ProfileFeed extends Component {
  render() {
    return (
      <div>
        <ProfileFeedTeams />
        <ProfileFeedActivity />
      </div>
    )
  }
}

export default ProfileFeed
