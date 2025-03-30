
import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
  IconButton,
  Container,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const bgColor = useColorModeValue('#ffffff', '#1a1b1e');
  const cubeColor = useColorModeValue('#e2e8f0', '#2c2e33');
  const textColor = useColorModeValue('#1a202c', '#ffffff');

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box
          p={6}
          bg={cubeColor}
          borderRadius="lg"
          transform="perspective(1000px) rotateX(10deg)"
          transition="transform 0.3s"
          _hover={{ transform: 'perspective(1000px) rotateX(0deg)' }}
          boxShadow="lg"
        >
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            Welcome to My Portfolio
          </Heading>
          <Text fontSize="xl" color={textColor}>
            MLOps Engineer & Data Scientist
          </Text>
        </Box>

        <Box
          p={6}
          bg={cubeColor}
          borderRadius="lg"
          transform="perspective(1000px) rotateY(-5deg)"
          transition="transform 0.3s"
          _hover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
          boxShadow="lg"
        >
          <Text fontSize="lg" color={textColor}>
            I specialize in MLOps and Data Science, focusing on building and deploying machine learning models at scale.
            My expertise includes model deployment, monitoring, and optimization of ML pipelines.
          </Text>
        </Box>

        <SimpleGrid columns={3} spacing={4}>
          {['Github', 'LinkedIn', 'Twitter'].map((platform, index) => (
            <Box
              key={platform}
              p={4}
              bg={cubeColor}
              borderRadius="lg"
              transform={`perspective(1000px) rotateY(${(index - 1) * 5}deg)`}
              transition="transform 0.3s"
              _hover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
              boxShadow="lg"
            >
              <IconButton
                as="a"
                href={`https://${platform.toLowerCase()}.com/yourusername`}
                target="_blank"
                icon={platform === 'Github' ? <FaGithub /> : platform === 'LinkedIn' ? <FaLinkedin /> : <FaTwitter />}
                aria-label={platform}
                size="lg"
                variant="ghost"
                color={textColor}
              />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Home;
