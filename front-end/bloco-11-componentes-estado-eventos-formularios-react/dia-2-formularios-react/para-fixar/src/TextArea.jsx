import React from 'react';

class TextArea extends React.Component {
  render() {
    const { callBack, value } = this.props;

    return (
      <label htmlFor="textarea">
        Write your message:
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          value={value}
          onChange={callBack}
        ></textarea>
      </label>
    );
  }
}

export default TextArea;
