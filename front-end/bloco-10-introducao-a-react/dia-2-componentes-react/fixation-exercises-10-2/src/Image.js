import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img className='cat-pic' src={this.props.source} alt={this.props.alternativeText} />
    );
  }
}

export default Image;

// Qual o nome do componente declarado acima? R: Image
