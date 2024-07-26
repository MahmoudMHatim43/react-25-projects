import React from "react";
import { ExpenseGlobalContext } from "../Context/ExpenseGlobalState";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ChartSummary from "../Chart/Chart";
import AddTransaction from "../Transaction/AddTransaction";

function TopView() {
  const { totalIncome, totalExpenses } = React.useContext(ExpenseGlobalContext);
  const result = totalIncome - totalExpenses;
  return (
    <Flex flexDirection="column" p="5" gap="5" my="5">
      <Heading color="gray.600">Balance ${result > 0 ? result : "-"}</Heading>
      <Flex flexDirection="row">
        <Flex flexDirection="column" p="2.5" flex="1" gap="2.5">
          <Box bg="green.100" borderRadius="25px" py="2" px="5">
            <Heading>Income</Heading>
            <Text fontSize="2xl">{totalIncome > 0 ? `+ $${totalIncome}` : "-"}</Text>
          </Box>
          <Box border="1px solid" borderColor="gray.300"></Box>
          <Box bg="red.200" borderRadius="25px" py="2" px="5">
            <Heading>Expenses</Heading>
            <Text fontSize="2xl">{totalExpenses > 0 ? `- $${totalExpenses}` : "-"}</Text>
          </Box>
        </Flex>
        <Flex flex="2" alignContent="center" justifyContent="center">
          <ChartSummary />
        </Flex>
      </Flex>
      <AddTransaction />
    </Flex>
  );
}

export default TopView;
