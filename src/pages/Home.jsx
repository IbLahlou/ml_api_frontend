import React from 'react';
import {
  Box,
  VStack,
  Text,
  Grid,
  Link,
  Flex,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  const cardBg = "#2c2e33";

  const projects = [
    {
      title: "MLOps Pipeline",
      description: "End-to-end MLOps pipeline for model deployment and monitoring",
      repo: "https://github.com/yourusername/mlops-pipeline",
      demo: "https://demo-link.com"
    },
    {
      title: "Data Engineering Framework",
      description: "Scalable data processing framework with real-time analytics",
      repo: "https://github.com/yourusername/data-framework",
      demo: "https://demo-link.com"
    }
  ];

  return (
    <Box p={8} color="gray.100">
      <VStack spacing={12} align="stretch">
        <VStack spacing={4} align="stretch">
          <Text fontSize="4xl" fontWeight="bold">Welcome to My Portfolio</Text>
          <Text fontSize="xl" color="gray.400">
            Senior Data Engineer & MLOps Specialist
          </Text>
          <Flex gap={4}>
            <Link href="https://github.com/yourusername" isExternal>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com/yourusername" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </Flex>
        </VStack>

        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Featured Projects</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="xl" fontWeight="bold">{project.title}</Text>
                  <Text color="gray.400">{project.description}</Text>
                  <Flex gap={4}>
                    <Link href={project.repo} isExternal>
                      <Button size="sm" leftIcon={<FaGithub />}>
                        Code
                      </Button>
                    </Link>
                    <Link href={project.demo} isExternal>
                      <Button size="sm" leftIcon={<FaExternalLinkAlt />}>
                        Demo
                      </Button>
                    </Link>
                  </Flex>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">About Me</Text>
          <Box p={6} bg={cardBg} borderRadius="lg">
            <Text color="gray.400">
              I'm a passionate Data Engineer and MLOps specialist with extensive experience in building scalable data pipelines
              and deploying machine learning models to production. I specialize in creating efficient, maintainable, and
              robust data infrastructure that drives business value.
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Home;