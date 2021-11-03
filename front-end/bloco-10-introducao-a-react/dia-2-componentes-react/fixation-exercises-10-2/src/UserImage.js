import React from 'react';

class UserImage extends React.Component {
  render() {
    return (
      <img
        src={this.props.source}
        alt={this.props.alternativeText}
        className='user-pic'
      />
    );
  }
}

export default UserImage;
