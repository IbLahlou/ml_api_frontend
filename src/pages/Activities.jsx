
import React from 'react';
import { Box, Heading, VStack, Text, Badge, SimpleGrid } from '@chakra-ui/react';

const Activities = () => {
  const activities = [
    {
      title: "MLOps Community Meetup Organizer",
      period: "2022 - Present",
      description: "Organizing monthly meetups focusing on MLOps best practices and tools",
      impact: "Built a community of 500+ ML practitioners"
    },
    {
      title: "Technical Blog Writer",
      period: "2021 - Present",
      description: "Writing technical articles about ML deployment and operations",
      impact: "Published 20+ articles with 100k+ views"
    },
    {
      title: "Open Source Contributor",
      period: "2020 - Present",
      description: "Contributing to ML tools and frameworks",
      impact: "Major contributions to MLflow and Kubeflow projects"
    }
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Curricular Activities</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {activities.map((activity, index) => (
          <Box
            key={index}
            p={5}
            bg="#2c2e33"
            borderRadius="lg"
            _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
          >
            <VStack align="start" spacing={3}>
              <Heading size="md">{activity.title}</Heading>
              <Badge colorScheme="blue">{activity.period}</Badge>
              <Text>{activity.description}</Text>
              <Text color="blue.400">Impact: {activity.impact}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Activities;
