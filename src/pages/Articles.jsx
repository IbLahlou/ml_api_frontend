
import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack, Tag, Link } from '@chakra-ui/react';

const Articles = () => {
  const articles = [
    {
      title: "Introduction to MLOps Practices",
      summary: "A comprehensive guide to MLOps best practices and implementation strategies",
      tags: ["MLOps", "Best Practices", "DevOps"],
      link: "#"
    },
    {
      title: "Automating ML Model Deployment",
      summary: "Step-by-step guide to automating your ML model deployment pipeline",
      tags: ["Automation", "Deployment", "CI/CD"],
      link: "#"
    },
    {
      title: "Model Monitoring in Production",
      summary: "Essential techniques for monitoring ML models in production environments",
      tags: ["Monitoring", "Production", "MLOps"],
      link: "#"
    }
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Technical Articles</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {articles.map((article, index) => (
          <Box
            key={index}
            p={5}
            bg="#2c2e33"
            borderRadius="lg"
            _hover={{ transform: 'translateY(-2px)', transition: '0.2s' }}
          >
            <VStack align="start" spacing={3}>
              <Heading size="md">{article.title}</Heading>
              <Text color="gray.400">{article.summary}</Text>
              <Box>
                {article.tags.map((tag, idx) => (
                  <Tag key={idx} mr={2} mb={2} colorScheme="blue">
                    {tag}
                  </Tag>
                ))}
              </Box>
              <Link color="blue.400" href={article.link}>
                Read More →
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Articles;
