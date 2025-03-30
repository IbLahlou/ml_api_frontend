
import React from 'react';
import { Box, Heading, VStack, Text, Divider, Badge } from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      role: "MLOps Engineer",
      company: "AI Solutions Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Developed and maintained ML model deployment pipelines",
        "Implemented monitoring solutions for production ML models",
        "Automated model retraining workflows"
      ],
      technologies: ["Kubernetes", "TensorFlow", "PyTorch", "MLflow"]
    },
    {
      role: "Machine Learning Engineer",
      company: "Data Science Corp",
      period: "2020 - 2022",
      responsibilities: [
        "Built and deployed machine learning models",
        "Optimized model performance and inference time",
        "Collaborated with data scientists on model development"
      ],
      technologies: ["Python", "Scikit-learn", "Docker", "AWS"]
    }
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Professional Experience</Heading>
      <VStack spacing={6} align="stretch">
        {experiences.map((exp, index) => (
          <Box key={index} p={5} bg="#2c2e33" borderRadius="lg">
            <Heading size="md">{exp.role}</Heading>
            <Text color="blue.400" mb={2}>{exp.company} | {exp.period}</Text>
            <Divider mb={4} />
            <VStack align="start" spacing={4}>
              <Box>
                <Text fontWeight="bold" mb={2}>Key Responsibilities:</Text>
                <VStack align="start" spacing={1}>
                  {exp.responsibilities.map((resp, idx) => (
                    <Text key={idx}>• {resp}</Text>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontWeight="bold" mb={2}>Technologies:</Text>
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} mr={2} mb={2} colorScheme="blue">
                    {tech}
                  </Badge>
                ))}
              </Box>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
