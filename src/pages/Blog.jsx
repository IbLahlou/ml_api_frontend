
import React from 'react';
import { VStack, Text, Grid, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Blog = () => {
  const cardBg = "#2c2e33";
  const blogs = [
    {
      title: "Scaling ML Models in Production",
      date: "2024-03-15",
      preview: "Best practices for deploying ML models at scale..."
    },
    {
      title: "Data Engineering Best Practices",
      date: "2024-03-10",
      preview: "Modern approaches to building data pipelines..."
    }
  ];

  return (
    <Container maxW="container.xl" p={8} color="gray.100">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Latest Blog Posts</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          {blogs.map((blog, index) => (
            <MotionBox
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              whileHover={{ scale: 1.02 }}
            >
              <VStack align="stretch" spacing={3}>
                <Text fontSize="xl" fontWeight="bold">{blog.title}</Text>
                <Text color="gray.400">{blog.date}</Text>
                <Text noOfLines={2}>{blog.preview}</Text>
              </VStack>
            </MotionBox>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Blog;
