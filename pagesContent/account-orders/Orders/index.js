import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';
import { Wrapper } from './styles';

const Orders = props => {
  const { orders } = props;

  return (
    <Wrapper>
      <p>Tutaj możesz przejrzeć swoje zamówienia.</p>
      {orders.map((order, i) => (
        <Order key={i} order={order} />
      ))}
    </Wrapper>
  );
};

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default Orders;
