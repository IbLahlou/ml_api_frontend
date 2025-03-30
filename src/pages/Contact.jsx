
import React from 'react';
import {
  Box,
  VStack,
  Text,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Contact Me</Heading>
        <Box bg="#2c2e33" p={6} borderRadius="lg">
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" bg="#1a1b1e" border="none" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" bg="#1a1b1e" border="none" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea bg="#1a1b1e" border="none" rows={6} />
            </FormControl>
            <Button colorScheme="blue" alignSelf="flex-start">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
