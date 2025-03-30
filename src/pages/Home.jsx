import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  useColorModeValue,
  Container,
  Heading,
  ScaleFade,
} from '@chakra-ui/react';
import axios from 'axios';

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
  const bgColor = useColorModeValue('white', 'gray.800');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value) => {
    setFormData((prev) => ({ ...prev, creditScore: value }));
  };

  const handleSubmit = async () => {
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
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Center>
        <VStack spacing={8} w="full" maxW="container.md">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontSize="4xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Welcome to MLOps Dashboard
            </Heading>
          </motion.div>

          <Box
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            p={8}
            bg={bgColor}
            boxShadow="xl"
            rounded="lg"
            w="full"
          >
            <VStack spacing={4}>
              <Input
                placeholder="Row Number"
                name="rowNumber"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Customer ID"
                name="customerId"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Surname"
                name="surname"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Age"
                name="age"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Tenure"
                name="tenure"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Balance"
                name="balance"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
              <Input
                placeholder="Number of Products"
                name="numOfProducts"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              />
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
              <Select
                placeholder="Select Geography"
                name="geography"
                onChange={handleChange}
                size="lg"
                _hover={{ borderColor: 'blue.400' }}
                transition="all 0.2s"
              >
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
              </Select>
              <RadioGroup name="gender" value={formData.gender} onChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}>
                <VStack align="start">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </VStack>
              </RadioGroup>

              <Button
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                bgGradient="linear(to-r, blue.400, purple.500)"
                color="white"
                size="lg"
                w="full"
                _hover={{
                  bgGradient: "linear(to-r, blue.500, purple.600)",
                }}
              >
                Analyze
              </Button>
            </VStack>
          </Box>

          {prediction && (
            <ScaleFade initialScale={0.9} in={true}>
              <Box
                p={6}
                bg={bgColor}
                boxShadow="xl"
                rounded="lg"
                w="full"
                borderWidth="1px"
                borderColor="blue.200"
              >
                <Text fontSize="xl" fontWeight="bold">Prediction Result</Text>
                <Text>{JSON.stringify(prediction)}</Text>
              </Box>
            </ScaleFade>
          )}

          {error && (
            <ScaleFade initialScale={0.9} in={true}>
              <Box
                p={6}
                bg="red.50"
                boxShadow="xl"
                rounded="lg"
                w="full"
                borderWidth="1px"
                borderColor="red.200"
              >
                <Text color="red.500">{error}</Text>
              </Box>
            </ScaleFade>
          )}
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;