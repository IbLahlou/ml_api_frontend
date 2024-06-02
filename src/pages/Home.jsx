// src/pages/Home.jsx

import React, { useState } from 'react';
import axios from 'axios';
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

const Home = () => {
  const [formData, setFormData] = useState({
    rowNumber: '',
    customerId: '',
    surname: '',
    creditScore: 500,
    geography: '',
    gender: 'Male',
    age: '',
    tenure: '',
    balance: '',
    numOfProducts: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value) => {
    setFormData((prev) => ({ ...prev, creditScore: value }));
  };

  const handleSubmit = async () => {
    // Convert formData to NumpyNdarray format
    const inputData = [
      formData.rowNumber,
      formData.customerId,
      formData.surname,
      formData.creditScore,
      formData.geography,
      formData.gender,
      formData.age,
      formData.tenure,
      formData.balance,
      formData.numOfProducts,
    ];

    // Ensure all inputs are in the correct format for the model
    const numericData = inputData.map((item) => (isNaN(item) ? 0 : Number(item)));

    try {
      const response = await axios.post('http://localhost:3000/model_a_predict', [numericData], {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setPrediction(response.data);
      setError(null);
    } catch (error) {
      setPrediction(null);
      setError('Error submitting data');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <Box w="full">
      <Center>
        <VStack spacing={8} align="stretch" maxW="38%" w="full">
          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
            Churn Modeling Prediction Form
          </Text>
          <Divider borderColor="gray.200" />

          <Text>Row Number</Text>
          <Input name="rowNumber" placeholder="Enter Row Number" border="1px solid" onChange={handleChange} />

          <Text>Customer ID</Text>
          <Input name="customerId" placeholder="Enter Customer ID" border="1px solid" onChange={handleChange} />

          <Text>Surname</Text>
          <Input name="surname" placeholder="Enter Surname" border="1px solid" onChange={handleChange} />

          <Text>Credit Score</Text>
          <Box display="flex" alignItems="center">
            <Slider flex="1" value={formData.creditScore} min={100} max={1000} step={10} onChange={handleSliderChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Box ml="4" fontSize="lg" width="70px">
              <Input
                type="number"
                name="creditScore"
                value={formData.creditScore}
                min={100}
                max={1000}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                border="1px solid"
              />
            </Box>
          </Box>

          <Text>Geography</Text>
          <Select name="geography" placeholder="Select Geography" border="1px solid" onChange={handleChange}>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
          </Select>

          <Text>Gender</Text>
          <RadioGroup name="gender" defaultValue="Male" onChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}>
            <VStack align="start">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </VStack>
          </RadioGroup>

          <Text>Age</Text>
          <Input name="age" placeholder="Enter Age" border="1px solid" onChange={handleChange} />

          <Text>Tenure</Text>
          <Input name="tenure" placeholder="Enter Tenure" border="1px solid" onChange={handleChange} />

          <Text>Balance</Text>
          <Input name="balance" placeholder="Enter Balance" border="1px solid" onChange={handleChange} />

          <Text>Number of Products</Text>
          <Input name="numOfProducts" placeholder="Enter Number of Products" border="1px solid" onChange={handleChange} />

          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
          <Divider borderColor="gray.200" />

          {prediction && (
            <Box mt="8" p="4" border="1px solid" borderColor="gray.200" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">Prediction Result</Text>
              <Text>{JSON.stringify(prediction)}</Text>
            </Box>
          )}
          
          {error && (
            <Box mt="8" p="4" border="1px solid" borderColor="red.200" borderRadius="md" bg="red.50">
              <Text color="red.500">{error}</Text>
            </Box>
          )}
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;
