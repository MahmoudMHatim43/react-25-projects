import { createContext } from "react";

const ExpenseGlobalContext = createContext(null);

function ExpenseProvider({ children }) {
  return (
    <ExpenseGlobalContext.Provider value={"none"}>
      {children}
    </ExpenseGlobalContext.Provider>
  );
}
export default ExpenseProvider;
