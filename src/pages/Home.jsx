import React from 'react';
import { Box, VStack, Text, Flex, Icon, Container, Link, Grid } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Home = () => {
  return (
    <Container maxW="container.xl" p={8} color="gray.100">
      <VStack spacing={16} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={6} align="stretch" textAlign="left">
            <MotionText
              fontSize="4xl"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm [Your Name]
            </MotionText>
            <Text fontSize="2xl" color="blue.400">
              Senior Data Engineer & MLOps Specialist
            </Text>
            <Text fontSize="lg" color="gray.400" maxW="800px">
              I specialize in building scalable data infrastructure and deploying machine learning models in production. 
              With over 5 years of experience in the field, I've helped companies transform their data operations and 
              implement efficient MLOps practices.
            </Text>
            <Flex gap={4} mt={4}>
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
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <VStack spacing={4} align="stretch" textAlign="left">
            <Text fontSize="2xl" fontWeight="bold">About Me</Text>
            <Text color="gray.400">
              I'm passionate about creating efficient, scalable solutions for complex data problems. 
              My expertise includes Python, Scala, and various cloud technologies. I enjoy contributing 
              to open-source projects and sharing knowledge through technical writing and speaking engagements.
            </Text>
          </VStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <VStack spacing={4} align="stretch" textAlign="left">
            <Text fontSize="2xl" fontWeight="bold">Skills & Expertise</Text>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
              <VStack align="stretch" bg="#2c2e33" p={4} borderRadius="lg">
                <Text fontWeight="bold">Data Engineering</Text>
                <Text color="gray.400">Python, Scala, SQL, ETL</Text>
              </VStack>
              <VStack align="stretch" bg="#2c2e33" p={4} borderRadius="lg">
                <Text fontWeight="bold">Cloud & DevOps</Text>
                <Text color="gray.400">AWS, Docker, Kubernetes</Text>
              </VStack>
              <VStack align="stretch" bg="#2c2e33" p={4} borderRadius="lg">
                <Text fontWeight="bold">Machine Learning</Text>
                <Text color="gray.400">MLOps, TensorFlow, PyTorch</Text>
              </VStack>
            </Grid>
          </VStack>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default Home;