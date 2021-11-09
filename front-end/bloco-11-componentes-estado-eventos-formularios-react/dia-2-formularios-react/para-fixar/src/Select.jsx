import React from 'react';

class Select extends React.Component {
  render() {
    const { callBack, value } = this.props;

    return (
      <label htmlFor="select">
        Select your language:
        <select name="select" value={value} onChange={callBack}>
          <option value="portuguese">Portuguese</option>
          <option value="english">English</option>
          <option value="french">French</option>
        </select>
      </label>
    );
  }
}

export default Select;
