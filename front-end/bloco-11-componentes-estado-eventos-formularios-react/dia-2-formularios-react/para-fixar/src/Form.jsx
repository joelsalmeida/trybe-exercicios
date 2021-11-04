import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      select: 'portuguese',
      textarea: '',
      email: '',
      number: '',
      checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    alert('Arquivo selecionado: ' + this.fileInput.current.files[0].name);

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

        <label htmlFor="checkbox" id="confirm">
          Confirm:
          <input
            type="checkbox"
            name="checkbox"
            value={this.state.checkbox}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="file">
          Select your file:
          <input
            type="file"
            name="file"
            ref={this.fileInput}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Form;
