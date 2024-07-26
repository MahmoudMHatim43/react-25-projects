import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import React from "react";
import { ExpenseGlobalContext } from "../Context/ExpenseGlobalState";
import TopView from "../View/TopView";

function Main() {
  const { onOpen } = React.useContext(ExpenseGlobalContext);
  return (
    <Flex textAlign="center" flexDirection="column" px="5">
      <Flex alignItems="center" justifyContent="space-between" mt="10">
        <Heading
          color="blue.400"
          display={["none", "block", "block", "block", "block"]}>
          Expense Tracker App
        </Heading>
        <Button colorScheme="teal" variant="outline">
          <FaPlus />
          <Text ml="2" onClick={onOpen}>
            Add Transaction
          </Text>
        </Button>
      </Flex>
      <TopView />
    </Flex>
  );
}

export default Main;
