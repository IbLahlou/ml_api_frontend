import React from 'react';
import { Box, VStack, Text, Container, Heading, Divider } from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior MLOps Engineer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Leading ML infrastructure development and deployment automation."
    },
    {
      title: "Data Scientist",
      company: "AI Startup",
      period: "2019 - 2021",
      description: "Developed and deployed machine learning models for production."
    },
    {
      title: "Software Engineer",
      company: "Software Corp",
      period: "2017 - 2019",
      description: "Full-stack development with focus on backend systems."
    }
  ];

  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Professional Experience</Heading>
        {experiences.map((exp, index) => (
          <Box key={index} p={6} bg="#2c2e33" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold" color="blue.400">
              {exp.title}
            </Text>
            <Text fontSize="lg" color="gray.300">{exp.company}</Text>
            <Text fontSize="md" color="gray.500" mb={4}>{exp.period}</Text>
            <Text color="gray.400">{exp.description}</Text>
            {index < experiences.length - 1 && <Divider mt={4} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Experience;