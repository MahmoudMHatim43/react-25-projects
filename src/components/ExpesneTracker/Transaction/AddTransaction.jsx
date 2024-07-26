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
  const { isOpen, onClose } = React.useContext(ExpenseGlobalContext);
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
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter the amount"
                name="amount"
                type="number"
              />
            </FormControl>
            <RadioGroup mt="5">
              <Stack direction="row">
                <Radio name="type" colorScheme="green" value="+">
                  Income
                </Radio>
                <Radio name="type" colorScheme="red" value="-">
                  Expense
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button>Send</Button>
            <Button onClick={onClose}>Cancle</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
export default AddTransaction;
