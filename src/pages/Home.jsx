// src/pages/Home.jsx

import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  Text,
  Center,
  Divider,
  Select,
  RadioGroup,
  Radio,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';
import ChatbotComponent from '../components/Chatbot';

const Home = () => {
  const [creditScore, setCreditScore] = useState(500);

  const handleSliderChange = (value) => {
    setCreditScore(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value);
    if (value === '' || (value >= 100 && value <= 1000)) {
      setCreditScore(value);
    }
  };

  return (
    <Box w="full">
      <Center>
        <VStack spacing={8} align="stretch" maxW="38%" w="full" >
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">Churn Modeling Prediction Form</Text>
          <Divider borderColor="gray.200" />
          
          <Text>Row Number</Text>
          <Input placeholder="Enter Row Number" border="1px solid" />
          
          <Text>Customer ID</Text>
          <Input placeholder="Enter Customer ID" border="1px solid" />
          
          <Text>Surname</Text>
          <Input placeholder="Enter Surname" border="1px solid" />
          
          <Text>Credit Score</Text>
          <Box display="flex" alignItems="center">
            <Slider
              flex="1"
              value={creditScore === '' ? 0 : creditScore}
              min={100}
              max={1000}
              step={10}
              onChange={handleSliderChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Box ml="4" fontSize="lg" width="70px">
              <Input
                type="number"
                value={creditScore}
                min={100}
                max={1000}
                onChange={handleInputChange}
                border="1px solid"
              />
            </Box>
          </Box>
          
          <Text>Geography</Text>
          <Select placeholder="Select Geography" border="1px solid">
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
          </Select>
          
          <Text>Gender</Text>
          <RadioGroup defaultValue="Male">
            <VStack align="start">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </VStack>
          </RadioGroup>
          
          <Text>Age</Text>
          <Input placeholder="Enter Age" border="1px solid" />
          
          <Text>Tenure</Text>
          <Input placeholder="Enter Tenure" border="1px solid" />
          
          <Text>Balance</Text>
          <Input placeholder="Enter Balance" border="1px solid" />
          
          <Text>Number of Products</Text>
          <Input placeholder="Enter Number of Products" border="1px solid" />
          
          <Button colorScheme="blue">Submit</Button>
          <Divider borderColor="gray.200" />
        </VStack>
      </Center>
      <Box position="fixed" bottom="16px" right="16px">
        <ChatbotComponent />
      </Box>
    </Box>
  );
};

export default Home;
