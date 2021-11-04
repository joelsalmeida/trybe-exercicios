import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      textarea: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  render() {
    return (
      <form action="" className="form">
        <h2>Form Component</h2>

        <label htmlFor="select">
          Select your language:
          <select name="select">
            <option value="portuguese">Portuguese</option>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </label>

        <label htmlFor="text-area">
          Write your message:
          <textarea
            name="text-area"
            cols="30"
            rows="10"
            value={this.state.textarea}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label htmlFor="email">
          Your email:
          <input type="email" name="email" />
        </label>

        <label htmlFor="number">
          Number:
          <input type="number" name="number" />
        </label>
      </form>
    );
  }
}

export default Form;
