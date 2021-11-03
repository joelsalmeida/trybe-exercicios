// arquivo Order.js

// O que o componente App é em relação a Order? R: Componente pai.

import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className='order'>
        <p>
          {' '}
          {user} bought {product} for {price.value} {price.currency}{' '}
        </p>
      </div>
    );
  }
}

export default Order;
