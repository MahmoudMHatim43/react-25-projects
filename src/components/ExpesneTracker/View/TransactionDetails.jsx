import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
function TransactionDetails({ item, type, remove }) {
  return (
    <Box
      bg={type === "income" ? "green.300" : "red.300"}
      my="1"
      width="100%"
      borderRadius="2xl"
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      flexDirection="row"
      py="1"
      px="10"
      position="relative"
    >
      <Button
        height="20px"
        width="20px"
        borderRadius="full"
        colorScheme="red"
        position="absolute"
        left="-5"
        onClick={() => remove(type, item.id)}
      >
        <FaTrash />
      </Button>
      <Text fontSize="lg">+ ${item.amount}</Text>
      <Text fontSize="sm" opacity="0.7">
        {item.description}
      </Text>
    </Box>
  );
}

export default TransactionDetails;
