
import React from 'react';
import { Box, VStack, Text, Container, Heading, SimpleGrid, Image, Link } from '@chakra-ui/react';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with MLOps",
      summary: "Learn the basics of MLOps and how to implement it in your organization",
      date: "April 15, 2024",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Best Practices for Model Deployment",
      summary: "Essential tips for deploying ML models in production",
      date: "April 10, 2024",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Monitoring ML Models in Production",
      summary: "How to effectively monitor your ML models in production",
      date: "April 5, 2024",
      image: "https://placehold.co/600x400"
    }
  ];

  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Blog Posts</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {posts.map((post, index) => (
            <Box key={index} bg="#2c2e33" borderRadius="lg" overflow="hidden">
              <Image src={post.image} alt={post.title} />
              <Box p={6}>
                <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
                <Heading size="md" mb={2}>{post.title}</Heading>
                <Text color="gray.400" mb={4}>{post.summary}</Text>
                <Link color="blue.400">Read More →</Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Blog;
