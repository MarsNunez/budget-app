const Question = () => {
  return (
    <>
      <h2>Enter your budget</h2>
      <form>
        <input type="number"
          className='u-full-width'
          placeholder='Enter ypur Budget'
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

