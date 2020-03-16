import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRemaining, SetShowQuestion }) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const setingBudget = event => {
    setCount(parseInt(event.target.value));
  };

  const addBudget = event => {
    event.preventDefault();
    if (count < 1 || isNaN(count)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(count);
    setRemaining(count);
    SetShowQuestion(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error msg='El presupuesto es incorrecto' /> : null}
      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Agrega tu presupuesto'
          onChange={setingBudget}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir prosupuesto'
        />
      </form>
    </>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  SetShowQuestion: PropTypes.func.isRequired
};

export default Question;
