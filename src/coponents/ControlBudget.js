import React from 'react';
import { reviewBudget } from '../helpers';
import PropTypes from 'prop-types';

const ControlBudget = ({budget, remaining}) => {
    return (
        <>
            <div className={"alert alert-primary"}>
              Presupuesto: $ {budget}
            </div>
            <div className={reviewBudget(budget, remaining)}>
              Restante: $ {remaining}
            </div>
        </>
    )
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default ControlBudget
