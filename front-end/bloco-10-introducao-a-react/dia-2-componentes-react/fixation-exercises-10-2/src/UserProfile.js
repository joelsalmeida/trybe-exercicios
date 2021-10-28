// arquivo UserProfile.js
import React from 'react';
import UserImage from './UserImage';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <UserImage source={this.props.user.avatar} alternativeText='User avatar' />
      </div>
    );
  }
}

export default UserProfile;
