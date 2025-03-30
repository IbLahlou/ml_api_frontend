
import React from 'react';
import { Box, VStack, Text, Heading, IconButton, Image, Container, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="2xl" mb={4}>Welcome to My Portfolio</Heading>
          <Text fontSize="xl" color="gray.400" textAlign="center">
            MLOps Engineer & Data Science Enthusiast
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            whileHover={{ scale: 1.05 }}
            p={6}
            bg="#2c2e33"
            borderRadius="lg"
          >
            <Heading size="md" mb={4}>About Me</Heading>
            <Text>
              Passionate MLOps engineer focused on building and deploying scalable ML solutions.
              Experienced in CI/CD pipelines, model monitoring, and automation.
            </Text>
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.05 }}
            p={6}
            bg="#2c2e33"
            borderRadius="lg"
          >
            <Heading size="md" mb={4}>My Focus</Heading>
            <Text>
              Specializing in MLOps and creating efficient deployment pipelines for machine learning models.
            </Text>
          </MotionBox>
        </SimpleGrid>

        <Box mt={8}>
          <SimpleGrid columns={3} spacing={4}>
            <IconButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              icon={<FaGithub />}
              aria-label="Github"
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
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
