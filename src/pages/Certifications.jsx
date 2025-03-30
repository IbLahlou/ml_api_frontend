
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Advanced certification for implementing ML solutions on AWS"
    },
    {
      name: "Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "2022",
      description: "Expert-level certification for MLOps and ML engineering"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2021",
      description: "Comprehensive deep learning and neural networks certification"
    }
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Certifications & Diplomas</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {certifications.map((cert, index) => (
          <Box
            key={index}
            p={5}
            bg="#2c2e33"
            borderRadius="lg"
            _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
          >
            <VStack align="start" spacing={3}>
              <Heading size="md">{cert.name}</Heading>
              <Text color="blue.400">{cert.issuer}</Text>
              <Text color="gray.400">Issued: {cert.date}</Text>
              <Text>{cert.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certifications;
