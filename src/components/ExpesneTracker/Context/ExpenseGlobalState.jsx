import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
export const ExpenseGlobalContext = createContext(null);

function ExpenseProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ExpenseGlobalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ExpenseGlobalContext.Provider>
  );
}
export default ExpenseProvider;
