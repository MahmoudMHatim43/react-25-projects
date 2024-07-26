import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const ExpenseGlobalContext = createContext(null);

function ExpenseProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [history, setHistory] = useState({
    income: [{ id: 0, amount: 0, description: "" }],
    expenses: [{ id: 1, amount: 0, description: "" }],
  });
  const totalIncome = history.income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = history.expenses.reduce((acc, item) => acc + item.amount, 0);
  const incomes = history.income.map((item) => item);
  const expenses = history.expenses.map((item) => item);
  return (
    <ExpenseGlobalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        history,
        setHistory,
        incomes,
        totalIncome,
        expenses,
        totalExpenses,
      }}
    >
      {children}
    </ExpenseGlobalContext.Provider>
  );
}
export default ExpenseProvider;
