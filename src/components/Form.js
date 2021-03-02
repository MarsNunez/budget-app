import { useState } from 'react';
import Error from './Error';
// import shortid from 'shortid';
const shortid = require('shortid');

const Form = ({ setExpense, setCreateExpense }) => {

  const [ name, setName ] = useState('');
  const [ quantity, setQuantity ] = useState(0);
  const [ error, setError ] = useState(false);


  const handleSubmit = e => {
    e.preventDefault();

    if ( quantity < 1 || isNaN(quantity) || name.trim() === '' ){
      return setError(true);
    }

    setError(false);

    const expense = {
      name: name,
      quantity,
      id: shortid.generate()
    }

    setExpense(expense);
    setCreateExpense(true);

    setName('')
    setQuantity(0)

  }

  return (
    <>
    <form
      onSubmit={handleSubmit}
    >
      <h2>Enter Your Expenses Here</h2>

      { error ? <Error message='Both blanks are required or incorrect values'/> : null }

      <div className="campo">
        <label>Expense Name</label>
        <input type="text"
          className='u-full-width'
          placeholder='Ex. Transport'
          value={name}
          onChange={ e => setName(e.target.value) }
          />
      </div>

      <div className="campo">
        <label>Expense Quantity</label>
        <input type="number"
          className='u-full-width'
          placeholder='Ex. 300'
          value={quantity}
          onChange={ e => setQuantity(parseInt(e.target.value)) }
        />
      </div>

      <input type="submit"
        className='button-primary u-full-width'
        value='Add Expense'
      />
    </form>
    </>
  )
}

export default Form;

