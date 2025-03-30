
import React from 'react';
import { Box, VStack, Text, Button, Image, Grid, Link, Icon, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box p={8} bg="#1a1b1e" minH="100vh" color="white">
      <VStack spacing={12} align="stretch" maxW="1200px" mx="auto">
        {/* Hero Section */}
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={8}>
          <VStack align="flex-start" spacing={4}>
            <Text fontSize="5xl" fontWeight="bold">
              Hi, I'm Eddaou Issam
            </Text>
            <Text fontSize="xl" color="gray.400">
              Data Engineer & Software Developer
            </Text>
            <Button
              as={Link}
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

        {/* About Section */}
        <VStack align="flex-start" spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">About Me</Text>
          <Text color="gray.400">
            Data Engineer specializing in building robust data pipelines and scalable solutions.
            I have expertise in Python, SQL, and cloud technologies.
          </Text>
          <Button colorScheme="purple" variant="outline">
            Download CV
          </Button>
        </VStack>

        {/* Projects Section */}
        <VStack align="flex-start" spacing={6}>
          <Text fontSize="3xl" fontWeight="bold">Projects</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} w="100%">
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                bg="#2a2b2e"
                p={6}
                borderRadius="xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <VStack align="flex-start" spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">{project.title}</Text>
                  <Text color="gray.400">{project.description}</Text>
                  <Flex gap={2}>
                    <Button
                      as={Link}
                      href={project.repo}
                      target="_blank"
                      size="sm"
                      leftIcon={<FaGithub />}
                      colorScheme="purple"
                    >
                      Repository
                    </Button>
                    <Button
                      as={Link}
                      href={project.demo}
                      target="_blank"
                      size="sm"
                      colorScheme="purple"
                      variant="outline"
                    >
                      Live Demo
                    </Button>
                  </Flex>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Blog Section */}
        <VStack align="flex-start" spacing={6}>
          <Text fontSize="3xl" fontWeight="bold">Latest Blog Posts</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} w="100%">
            {blogPosts.map((post, index) => (
              <MotionBox
                key={index}
                bg="#2a2b2e"
                p={6}
                borderRadius="xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <VStack align="flex-start" spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">{post.title}</Text>
                  <Text color="gray.400" noOfLines={2}>{post.excerpt}</Text>
                  <Button
                    as={Link}
                    href={post.link}
                    target="_blank"
                    size="sm"
                    rightIcon={<FaBlog />}
                    colorScheme="purple"
                    variant="ghost"
                  >
                    Read More
                  </Button>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Social Links */}
        <Flex gap={4} justify="center" pt={8}>
          <IconButton
            as={Link}
            href="https://github.com/yourusername"
            target="_blank"
            icon={<FaGithub />}
            colorScheme="purple"
            variant="ghost"
            fontSize="24px"
          />
          <IconButton
            as={Link}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            icon={<FaLinkedin />}
            colorScheme="purple"
            variant="ghost"
            fontSize="24px"
          />
          <IconButton
            as={Link}
            href="https://twitter.com/yourusername"
            target="_blank"
            icon={<FaTwitter />}
            colorScheme="purple"
            variant="ghost"
            fontSize="24px"
          />
        </Flex>
      </VStack>
    </Box>
  );
};

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

export default Home;
