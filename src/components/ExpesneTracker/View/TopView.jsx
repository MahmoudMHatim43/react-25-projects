import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function TopView() {
  return (
    <Box display="flex" flexDirection="column" p="5" gap="5">
      <Heading color="gray.600">Balance $1930,00</Heading>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around">
        <Flex flexDirection="column" p="2.5" flex="1" gap="2.5">
          <Box bg="green.100" borderRadius="25px" py="2" px="5">
            <Heading>Income</Heading>
            <Text fontSize="2xl">+$2400</Text>
          </Box>
          <Box border="1px solid" borderColor="gray.300"></Box>
          <Box bg="red.200" borderRadius="25px" py="2" px="5">
            <Heading>Expenses</Heading>
            <Text fontSize="2xl">-$470</Text>
          </Box>
        </Flex>
        <Box flex="2">Chart</Box>
      </Flex>
    </Box>
  );
}

export default TopView;
