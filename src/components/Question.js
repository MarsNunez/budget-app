import { useState } from 'react';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {

  const [ quantity, setQuantity ] = useState(0);
  const [ error, setError ] = useState(false)

  const handleChange = e => {
    setQuantity( parseInt(e.target.value) );
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (quantity < 1 || isNaN(quantity)) {
      return setError(true)
    }

    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    setShowQuestion(false);

  }


  return (
    <>
      <h2>Enter your budget</h2>
      { error ? <Error message='Budget input is wrong' /> : null}
      <form onSubmit={handleSubmit}>
        <input type="number"
          className='u-full-width'
          placeholder='Enter your Budget'
          onChange={handleChange}
        />
        <input type="submit"
          className='button-primary u-full-width'
          value='Define Budget'
        />
      </form>
    </>
  )
}

export default Question;

