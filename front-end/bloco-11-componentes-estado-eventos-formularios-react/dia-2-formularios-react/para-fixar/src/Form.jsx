import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      select: 'portuguese',
      textarea: '',
      email: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form action="" className="form">
        <h2>Form Component</h2>

        <label htmlFor="select">
          Select your language:
          <select name="select" value={this.state.select} onChange={this.handleChange}>
            <option value="portuguese">Portuguese</option>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
        </label>

        <label htmlFor="textarea">
          Write your message:
          <textarea
            name="textarea"
            cols="30"
            rows="10"
            value={this.state.textarea}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label htmlFor="email">
          Your email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="number">
          Number:
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Form;
