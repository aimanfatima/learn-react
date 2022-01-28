import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [shouldRenderForm, setShouldRenderForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
		setShouldRenderForm(false);
  };

  const addNewExpenseHandler = () => {
    setShouldRenderForm(true);
  };

  const cancelHandler = () => {
    setShouldRenderForm(false);
  };

  let newExpenseOutput = !shouldRenderForm ? (
    <div className="new-expense">
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  ) : (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );

  return newExpenseOutput;
};

export default NewExpense;
