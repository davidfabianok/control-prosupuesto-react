import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ setExpense, setCreateExpense }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = event => {
    event.preventDefault();

    if (count < 1 || isNaN(count) || name.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    const expense = {
      name,
      count,
      id: shortid.generate()
    };
    setExpense(expense);
    setCreateExpense(true);
    setName('');
    setCount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error msg='Ambos datos son obligatorios o Presupuesto incorrecto' />
      ) : null}
      <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={count}
          onChange={event => setCount(parseInt(event.target.value, 10))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        value='Agregar gasto'
      />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired
};

export default Form;
