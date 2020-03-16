import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => {
  const { name, count } = expense;
  return (
    <li className='gastos'>
      <p>
        {name} <span className='gasto'>$ {count}</span>{' '}
      </p>
    </li>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired
};

export default Expense;
