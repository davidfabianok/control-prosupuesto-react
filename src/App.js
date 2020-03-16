import React, { useState, useEffect } from 'react';
import Question from './coponents/Question';
import Form from './coponents/Form';
import List from './coponents/List';
import ControlBudget from './coponents/ControlBudget';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(1);
  const [showQuestion, SetShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false)
  
  
  useEffect(() => {
    if(createExpense) {
      setExpenses([
        ...expenses,
        expense]);
    }
    
    const remainingBudget = remaining - expense.count;
    setRemaining(remainingBudget);
    
    setCreateExpense(false);
  }, [expense, createExpense, expenses, remaining]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className='contenido-principal contenido'>
        {showQuestion ? (
          <Question
            setBudget={setBudget}
            setRemaining={setRemaining}
            SetShowQuestion={SetShowQuestion}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Form
              setExpense={setExpense}
              setCreateExpense={setCreateExpense} />
            </div>
            <div className='one-half column'>
              <List expenses={expenses} />
              <ControlBudget 
              budget={budget}
              remaining={remaining}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
