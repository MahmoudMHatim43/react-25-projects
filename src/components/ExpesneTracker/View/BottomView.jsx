import React from "react";
import { ExpenseGlobalContext } from "../Context/ExpenseGlobalState";
import { Flex, Heading } from "@chakra-ui/react";
import TransactionDetails from "./TransactionDetails";

function BottomView() {
  const { incomes, expenses, history, setHistory } =
    React.useContext(ExpenseGlobalContext);
  function removeFromHistory(type, id) {
    if (type === "income") {
      setHistory({ ...history, income: history.income.filter((item) => item.id !== id) });
    } else if (type === "expense") {
      setHistory({
        ...history,
        expenses: history.expenses.filter((item) => item.id !== id),
      });
    }
  }
  return (
    <Flex gap="10" justifyContent="space-around">
      <Flex flexDirection="column" flex="2">
        <Heading fontSize="2xl">Income Details</Heading>
        {incomes.length > 1
          ? incomes.map((item, index) =>
              index > 0 ? (
                <TransactionDetails
                  key={index}
                  item={item}
                  remove={removeFromHistory}
                  type={"income"}
                />
              ) : null
            )
          : null}
      </Flex>
      <Flex flexDirection="column" flex="2">
        <Heading fontSize="2xl">Expense Details</Heading>
        {expenses.length > 1
          ? expenses.map((item, index) =>
              index > 0 ? (
                <TransactionDetails
                  key={index}
                  item={item}
                  remove={removeFromHistory}
                  type={"expense"}
                />
              ) : null
            )
          : null}
      </Flex>
    </Flex>
  );
}

export default BottomView;
