import React from 'react';
import Select from './Select';
import TextArea from './TextArea';
import Email from './Email';

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
    this.alertFile = this.alertFile.bind(this);
    this.fileInput = React.createRef();
  }

  alertFile() {
    alert('Arquivo selecionado: ' + this.fileInput.current.files[0].name);
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

        <Select callBack={this.handleChange} value={this.state.select} />

        <TextArea callBack={this.handleChange} value={this.state.textarea} />

        <Email callBack={this.handleChange} value={this.state.email} />

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
          <input type="file" name="file" ref={this.fileInput} onChange={this.alertFile} />
        </label>
      </form>
    );
  }
}

export default Form;
