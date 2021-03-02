import Question from './components/Question';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showQuestion, setShowQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);

  useEffect(() => {
    if( createExpense ) {
      setExpenses([
        ...expenses, expense
      ])

      const remainingBudget = remaining - expense.quantity;
      setRemaining(remainingBudget);

      setCreateExpense(false)
    }
  }, [expense, createExpense, expenses, remaining]);


  return (
    <div>
      <div className="container">
        <header>
          <h1>React Budget</h1>
          <div className="contenido-principal contenido">
            { showQuestion ? 
              <Question
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              />
            :
              <div className="row">
                <div className="one-half column">
                  <Form 
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <List 
                    expenses={expenses}
                  />
                  <ControlBudget 
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            }
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

