import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { ExpenseGlobalContext } from "../Context/ExpenseGlobalState";

function AddTransaction() {
  const { isOpen, onClose, history, setHistory } = React.useContext(ExpenseGlobalContext);
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [type, setType] = React.useState("expense");
  function changeHistory() {
    if (type === "income") {
      setHistory({
        ...history,
        income: [
          ...history.income,
          { id: crypto.randomUUID(), amount: Number(amount), description: description },
        ],
      });
    }
    if (type === "expense") {
      setHistory({
        ...history,
        expenses: [
          ...history.expenses,
          { id: crypto.randomUUID(), amount: Number(amount), description: description },
        ],
      });
    }
    onClose();
    setDescription("");
    setAmount("");
    setType("expense");
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Describtion</FormLabel>
              <Input
                placeholder="What is this transaction about ?"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter the amount"
                name="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <RadioGroup
              mt="5"
              value={type}
              onChange={() => {
                setType(type === "expense" ? "income" : "expense");
              }}
            >
              <Stack direction="row">
                <Radio value="income" colorScheme="green">
                  Income
                </Radio>
                <Radio value="expense" colorScheme="red">
                  Expense
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              mr="5"
              bg="red.500"
              onClick={() => {
                onClose();
                setDescription("");
                setAmount("");
                setType("expense");
              }}
            >
              Cancle
            </Button>
            <Button bg="blue.400" onClick={changeHistory} isDisabled={amount <= 0}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
export default AddTransaction;
