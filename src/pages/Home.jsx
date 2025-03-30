
import React from 'react';
import { Box, VStack, Text, Heading, IconButton, Container, SimpleGrid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" color="gray.500">
            MLOps Engineer & Data Scientist
          </Text>
        </Box>

        <Box>
          <Text fontSize="lg">
            I specialize in MLOps and Data Science, focusing on building and deploying machine learning models at scale.
            My expertise includes model deployment, monitoring, and optimization of ML pipelines.
          </Text>
        </Box>

        <Box mt={8}>
          <SimpleGrid columns={3} spacing={4}>
            <IconButton
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              icon={<FaGithub />}
              aria-label="Github"
              size="lg"
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              size="lg"
              variant="ghost"
            />
            <IconButton
              as="a"
              href="https://twitter.com/yourusername"
              target="_blank"
              icon={<FaTwitter />}
              aria-label="Twitter"
              size="lg"
              variant="ghost"
            />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
