import React from 'react';
import {
  Box,
  VStack,
  Text,
  Button,
  Image,
  Flex,
  Grid,
  Link,
  IconButton
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Data Pipeline Framework",
    description: "A robust ETL framework for handling large-scale data processing",
    repo: "https://github.com/yourusername/data-pipeline",
    demo: "https://demo-link.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard built with React and D3.js",
    repo: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://demo-link.com"
  }
];

const blogPosts = [
  {
    title: "Building Scalable Data Pipelines",
    excerpt: "Learn how to design and implement scalable data pipelines using modern tools and best practices.",
    link: "/blog/scalable-pipelines"
  },
  {
    title: "Data Engineering Best Practices",
    excerpt: "A comprehensive guide to data engineering best practices and patterns.",
    link: "/blog/best-practices"
  }
];

const Home = () => {
  const MotionBox = motion(Box);

  return (
    <Box p={8} bg="#1a1b1e" minH="100vh" color="white">
      <VStack spacing={12} align="stretch" maxW="1200px" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={8}>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="5xl" fontWeight="bold">
              Hi, I'm Eddaou Issam
            </Text>
            <Text fontSize="xl" color="gray.400">
              Data Engineer & Software Developer
            </Text>
            <Button
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              colorScheme="purple"
              size="lg"
              leftIcon={<FaGithub />}
            >
              Connect with me
            </Button>
          </VStack>
          <Image
            src="/avatar.png"
            alt="Profile"
            boxSize="200px"
            borderRadius="full"
            bg="purple.500"
          />
        </Flex>

        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Projects</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                p={6}
                bg="#2c2e33"
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">{project.title}</Text>
                  <Text color="gray.400">{project.description}</Text>
                  <Flex gap={4}>
                    <IconButton
                      as="a"
                      href={project.repo}
                      target="_blank"
                      icon={<FaGithub />}
                      aria-label="GitHub"
                    />
                    <IconButton
                      as="a"
                      href={project.demo}
                      target="_blank"
                      icon={<FaExternalLinkAlt />}
                      aria-label="Demo"
                    />
                  </Flex>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Blog Posts</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {blogPosts.map((post, index) => (
              <MotionBox
                key={index}
                p={6}
                bg="#2c2e33"
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                as={Link}
                href={post.link}
                _hover={{ textDecoration: 'none' }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">{post.title}</Text>
                  <Text color="gray.400">{post.excerpt}</Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;