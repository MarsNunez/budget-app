import {checkBudget} from '../helpers'

const ControlBudget = ({ budget, remaining }) => {
  return ( 
    <>
      <div className="alert alert-primary">
        Budget: $ {budget}
      </div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: $ {remaining}
      </div>
    </>
   );
}
 
export default ControlBudget;