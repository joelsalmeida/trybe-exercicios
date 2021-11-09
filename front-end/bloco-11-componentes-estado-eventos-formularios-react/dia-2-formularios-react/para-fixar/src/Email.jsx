import React from 'react';

class Email extends React.Component {
  render() {
    const { callBack, value } = this.props;

    return (
      <label htmlFor="email">
        Your email:
        <input type="email" name="email" value={value} onChange={callBack} />
      </label>
    );
  }
}

export default Email;
